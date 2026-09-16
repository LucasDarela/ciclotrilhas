import Image from "next/image";
import Button from "../ui/Button";

export default function Partners() {
  return (
    <div className="w-full bg-[#3AAA35] py-8 sm:py-10">
      <div className="flex w-full flex-col items-center justify-between gap-8 px-section md:flex-row">
        {/* Lado esquerdo: Texto + Logos */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          <span className="font-casual text-3xl uppercase tracking-widest text-black sm:text-3xl">
            PARCEIROS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="relative h-10 w-36 sm:h-12 sm:w-44">
              <Image
                src="/logos/logo-02.png"
                alt="Draisiana"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <div className="relative h-10 w-24 sm:h-12 sm:w-28">
              <Image
                src="/logos/logo-03.png"
                alt="Creative"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>
        </div>

        {/* Lado direito: Botão */}
        <div className="mt-2 md:mt-0 ">
          <Button href="#">QUERO SER PARCEIRO</Button>
        </div>
      </div>
    </div>
  );
}
