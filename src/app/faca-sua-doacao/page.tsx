import Image from "next/image";
import Header from "@/src/components/ui/Header";
import Button from "@/src/components/ui/Button";

export default function FacaSuaDoacaoPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="absolute top-0 left-0 z-20 w-full bg-transparent px-section py-4">
        <div className="mx-auto max-w-7xl">
          <Header hideCta={true} />
        </div>
      </div>

      <div className="relative flex-1 w-full overflow-hidden shrink-0 flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-doacao.jpg"
            alt="Trilha na floresta"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Opcional overlay para garantir contraste */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-center px-section pt-32 pb-10 sm:pb-14">
          <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            {/* Lado esquerdo: Textos */}
            <div className="max-w-3xl flex-1 flex flex-col justify-between h-full lg:pt-20">
              <div>
                <h1 className="font-baloo text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.85] tracking-tight text-white drop-shadow-md">
                  Existem muitas
                  <br />
                  formas de
                  <br />
                  deixar sua
                  <br />
                  marca
                  <br />
                  nas trilhas.
                </h1>
              </div>
              <div className="mt-12 lg:mt-24">
                <span className="font-casual text-4xl sm:text-5xl uppercase tracking-widest text-white/90 drop-shadow-sm">
                  Trilha do
                  <br />
                  Abacaxi
                </span>
              </div>
            </div>

            {/* Lado direito: Doação */}
            <div className="flex flex-col items-center w-full max-w-[280px] sm:max-w-xs shrink-0 lg:mb-8">
              <div className="w-full flex flex-col">
                <div className="w-full aspect-square bg-[#D9D9D9] flex items-center justify-center">
                  {/* QR Code virá aqui futuramente */}
                </div>
                <div className="w-full bg-[#3AAA35] py-4 px-4 sm:py-5 sm:px-6 flex flex-col items-center justify-center text-center">
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase mb-1">
                    Chave Pix
                  </span>
                  <span className="text-white font-extrabold text-base sm:text-lg">
                    ciclotrilhasfloripa@gmail.com
                  </span>
                </div>
              </div>
              <div className="w-full mt-6">
                <Button href="#" className="w-full h-12 text-sm">
                  QUERO SER PARCEIRO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
