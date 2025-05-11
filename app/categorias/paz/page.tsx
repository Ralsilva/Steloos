import PortugueseLayout from '../../components/PortugueseLayout'

export default function CategoriaPaz() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Banner da página */}
        <div className="bg-[#3B82F6] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading">Categoria: Paz</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Estórias que ensinam sobre paz, tranquilidade e harmonia.
          </p>
        </div>

        {/* Lista de estórias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 2, title: "O Lago da Tranquilidade", desc: "Uma estória sobre um lago mágico onde os animais encontram paz e harmonia." },
            { id: 8, title: "A Árvore da Paz", desc: "Uma estória sobre uma árvore antiga que ajuda a resolver conflitos na floresta." },
            { id: 14, title: "O Jardim Silencioso", desc: "Uma estória sobre um jardim especial onde todos encontram calma interior." },
            { id: 21, title: "As Nuvens Pacificadoras", desc: "Uma estória sobre nuvens que trazem paz para uma vila em conflito." },
            { id: 27, title: "A Melodia da Paz", desc: "Uma estória sobre uma música especial que acalma corações agitados." },
            { id: 36, title: "O Pequeno Mediador", desc: "Uma estória sobre um menino que aprende a resolver conflitos entre amigos." }
          ].map((estoria) => (
            <div key={estoria.id} className="story-card">
              <div className="story-card-image" style={{ backgroundColor: '#3B82F6' }}></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">{estoria.title}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  {estoria.desc}
                </p>
                <a
                  href={`/estorias/${estoria.id}`}
                  className="read-more text-[#3B82F6] hover:text-[#2563EB]"
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
            className="text-[#3B82F6] hover:text-[#2563EB] flex items-center"
          >
            ← Voltar para todas as categorias
          </a>
        </div>
      </div>
    </PortugueseLayout>
  )
}
