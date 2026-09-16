import Image from "next/image";

type Difficulty = "iniciante" | "intermediario" | "avancado" | "extremo";

type Trail = {
  name: string;
  difficulty: Difficulty;
};

const trails: Trail[] = [
  { name: "Trilha do Abacaxi", difficulty: "iniciante" },
  { name: "Trilha do JP", difficulty: "intermediario" },
  { name: "Trilha das Baterias", difficulty: "avancado" },
  { name: "Trilha do Descampado", difficulty: "intermediario" },
  { name: "Trilha do Colinas", difficulty: "intermediario" },
  { name: "Trilha do Paredão", difficulty: "avancado" },
  { name: "Trilha da Alta Tensão", difficulty: "intermediario" },
  { name: "Maciço da Costeira", difficulty: "avancado" },
  { name: "Trilha do Berne", difficulty: "extremo" },
  { name: "Trilha do Travessão", difficulty: "avancado" },
];

const GRID_SIZE = 12;
const slots: (Trail | null)[] = [
  ...trails,
  ...Array(Math.max(GRID_SIZE - trails.length, 0)).fill(null),
];

const difficultyStyles: Record<Difficulty, { bg: string; label: string }> = {
  iniciante: { bg: "#3AAA35", label: "Iniciante" },
  intermediario: { bg: "#1E5FBF", label: "Intermediário" },
  avancado: { bg: "#0A0A0A", label: "Avançado" },
  extremo: { bg: "#0A0A0A", label: "Extremo" },
};

const badgeImages = {
  iniciante: { sm: "/niveis-trilha/n1.png", lg: "/niveis-trilha/nivel1.png" },
  intermediario: {
    sm: "/niveis-trilha/n2.png",
    lg: "/niveis-trilha/nivel2.png",
  },
  avancado: { sm: "/niveis-trilha/n3.png", lg: "/niveis-trilha/nivel3.png" },
  extremo: { sm: "/niveis-trilha/n4.png", lg: "/niveis-trilha/nivel4.png" },
};

function DifficultyBadge({
  difficulty,
  size = "sm",
}: {
  difficulty: Difficulty;
  size?: "sm" | "lg";
}) {
  const src = badgeImages[difficulty][size];
  const dimensions =
    size === "sm" ? "h-7 w-7 sm:h-8 sm:w-8" : "h-24 w-24 sm:h-28 sm:w-28";

  return (
    <div className={`relative shrink-0 ${dimensions}`}>
      <Image
        src={src}
        alt={`Dificuldade ${difficulty}`}
        fill
        className="object-contain"
      />
    </div>
  );
}

function TrailCard({ trail }: { trail: Trail | null }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] w-full bg-gray-300">
        {trail && (
          <div className="absolute bottom-2 left-2">
            <DifficultyBadge difficulty={trail.difficulty} size="sm" />
          </div>
        )}
      </div>
      <div className="flex min-h-[2.75rem] items-center bg-black px-3 py-2 sm:min-h-[3.25rem]">
        {trail && (
          <span className="font-baloo text-sm uppercase leading-tight text-white sm:text-base">
            {trail.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Trails() {
  return (
    <div className="w-full bg-[#15311B] py-14 sm:py-20">
      <div className="mx-auto px-section">
        <div className="mb-8 flex items-center justify-between gap-6 sm:mb-10">
          <h2 className="font-baloo text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
            Quais são
            <br />
            as trilhas?
          </h2>
          <div className="relative h-16 w-32 shrink-0 sm:h-20 sm:w-40">
            <Image
              src="/logos/logo-trailforks.png"
              alt="Logo Trailforks"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {slots.map((trail, index) => (
            <TrailCard key={index} trail={trail} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-8 rounded-md bg-white px-6 py-8 sm:mt-8 lg:flex-row lg:justify-between lg:gap-4">
          <span className="text-center font-baloo text-3xl uppercase leading-none text-black md:text-4xl lg:text-left lg:text-5xl">
            Respeite
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            seu limite!
          </span>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:flex-nowrap md:justify-center md:gap-4 lg:gap-4">
            {(Object.keys(difficultyStyles) as Difficulty[]).map(
              (difficulty) => (
                <div key={difficulty} className="flex flex-col items-center">
                  <DifficultyBadge difficulty={difficulty} size="lg" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
