import Image from "next/image";
import Header from "../ui/Header";
import Partners from "./Partners";

export default function Hero() {
  return (
    <div className="relative w-full flex flex-col">
      <div className="absolute top-0 left-0 z-20 w-full bg-transparent px-section py-4">
        <div className="mx-auto max-w-7xl">
          <Header ctaText="Conheça as trilhas" />
        </div>
      </div>

      <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden sm:h-[100dvh] shrink-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-section pb-10 sm:pb-14">
          <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
            {/* Texto Hero */}
            <div className="w-full flex-1 flex flex-col justify-end pb-8 md:pb-0">
              <div className="max-w-3xl">
                <h1 className="font-baloo text-5xl uppercase leading-[0.85] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md">
                  Trilhas vivas,
                  <br />
                  Comunidade
                  <br />
                  em movimento.
                </h1>
                <p className="font-amsi mt-5 max-w-xl text-lg leading-relaxed text-white sm:mt-6 sm:text-2xl md:text-3xl md:leading-snug drop-shadow-sm">
                  Cuidamos dos caminhos que conectam pessoas, natureza <br /> e
                  mountain bike em Florianópolis - SC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners />
    </div>
  );
}
