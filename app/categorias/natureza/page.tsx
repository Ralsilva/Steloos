import PortugueseLayout from '../../components/PortugueseLayout'

export default function CategoriaNatureza() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Banner da página */}
        <div className="bg-[#22C55E] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading">Categoria: Natureza</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Estórias que ensinam sobre natureza, meio ambiente e respeito aos animais.
          </p>
        </div>

        {/* Lista de estórias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image" style={{ backgroundColor: '#22C55E' }}></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">Estória de Natureza {i}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  Uma estória sobre natureza e meio ambiente que ensina valores importantes para as crianças...
                </p>
                <a
                  href={`/estorias/${i}`}
                  className="read-more text-[#22C55E] hover:text-[#16A34A]"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Voltar para categorias */}
        <div className="mt-8">
          <a 
            href="/categorias" 
            className="text-[#22C55E] hover:text-[#16A34A] flex items-center"
          >
            ← Voltar para todas as categorias
          </a>
        </div>
      </div>
    </PortugueseLayout>
  )
}
