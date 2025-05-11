import PortugueseLayout from '../components/PortugueseLayout'

export default function Sobre() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Sobre o STELOOS</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Conheça nossa história, missão e os valores que inspiram nossas estórias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Nossa História</h2>
            <p className="mb-4 text-[#333333]">
              STELOOS é um projeto dedicado a criar e compartilhar estórias infantis que promovem valores espirituais, paz, amor e sabedoria.
            </p>
            <p className="mb-4 text-[#333333]">
              Nossa missão é inspirar crianças através de narrativas que cultivam valores positivos e promovem o desenvolvimento espiritual e emocional.
            </p>
            <p className="mb-4 text-[#333333]">
              Fundado em 2023, o STELOOS nasceu do desejo de oferecer conteúdo de qualidade que ajude as crianças a desenvolverem uma compreensão mais profunda de si mesmas e do mundo ao seu redor.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Nossa Visão</h2>
            <p className="mb-4 text-[#333333]">
              Acreditamos que as estórias têm o poder de moldar mentes jovens e plantar sementes de sabedoria que florescerão ao longo da vida.
              Através de narrativas cuidadosamente elaboradas, buscamos criar um mundo onde as crianças cresçam com valores de compaixão,
              respeito pela natureza e compreensão da interconexão de todas as coisas.
            </p>
            <p className="mb-4 text-[#333333]">
              Nosso objetivo é que cada estória seja uma jornada de descoberta, onde as crianças possam encontrar inspiração, conforto e sabedoria.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Nossos Valores</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">♥</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Amor e Compaixão</h3>
                  <p className="text-[#666666]">Por todos os seres e pela natureza</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">☮</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Paz</h3>
                  <p className="text-[#666666]">Interior e harmonia com o mundo</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">✨</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Sabedoria</h3>
                  <p className="text-[#666666]">Discernimento e conhecimento</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">🌱</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Respeito</h3>
                  <p className="text-[#666666]">Pela natureza e pelo meio ambiente</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">🤲</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Bondade</h3>
                  <p className="text-[#666666]">Generosidade e altruísmo</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#FF9D5C] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 font-heading">Junte-se a Nós</h2>
            <p className="mb-4 opacity-90">
              Quer fazer parte desta jornada? Inscreva-se para receber nossas novas estórias.
            </p>
            <input
              type="email"
              placeholder="Seu email"
              className="w-full px-4 py-2 rounded-md mb-2 text-[#333333]"
            />
            <button className="w-full bg-white text-[#FF9D5C] px-4 py-2 rounded-md font-medium">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </div>
    </PortugueseLayout>
  )
}