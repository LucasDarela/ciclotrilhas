import Image from "next/image";

const products = [
  {
    src: "/images/camiseta2-verde.png",
    alt: "Camiseta Trilha CicloTrilhas verde, frente e verso",
  },
  {
    src: "/images/camiseta2-marrom.png",
    alt: "Camiseta Trilha CicloTrilhas marrom, frente e verso",
  },
  {
    src: "/images/camiseta-fem-1.png",
    alt: "Camiseta Trilha CicloTrilhas marrom, frente e verso",
  },
  {
    src: "/images/camiseta-fem-2.png",
    alt: "Camiseta Trilha CicloTrilhas verde, frente e verso",
  },
];

export default function ProdutosTrilhaGrid() {
  return (
    <div className="w-full bg-[#D9D9D9] px-section py-16 overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-12 sm:gap-y-16">
        {products.map((product, index) => {
          const isRightColumn = index % 2 === 1;
          return (
            <div
              key={index}
              className={`relative aspect-square w-full sm:aspect-[4/3] lg:aspect-[4/3] ${
                isRightColumn
                  ? "-ml-2 sm:-ml-6 lg:-ml-10"
                  : "-mr-2 sm:-mr-6 lg:-mr-10"
              }`}
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
