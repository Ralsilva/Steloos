import PortugueseLayout from '../../components/PortugueseLayout'

export default function CategoriaProtecao() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Banner da página */}
        <div className="bg-[#8B5CF6] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading">Categoria: Proteção</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Estórias que ensinam sobre proteção, cuidado e segurança.
          </p>
        </div>

        {/* Lista de estórias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 3, title: "O Pequeno Semeador de Esperança", desc: "Uma estória sobre um menino que ajuda sua vila a encontrar esperança em tempos difíceis." },
            { id: 41, title: "Os Escudos Invisíveis", desc: "Uma estória sobre escudos invisíveis de amor que protegem as crianças dos medos e desafios da vida." }
          ].map((estoria) => (
            <div key={estoria.id} className="story-card">
              <div className="story-card-image" style={{ backgroundColor: '#8B5CF6' }}></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">{estoria.title}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  {estoria.desc}
                </p>
                <a
                  href={`/estorias/${estoria.id}`}
                  className="read-more text-[#8B5CF6] hover:text-[#7C3AED]"
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
            className="text-[#8B5CF6] hover:text-[#7C3AED] flex items-center"
          >
            ← Voltar para todas as categorias
          </a>
        </div>
      </div>
    </PortugueseLayout>
  )
}
