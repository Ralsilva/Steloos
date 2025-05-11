export default function Categories({ params }: { params: { lang: string } }) {
  const isEnglish = params.lang === 'en';
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 font-heading">
        {isEnglish ? 'Categories' : 'Categorias'}
      </h1>
      <p className="mb-6">
        {isEnglish 
          ? 'Explore our stories by category.' 
          : 'Explore nossas estórias por categoria.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="category-card category-amor p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Love' : 'Amor'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about love and compassion' 
              : 'Estórias sobre amor e compaixão'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/love' : 'categorias/amor'}`}
            className="bg-white text-[#F59E0B] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-paz p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Peace' : 'Paz'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about peace and harmony' 
              : 'Estórias sobre paz e harmonia'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/peace' : 'categorias/paz'}`}
            className="bg-white text-[#F97316] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-sabedoria p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Wisdom' : 'Sabedoria'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about wisdom and knowledge' 
              : 'Estórias sobre sabedoria e conhecimento'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/wisdom' : 'categorias/sabedoria'}`}
            className="bg-white text-[#8B5CF6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-bondade p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Kindness' : 'Bondade'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about kindness and generosity' 
              : 'Estórias sobre bondade e generosidade'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/kindness' : 'categorias/bondade'}`}
            className="bg-white text-[#10B981] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-fe p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Faith' : 'Fé'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about faith and hope' 
              : 'Estórias sobre fé e esperança'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/faith' : 'categorias/fe'}`}
            className="bg-white text-[#3B82F6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-natureza p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Nature' : 'Natureza'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about nature and the environment' 
              : 'Estórias sobre a natureza e o meio ambiente'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/nature' : 'categorias/natureza'}`}
            className="bg-white text-[#22C55E] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-familia p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Family' : 'Família'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about family and relationships' 
              : 'Estórias sobre família e relacionamentos'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/family' : 'categorias/familia'}`}
            className="bg-white text-[#EC4899] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
        
        <div className="category-card category-amizade p-6">
          <h2 className="text-xl font-semibold mb-2">
            {isEnglish ? 'Friendship' : 'Amizade'}
          </h2>
          <p className="text-white opacity-90 mb-4">
            {isEnglish 
              ? 'Stories about friendship and companionship' 
              : 'Estórias sobre amizade e companheirismo'}
          </p>
          <a 
            href={`/${params.lang}/${isEnglish ? 'categories/friendship' : 'categorias/amizade'}`}
            className="bg-white text-[#6366F1] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            {isEnglish ? 'View stories →' : 'Ver estórias →'}
          </a>
        </div>
      </div>
    </div>
  )
}
