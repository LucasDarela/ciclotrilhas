import Image from "next/image";
import Button from "../ui/Button";

export default function CamisetaTrilhaHero() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden sm:h-[100dvh]">
        <Image
          src="/images/bg-trilha-2.png"
          alt="Pessoas usando a Camiseta Trilha CicloTrilhas na montanha"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-end px-section pb-10 sm:pb-14">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h1 className="font-baloo text-5xl uppercase leading-none text-white drop-shadow-md sm:text-6xl md:text-7xl">
                Camiseta
              </h1>
              <div className="relative -mt-1 sm:-mt-2">
                <span className="font-domea text-7xl uppercase leading-none text-[#3AAA35] drop-shadow-md sm:text-8xl md:text-9xl">
                  TRILHA
                </span>
                <span className="font-casual absolute bottom-1 left-3 text-xl text-white drop-shadow-sm sm:bottom-2 sm:left-18 sm:text-2xl md:text-5xl">
                  tecido poliamida
                </span>
              </div>
            </div>

            <Button
              href="#"
              variant="primary-green"
              className="shrink-0 px-8 py-4 text-sm sm:text-base text-black"
            >
              Quero comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
