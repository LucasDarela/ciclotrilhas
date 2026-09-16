import Image from "next/image";
import Header from "@/src/components/ui/Header";
import PilaresQuemSomos from "@/src/components/sessions/PilaresQuemSomos";
import Partners from "@/src/components/sessions/Partners";

export default function QuemSomosPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#16301B]">
      {/* Header Fixo/Sólido com fundo verde escuro */}
      <div className="relative z-20 w-full bg-[#16301B] px-section py-4">
        <div className="mx-auto max-w-7xl">
          <Header
            ctaText="QUERO SER PARCEIRO"
            ctaClassName="!shadow-none !rounded-2xl !bg-white !text-black border-2 border-black hover:!bg-black hover:!text-white"
          />
        </div>
      </div>

      <div className="relative flex-1 w-full overflow-hidden shrink-0 flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/quem-somos-bg.jpg"
            alt="Equipe trabalhando na trilha"
            fill
            priority
            className="object-cover object-[50%_25%]"
          />
          {/* Leve escurecimento para melhorar leitura do texto caso necessário */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 flex-1 flex flex-col px-section pt-12 pb-10 sm:pb-14">
          <div className="mx-auto w-full max-w-7xl flex flex-col flex-1">
            <div className="max-w-4xl pt-8 lg:pt-12">
              <h1 className="font-baloo text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] uppercase leading-[0.85] tracking-tight text-white drop-shadow-md">
                SOMOS FEITOS
                <br />
                DE TRILHA.
              </h1>
              <p className="mt-8 font-bold text-white text-lg sm:text-xl md:text-2xl leading-snug drop-shadow-md max-w-xs sm:max-w-sm md:max-w-md">
                O CicloTrilhas Floripa nasceu de pessoas que entenderam que usar
                as trilhas também significa assumir a responsabilidade de cuidar
                delas.
              </p>
            </div>

            {/* Texto inferior direito */}
            <div className="flex-1 flex items-end justify-end mt-12">
              <span className="font-casual text-4xl sm:text-5xl uppercase tracking-widest text-white/90 drop-shadow-sm text-right">
                TRILHA DO JP
              </span>
            </div>
          </div>
        </div>
      </div>

      <PilaresQuemSomos />

      {/* Imagem de ação antes do rodapé/parceiros */}
      <div className="relative w-full h-[60vh] md:h-[80vh] min-h-[400px]">
        <Image
          src="/images/colinas.jpg"
          alt="Ciclista saltando na trilha"
          fill
          className="object-cover object-center"
        />
      </div>

      <Partners />
    </div>
  );
}
