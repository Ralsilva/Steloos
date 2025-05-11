import PortugueseLayout from '../../components/PortugueseLayout'

export default function EstoriaPage() {
  return (
    <PortugueseLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navegação de volta */}
          <div className="mb-6">
            <a 
              href="/estorias" 
              className="text-[#6366F1] hover:text-[#4F46E5] flex items-center"
            >
              ← Voltar para estórias
            </a>
          </div>

          {/* Cabeçalho da estória */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">A Estrelinha que Iluminava o Caminho</h1>
            <div className="flex items-center text-sm text-[#666666] mb-4">
              <span className="mr-4">Categoria: 
                <a href="/categorias/amor" className="text-[#F59E0B] ml-1 hover:underline">
                  Amor
                </a>
              </span>
              <span>5 min de leitura</span>
            </div>
          </div>

          {/* Imagem da estória */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] h-64 w-full"></div>
          </div>

          {/* Conteúdo da estória */}
          <div className="prose max-w-none mb-8">
            <p>
              Era uma vez uma pequena estrela chamada Lumi. Ela vivia no céu junto com milhares de outras estrelas, mas sempre se sentiu um pouco diferente. Enquanto as outras estrelas brilhavam juntas em constelações, Lumi preferia brilhar sozinha, observando o mundo abaixo.
            </p>
            <p>
              Todas as noites, Lumi observava uma pequena vila onde vivia uma menina chamada Sofia. Sofia tinha medo do escuro e sempre olhava pela janela antes de dormir, procurando por Lumi no céu. A pequena estrela brilhava com toda sua força para que Sofia pudesse vê-la e se sentir segura.
            </p>
            <p>
              Um dia, uma grande tempestade cobriu o céu com nuvens escuras. Lumi sabia que Sofia estaria com medo, pois não conseguiria ver sua estrela amiga. Determinada a ajudar, Lumi decidiu fazer algo que nenhuma estrela jamais havia feito: descer até a Terra.
            </p>
            <p>
              Ela desceu como um pequeno raio de luz através das nuvens e pousou no peitoril da janela de Sofia. A menina ficou maravilhada ao ver sua amiga estrela tão perto! Lumi explicou que havia descido para garantir que Sofia não tivesse medo durante a tempestade.
            </p>
            <p>
              "Mas agora você não está mais no céu com as outras estrelas", disse Sofia preocupada.
            </p>
            <p>
              "Às vezes precisamos deixar nosso lugar de conforto para ajudar quem amamos", respondeu Lumi com um sorriso brilhante.
            </p>
            <p>
              Sofia aprendeu que o amor verdadeiro significa estar presente quando alguém precisa, mesmo que isso signifique sair da nossa zona de conforto. E Lumi descobriu que seu verdadeiro propósito era iluminar o caminho daqueles que amava.
            </p>
            <p>
              Depois que a tempestade passou, Lumi voltou para o céu, mas sempre que Sofia olhava para cima, a pequena estrela piscava de um jeito especial, como um código secreto entre amigas. E Sofia nunca mais teve medo do escuro, pois sabia que o amor verdadeiro sempre encontra um caminho para brilhar, mesmo nas noites mais escuras.
            </p>
          </div>

          {/* Moral da estória */}
          <div className="bg-[#FFF8F5] border-l-4 border-[#FF9D5C] p-4 mb-8">
            <h3 className="font-semibold text-[#333333] mb-2">Moral da Estória:</h3>
            <p className="text-[#666666]">
              O amor verdadeiro significa estar presente para aqueles que amamos, mesmo quando isso exige sacrifícios. Assim como Lumi deixou o céu para confortar Sofia, devemos estar dispostos a sair de nossa zona de conforto para ajudar os outros.
            </p>
          </div>

          {/* Compartilhar */}
          <div className="mb-8">
            <h3 className="font-semibold text-[#333333] mb-2">Compartilhar esta estória:</h3>
            <div className="flex space-x-4">
              <button className="bg-[#1877F2] text-white px-4 py-2 rounded-md">Facebook</button>
              <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md">Twitter</button>
              <button className="bg-[#25D366] text-white px-4 py-2 rounded-md">WhatsApp</button>
            </div>
          </div>

          {/* Mais estórias */}
          <div>
            <h3 className="font-semibold text-[#333333] mb-4 text-xl">Mais estórias que você pode gostar:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2, 3, 4].map((i) => (
                <div key={i} className="story-card">
                  <div className="story-card-image"></div>
                  <div className="story-card-content">
                    <h3 className="font-semibold mb-2">Título da Estória {i}</h3>
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
          </div>
        </div>
      </div>
    </PortugueseLayout>
  )
}
