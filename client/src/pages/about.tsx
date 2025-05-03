import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { childrenReadingImages, peacefulIllustrationImages } from "@/lib/data";
import childrenReadingImage from "@assets/children-sitting-together-reading-a-book.png";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <div className="bg-gradient-to-r from-secondary to-accent py-12 px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Sobre Estrelinha de Luz</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Um mundo de histórias para iluminar o coração das crianças
          </p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold mb-4">Nossa Missão</h2>
                <p>
                  Estrelinha de Luz nasceu com um propósito especial: criar um espaço onde as crianças possam 
                  explorar valores como amor, paz, sabedoria, bondade e compaixão através de histórias encantadoras.
                </p>
                <p>
                  Acreditamos que cada história é uma semente plantada no coração das crianças, que florescerá em 
                  forma de valores e princípios que as acompanharão por toda vida.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={childrenReadingImage} 
                  alt="Crianças lendo juntas" 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold mb-4">Nossas Histórias</h2>
                <p>
                  Cada história em nossa biblioteca é cuidadosamente criada para trazer mensagens positivas 
                  e ensinamentos valiosos de forma lúdica e acessível.
                </p>
                <p>
                  Abordamos temas como:
                </p>
                <ul>
                  <li>Amor ao próximo e respeito às diferenças</li>
                  <li>Paz interior e harmonia com o mundo</li>
                  <li>Sabedoria para fazer escolhas positivas</li>
                  <li>Bondade e generosidade em pequenas ações</li>
                  <li>Compaixão e empatia com todos os seres</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={peacefulIllustrationImages[2]} 
                  alt="Ilustração colorida e pacífica" 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
            
            <div className="bg-[#FFE3C8] p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Para Pais e Educadores</h2>
              <p>
                Estrelinha de Luz é um recurso valioso para pais e educadores que desejam transmitir valores 
                espirituais e morais de forma natural e atraente.
              </p>
              <p>
                Nossas histórias podem ser utilizadas como:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-book text-white text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold mb-2">Leitura de Cabeceira</h3>
                  <p className="text-sm">Para momentos especiais antes de dormir</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold mb-2">Material Didático</h3>
                  <p className="text-sm">Complementando atividades educacionais</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-comments text-white text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold mb-2">Diálogos Formativos</h3>
                  <p className="text-sm">Base para conversas sobre valores</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Junte-se a Nós</h2>
              <p className="max-w-3xl mx-auto mb-6">
                Convidamos você a explorar nossas histórias e compartilhar momentos especiais de aprendizado e conexão 
                com as crianças em sua vida.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link href="/historias">Explorar Histórias</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
                  <Link href="/#newsletter">Receber Novidades</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
