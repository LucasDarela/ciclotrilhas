export default function PilaresQuemSomos() {
  return (
    <section className="w-full bg-[#111111] text-gray-300 px-section py-20 lg:py-32">
      <div className="mx-auto font-amsi text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wide space-y-16">
        {/* Intro */}
        <div className="space-y-6">
          <p>
            O <span className="font-bold text-white">CicloTrilhas Floripa</span>{" "}
            é um movimento formado por pessoas que acreditam que pedalar também
            é uma forma de cuidar. Nossa missão é contribuir para o
            desenvolvimento e a preservação das trilhas de Florianópolis,
            promovendo o mountain bike de forma consciente, segura e
            sustentável, conectando ciclistas, comunidade, poder público e meio
            ambiente.
          </p>
          <p>
            Inspirados por boas práticas internacionais de manejo e convivência
            em trilhas, como as difundidas pela IMBA, construímos nossa
            filosofia sobre quatro princípios:
          </p>
        </div>

        {/* Pilares Title */}
        <div>
          <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest mt-12 mb-8">
            OS 4 PILARES:
          </h2>
        </div>

        {/* Pillar 1 */}
        <div className="space-y-6">
          <h3 className="font-bold text-[#3AAA35] text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest">
            1_CONVERSE
          </h3>
          <div className="space-y-4">
            <p>Toda boa trilha começa pelo diálogo.</p>
            <p>
              Antes de qualquer intervenção, buscamos ouvir, entender e
              construir caminhos em conjunto. Florianópolis possui ecossistemas
              sensíveis, unidades de conservação e áreas de proteção que
              precisam ser respeitadas. Por isso, acreditamos na aproximação com
              órgãos ambientais, poder público, proprietários, associações,
              moradores e demais usuários das trilhas. Manejar também significa
              dialogar, informar e construir relações.
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="space-y-6">
          <h3 className="font-bold text-[#3AAA35] text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest">
            2_MANEJE
          </h3>
          <div className="space-y-4">
            <p>Cuidar da trilha é cuidar do caminho.</p>
            <p>
              Uma trilha bem manejada proporciona uma experiência melhor para
              quem pedala e reduz os impactos causados pelo uso, pela água e
              pela erosão. Nosso trabalho busca incentivar técnicas responsáveis
              de manejo, drenagem, recuperação e conservação do solo, sempre
              respeitando as características naturais de cada ambiente e as
              autorizações necessárias. Mais do que abrir caminhos, queremos
              contribuir para que eles permaneçam seguros, sustentáveis e vivos
              por muitos anos.
            </p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="space-y-6">
          <h3 className="font-bold text-[#3AAA35] text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest">
            3_RESPEITE
          </h3>
          <div className="space-y-4">
            <p>A trilha é de todos.</p>
            <p>
              Respeitamos quem caminha, quem corre, quem pedala, quem mora
              próximo e, principalmente, a natureza que torna tudo isso
              possível. Isso significa permanecer nos caminhos existentes,
              preservar a vegetação, conhecer nossos próprios limites, ajudar
              quem está começando e compreender o momento certo de pedalar —
              inclusive evitando trilhas vulneráveis após períodos de chuva.
              Boas atitudes dentro da trilha fortalecem toda a comunidade e
              ajudam a construir uma imagem positiva do mountain bike.
            </p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="space-y-6">
          <h3 className="font-bold text-[#3AAA35] text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest">
            4_PEDALE
          </h3>
          <div className="space-y-4">
            <p>Depois de conversar, cuidar e respeitar, é hora de pedalar.</p>
            <p>
              Florianópolis é nosso quintal, nosso terreno de aventura e nossa
              conexão com a natureza.
            </p>
            <p>
              Pedalamos para explorar, encontrar pessoas, superar limites e
              viver tudo aquilo que uma trilha pode proporcionar.
            </p>
            <p>Mas queremos fazer isso deixando algo positivo pelo caminho.</p>
            <p className="font-bold text-white text-xl sm:text-2xl mt-8">
              Converse, maneje, respeite e pedale.
            </p>
            <p>
              Essa é a nossa forma de construir uma cultura de trilhas mais
              consciente e garantir que as próximas gerações também possam
              encontrar na Ilha caminhos para explorar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
