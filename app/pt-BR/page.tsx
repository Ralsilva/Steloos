export default function PtBrPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner principal */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8 relative overflow-hidden" style={{ minHeight: '400px' }}>
        <div className="max-w-xl relative z-10 flex flex-col justify-center h-full" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h1 className="text-3xl font-bold mb-2 font-heading">STELOOS</h1>
          <h2 className="text-2xl font-bold mb-2 font-heading">A Estrelinha de Luz!</h2>
          <h3 className="text-xl font-bold mb-4 font-heading">Estórias de Luz para Crianças</h3>
          <p className="text-lg opacity-90 mb-6">
            Compartilhando valores de paz, amor e sabedoria.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/estorias" className="bg-[#FF9D5C] text-white px-6 py-3 rounded-md hover:bg-[#F08C4B] transition-colors">
              Explorar Estórias
            </a>
            <a href="/categorias" className="bg-white text-[#FF9D5C] border border-[#FF9D5C] px-6 py-3 rounded-md hover:bg-[#FFF8F5] transition-colors">
              Ver Categorias
            </a>
          </div>
        </div>
        <div className="absolute right-1/4 transform translate-x-1/4 bottom-0 hidden md:flex justify-center items-end">
          <img
            src="/assets/images/home-01.png"
            alt="Crianças lendo estórias"
            className="h-96 object-contain"
          />
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar estórias..."
        />
      </div>

      {/* Categorias */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 font-heading text-[#333333]">
          Explorar por Categoria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/categorias/amor" className="category-card category-amor p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/amor.png" alt="Amor" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Amor</h3>
          </a>
          <a href="/categorias/paz" className="category-card category-paz p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/paz.png" alt="Paz" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Paz</h3>
          </a>
          <a href="/categorias/protecao" className="category-card category-fe p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/fe.png" alt="Proteção" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Proteção</h3>
          </a>
          <a href="/categorias/sabedoria" className="category-card category-sabedoria p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/sabedoria.png" alt="Sabedoria" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Sabedoria</h3>
          </a>
          <a href="/categorias/bondade" className="category-card category-bondade p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/bondade.png" alt="Bondade" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Bondade</h3>
          </a>
          <a href="/categorias/natureza" className="category-card category-natureza p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/natureza.png" alt="Natureza" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Natureza</h3>
          </a>
          <a href="/categorias/familia" className="category-card category-familia p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/familia.png" alt="Família" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Família</h3>
          </a>
          <a href="/categorias/amizade" className="category-card category-amizade p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/amizade.png" alt="Amizade" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Amizade</h3>
          </a>
        </div>
      </section>

      {/* Estórias em Destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 font-heading text-[#333333]">
          Estórias em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image"></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">Título da Estória {i}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  Uma breve descrição da estória que desperta o interesse do leitor...
                </p>
                <a
                  href={`/estorias/${i}`}
                  className="read-more"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estórias Recentes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 font-heading text-[#333333]">
          Estórias Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[4, 5, 6].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image"></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">Título da Estória {i}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  Uma breve descrição da estória que desperta o interesse do leitor...
                </p>
                <a
                  href={`/estorias/${i}`}
                  className="read-more"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Imaginação */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#333333]">
              Estórias que Estimulam a Imaginação
            </h2>
            <p className="mb-4 text-[#666666]">
              Nossas estórias são cuidadosamente escritas para inspirar valores positivos e estimular a imaginação das crianças.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Estórias que ensinam valores importantes
              </li>
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Conteúdo adequado para todas as idades
              </li>
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Ilustrações encantadoras
              </li>
            </ul>
            <a href="/sobre" className="bg-[#FF9D5C] text-white px-6 py-2 rounded-md inline-block mt-4 hover:bg-[#F08C4B] transition-colors">
              Saiba Mais
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src="/assets/images/magic.jpg"
              alt="Criança imaginando mundos mágicos"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 font-heading text-[#333333]">
          O que as Famílias Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "Meus filhos adoram as estórias do STELOOS. Eles sempre pedem mais uma antes de dormir!"
            </p>
            <p className="font-semibold">- Maria Silva</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "As estórias são maravilhosas e ensinam valores importantes de uma forma que as crianças entendem."
            </p>
            <p className="font-semibold">- João Santos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "Recomendo para todos os pais que querem incentivar bons valores em seus filhos."
            </p>
            <p className="font-semibold">- Ana Oliveira</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2 className="text-xl font-bold mb-4 font-heading">Receba Novas Estórias</h2>
        <p className="mb-4 opacity-90">
          Inscreva-se para receber nossas novas estórias diretamente no seu email.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            placeholder="Seu email"
            className="flex-grow px-4 py-2 rounded-md"
          />
          <button className="bg-white text-[#FF9D5C] px-4 py-2 rounded-md font-medium">
            Inscrever
          </button>
        </div>
      </section>
    </div>
  )
}