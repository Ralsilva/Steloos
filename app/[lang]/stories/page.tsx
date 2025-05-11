export default function Stories({ params }: { params: { lang: string } }) {
  const isEnglish = params.lang === 'en';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 font-heading">
        {isEnglish ? 'Stories' : 'Estórias'}
      </h1>
      <p className="mb-6">
        {isEnglish
          ? 'Explore our collection of stories for children.'
          : 'Explore nossa coleção de estórias para crianças.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder para estórias */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="story-card">
            <div className="story-card-image"></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">
                {isEnglish ? `Story Title ${i}` : `Título da Estória ${i}`}
              </h3>
              <p className="text-[#666666] text-sm mb-4">
                {isEnglish
                  ? 'A brief description of the story...'
                  : 'Uma breve descrição da estória...'}
              </p>
              <a
                href={`/${params.lang}/${isEnglish ? 'stories' : 'estorias'}/${i}`}
                className="read-more"
              >
                {isEnglish ? 'Read more →' : 'Ler mais →'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
