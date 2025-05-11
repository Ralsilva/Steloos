import Link from 'next/link'
import PortugueseLayout from '../../components/PortugueseLayout'

export default function CategoriaAmor() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Banner da página */}
        <div className="bg-[#F59E0B] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading">Categoria: Amor</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Estórias que ensinam sobre amor, compaixão e carinho.
          </p>
        </div>

        {/* Lista de estórias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, title: "A Estrelinha que Iluminava o Caminho", desc: "Uma estória sobre uma pequena estrela que desce à Terra para ajudar uma menina com medo do escuro." },
            { id: 5, title: "O Abraço Mágico", desc: "Uma estória sobre o poder do abraço e como ele pode transmitir amor e conforto." },
            { id: 8, title: "O Presente Mais Valioso", desc: "Uma estória sobre um ursinho que descobre que os presentes mais valiosos vêm do coração." },
            { id: 10, title: "O Amor de Todas as Mães", desc: "Uma estória sobre como o amor maternal está presente em todas as espécies da natureza." },
            { id: 12, title: "O Coração da Floresta", desc: "Uma estória sobre uma árvore que compartilha seu amor com todos os animais da floresta." },
            { id: 15, title: "O Coração da Vovó", desc: "Uma estória sobre como o amor verdadeiro transcende distâncias físicas e cria conexões que não podem ser rompidas." },
            { id: 18, title: "A Menina e o Pássaro Ferido", desc: "Uma estória sobre compaixão e cuidado com os animais." },
            { id: 25, title: "O Presente Especial", desc: "Uma estória sobre como os presentes mais valiosos são aqueles dados com amor." },
            { id: 33, title: "A Carta de Amor", desc: "Uma estória sobre uma carta especial que transmite sentimentos profundos." },
            { id: 40, title: "Amor em Cores", desc: "Uma estória sobre como o amor tem o poder de transformar o mundo, trazendo cor e alegria para vidas que se tornaram cinzentas." }
          ].map((estoria) => (
            <div key={estoria.id} className="story-card">
              <div className="story-card-image" style={{ backgroundColor: '#F59E0B' }}></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2">{estoria.title}</h3>
                <p className="text-[#666666] text-sm mb-4">
                  {estoria.desc}
                </p>
                <Link
                  href={`/estorias/${estoria.id}`}
                  className="read-more text-[#F59E0B] hover:text-[#D97706]"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Voltar para categorias */}
        <div className="mt-8">
          <Link
            href="/categorias"
            className="text-[#F59E0B] hover:text-[#D97706] flex items-center"
          >
            ← Voltar para todas as categorias
          </Link>
        </div>
      </div>
    </PortugueseLayout>
  )
}
