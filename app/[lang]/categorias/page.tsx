import { redirect } from 'next/navigation'

export default function Categorias({ params }: { params: { lang: string } }) {
  // Se o idioma for inglês, redireciona para a versão em inglês
  if (params.lang === 'en') {
    redirect('/en/categories')
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 font-heading">Categorias</h1>
      <p className="mb-6">
        Explore nossas estórias por categoria.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="category-card category-amor p-6">
          <h2 className="text-xl font-semibold mb-2">Amor</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre amor e compaixão</p>
          <a 
            href={`/${params.lang}/categorias/amor`}
            className="bg-white text-[#F59E0B] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-paz p-6">
          <h2 className="text-xl font-semibold mb-2">Paz</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre paz e harmonia</p>
          <a 
            href={`/${params.lang}/categorias/paz`}
            className="bg-white text-[#F97316] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-sabedoria p-6">
          <h2 className="text-xl font-semibold mb-2">Sabedoria</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre sabedoria e conhecimento</p>
          <a 
            href={`/${params.lang}/categorias/sabedoria`}
            className="bg-white text-[#8B5CF6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-bondade p-6">
          <h2 className="text-xl font-semibold mb-2">Bondade</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre bondade e generosidade</p>
          <a 
            href={`/${params.lang}/categorias/bondade`}
            className="bg-white text-[#10B981] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-fe p-6">
          <h2 className="text-xl font-semibold mb-2">Fé</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre fé e esperança</p>
          <a 
            href={`/${params.lang}/categorias/fe`}
            className="bg-white text-[#3B82F6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-natureza p-6">
          <h2 className="text-xl font-semibold mb-2">Natureza</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre a natureza e o meio ambiente</p>
          <a 
            href={`/${params.lang}/categorias/natureza`}
            className="bg-white text-[#22C55E] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-familia p-6">
          <h2 className="text-xl font-semibold mb-2">Família</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre família e relacionamentos</p>
          <a 
            href={`/${params.lang}/categorias/familia`}
            className="bg-white text-[#EC4899] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
        
        <div className="category-card category-amizade p-6">
          <h2 className="text-xl font-semibold mb-2">Amizade</h2>
          <p className="text-white opacity-90 mb-4">Estórias sobre amizade e companheirismo</p>
          <a 
            href={`/${params.lang}/categorias/amizade`}
            className="bg-white text-[#6366F1] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            Ver estórias →
          </a>
        </div>
      </div>
    </div>
  )
}
