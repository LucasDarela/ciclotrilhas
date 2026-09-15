import Image from "next/image";

const products = [
  {
    src: "/images/enduro-masc-1.png",
    alt: "Camiseta Enduro CicloTrilhas verde, frente e verso",
  },
  {
    src: "/images/enduro-masc-2.png",
    alt: "Camiseta Enduro CicloTrilhas marrom, frente e verso",
  },
  {
    src: "/images/camiseta-marrom-juntas.png",
    alt: "Camiseta Enduro CicloTrilhas marrom, frente e verso",
  },
  {
    src: "/images/camiseta-verde-juntas.png",
    alt: "Camiseta Enduro CicloTrilhas verde, frente e verso",
  },
];

export default function ProdutosGrid() {
  return (
    <div className="w-full bg-[#D9D9D9] px-section py-16 overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2">
        {products.map((product, index) => {
          const isRightColumn = index % 2 === 1;
          return (
            <div
              key={index}
              className={`relative aspect-square w-full sm:aspect-[4/3] lg:aspect-[4/3] `}
            >
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain scale-110 sm:scale-115"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
