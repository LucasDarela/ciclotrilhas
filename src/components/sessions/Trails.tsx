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

function DifficultyIcon({ difficulty }: { difficulty: Difficulty }) {
  switch (difficulty) {
    case "iniciante":
      return (
        <svg viewBox="0 0 24 24" className="h-full w-full p-1.5">
          <polyline
            points="5,13 10,18 19,6"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "intermediario":
      return (
        <svg viewBox="0 0 24 24" className="h-full w-full p-1.5">
          <polyline
            points="3,17 8,9 12,14 16,6 21,13"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "avancado":
      return (
        <svg viewBox="0 0 24 24" className="h-full w-full p-1.5">
          <polygon points="12,4 20,12 12,20 4,12" fill="white" />
        </svg>
      );
    case "extremo":
      return (
        <svg viewBox="0 0 24 24" className="h-full w-full p-1.5">
          <polygon points="7.5,4 13.5,12 7.5,20 1.5,12" fill="white" />
          <polygon points="16.5,4 22.5,12 16.5,20 10.5,12" fill="white" />
        </svg>
      );
  }
}

function DifficultyBadge({
  difficulty,
  size = "sm",
}: {
  difficulty: Difficulty;
  size?: "sm" | "lg";
}) {
  const style = difficultyStyles[difficulty];
  const dimensions = size === "sm" ? "h-7 w-7 sm:h-8 sm:w-8" : "h-14 w-14 sm:h-16 sm:w-16";

  return (
    <div
      className={`${dimensions} shrink-0 rounded-sm`}
      style={{ backgroundColor: style.bg }}
    >
      <DifficultyIcon difficulty={difficulty} />
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
      <div className="mx-auto max-w-7xl px-section">
        <div className="mb-8 flex items-center justify-between gap-6 sm:mb-10">
          <h2 className="font-baloo text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-5xl">
            Quais são
            <br />
            as trilhas?
          </h2>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-dashed border-white/30 sm:h-20 sm:w-20">
            <span className="text-center text-[10px] uppercase text-white/50">
              Logo Trailforks
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {slots.map((trail, index) => (
            <TrailCard key={index} trail={trail} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-md bg-white px-6 py-6 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
          <span className="font-baloo text-2xl uppercase leading-none text-black sm:text-3xl">
            Respeite
            <br />
            seu limite!
          </span>
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            {(Object.keys(difficultyStyles) as Difficulty[]).map((difficulty) => (
              <div key={difficulty} className="flex flex-col items-center gap-2">
                <DifficultyBadge difficulty={difficulty} size="lg" />
                <span className="text-center text-xs font-semibold uppercase text-black">
                  {difficultyStyles[difficulty].label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
