import PortugueseLayout from '../../components/PortugueseLayout'

export default function CategoriaAmizade() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Banner da página */}
        <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading">Categoria: Amizade</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Estórias que ensinam sobre amizade, companheirismo e lealdade.
          </p>
        </div>

        {/* Lista de estórias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image" style={{ backgroundColor: '#6366F1' }}></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">Estória de Amizade {i}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  Uma estória sobre amizade e companheirismo que ensina valores importantes para as crianças...
                </p>
                <a
                  href={`/estorias/${i}`}
                  className="read-more text-[#6366F1] hover:text-[#4F46E5]"
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
            className="text-[#6366F1] hover:text-[#4F46E5] flex items-center"
          >
            ← Voltar para todas as categorias
          </a>
        </div>
      </div>
    </PortugueseLayout>
  )
}
