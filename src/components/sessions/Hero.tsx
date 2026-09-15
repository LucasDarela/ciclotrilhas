import Image from "next/image";
import Header from "../ui/Header";
import Partners from "./Partners";

export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative h-dvh w-full overflow-hidden shrink-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-section py-6 sm:py-8">
          <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
            <Header />

            {/* Texto Hero */}
            <div className="w-full flex-1 flex flex-col justify-center pb-20 md:justify-end md:pb-0">
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
