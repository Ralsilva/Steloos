import PortugueseLayout from '../components/PortugueseLayout'

export default function Categorias() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Categorias</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Explore nossas estórias por categoria e descubra histórias que inspiram valores positivos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="category-card category-amor p-6">
          <h2 className="text-xl font-semibold mb-2">Amor</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre amor e compaixão</p>
          <a
            href="/categorias/amor"
            className="bg-white text-[#F59E0B] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-paz p-6">
          <h2 className="text-xl font-semibold mb-2">Paz</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre paz e harmonia</p>
          <a
            href="/categorias/paz"
            className="bg-white text-[#F97316] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-sabedoria p-6">
          <h2 className="text-xl font-semibold mb-2">Sabedoria</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre sabedoria e conhecimento</p>
          <a
            href="/categorias/sabedoria"
            className="bg-white text-[#8B5CF6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-bondade p-6">
          <h2 className="text-xl font-semibold mb-2">Bondade</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre bondade e generosidade</p>
          <a
            href="/categorias/bondade"
            className="bg-white text-[#10B981] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-fe p-6">
          <h2 className="text-xl font-semibold mb-2">Proteção</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre proteção, cuidado e segurança</p>
          <a
            href="/categorias/protecao"
            className="bg-white text-[#3B82F6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-natureza p-6">
          <h2 className="text-xl font-semibold mb-2">Natureza</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre a natureza e o meio ambiente</p>
          <a
            href="/categorias/natureza"
            className="bg-white text-[#22C55E] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-familia p-6">
          <h2 className="text-xl font-semibold mb-2">Família</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre família e relacionamentos</p>
          <a
            href="/categorias/familia"
            className="bg-white text-[#EC4899] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>

        <div className="category-card category-amizade p-6">
          <h2 className="text-xl font-semibold mb-2">Amizade</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre amizade e companheirismo</p>
          <a
            href="/categorias/amizade"
            className="bg-white text-[#6366F1] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
      </div>
    </div>
    </PortugueseLayout>
  )
}