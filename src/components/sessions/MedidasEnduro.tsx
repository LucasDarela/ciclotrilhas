import Image from "next/image";

export default function MedidasEnduro() {
  return (
    <div className="w-full bg-[#111111] px-section py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative aspect-[3/1] w-full max-w-5xl mx-auto sm:aspect-[2114/713]">
          <Image
            src="/images/medidas-enduro.png"
            alt="Tabela de medidas"
            fill
            sizes="(min-width: 1024px) 100vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
