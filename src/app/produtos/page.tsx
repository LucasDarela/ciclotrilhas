import CamisetaHero from "@/src/components/sessions/CamisetaHero";
import ProdutosGrid from "@/src/components/sessions/ProdutosGrid";
import MedidasEnduro from "@/src/components/sessions/MedidasEnduro";
import CamisetaTrilhaHero from "@/src/components/sessions/CamisetaTrilhaHero";
import ProdutosTrilhaGrid from "@/src/components/sessions/ProdutosTrilhaGrid";
import MedidasTrilha from "@/src/components/sessions/MedidasTrilha";
import Partners from "@/src/components/sessions/Partners";

export default function ProdutosPage() {
  return (
    <>
      <CamisetaHero />
      <ProdutosGrid />
      <MedidasEnduro />
      <CamisetaTrilhaHero />
      <ProdutosTrilhaGrid />
      <MedidasTrilha />
      <Partners />
    </>
  );
}
