import Link from 'next/link'
import PortugueseLayout from '../components/PortugueseLayout'

export default function Estorias() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Estórias</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Explore nossa coleção de estórias para crianças, criadas para inspirar valores positivos e estimular a imaginação.
        </p>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-bar mb-8">
        <input
          type="text"
          className="search-input"
          placeholder="Procurar estórias..."
        />
      </div>

      {/* Filtros */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="bg-white text-[#6366F1] border border-[#6366F1] px-4 py-2 rounded-md hover:bg-[#6366F1] hover:text-white transition-colors">
          Todas
        </button>
        <button className="bg-white text-[#FF9D5C] border border-[#FF9D5C] px-4 py-2 rounded-md hover:bg-[#FF9D5C] hover:text-white transition-colors">
          Mais Recentes
        </button>
        <button className="bg-white text-[#10B981] border border-[#10B981] px-4 py-2 rounded-md hover:bg-[#10B981] hover:text-white transition-colors">
          Mais Populares
        </button>
      </div>

      {/* Lista de estórias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Estórias disponíveis */}
        {[
          { id: 1, title: "A Estrelinha que Iluminava o Caminho", desc: "Uma estória sobre uma pequena estrela que desce à Terra para ajudar uma menina com medo do escuro.", category: "Amor", time: "5 min" },
          { id: 2, title: "O Lago da Tranquilidade", desc: "Uma estória sobre um lago mágico onde os animais encontram paz e harmonia.", category: "Paz", time: "6 min" },
          { id: 3, title: "O Pequeno Semeador de Esperança", desc: "Uma estória sobre um menino que ajuda sua vila a encontrar esperança em tempos difíceis.", category: "Proteção", time: "4 min" },
          { id: 4, title: "A Coruja Sábia", desc: "Uma estória sobre uma coruja que compartilha sua sabedoria com os animais da floresta.", category: "Sabedoria", time: "7 min" },
          { id: 5, title: "O Abraço Mágico", desc: "Uma estória sobre o poder do abraço e como ele pode transmitir amor e conforto.", category: "Amor", time: "5 min" },
          { id: 6, title: "O Menino que Ajudava a Todos", desc: "Uma estória sobre um menino que descobre a alegria de ajudar os outros.", category: "Bondade", time: "6 min" }
        ].map((estoria) => (
          <div key={estoria.id} className="story-card hover:shadow-md transition-shadow">
            <div className="story-card-image"></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">{estoria.title}</h3>
              <p className="text-[#666666] text-sm mb-4">
                {estoria.desc}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/estorias/${estoria.id}`}
                  className="read-more"
                >
                  Ler mais →
                </Link>
                <span className="text-xs text-[#666666]">{estoria.time} de leitura</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#6366F1] text-white">1</a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">2</a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">3</a>
          <span className="w-10 h-10 flex items-center justify-center">...</span>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">10</a>
        </div>
      </div>
    </div>
    </PortugueseLayout>
  )
}