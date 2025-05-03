import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import childrenReading from "@/assets/children-reading.png";

export default function Hero() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-secondary to-accent p-6 md:p-10 mb-10 text-white flex flex-col md:flex-row items-center shadow-floating">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 rainbow-animation">
          Estrelinha de Luz
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading mb-4">
          Histórias que Iluminam Corações
        </h2>
        <p className="text-lg md:text-xl mb-6 font-content">
          Aventuras cheias de amor, paz e sabedoria para crianças de todas as idades.
          Descubra um mundo mágico de aprendizado e diversão!
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/historias">Ler Histórias</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white hover:bg-opacity-90 text-accent px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/sobre">Conhecer Mais</Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 floating">
        <img 
          src={childrenReading} 
          alt="Crianças lendo livros juntas" 
          className="rounded-2xl shadow-md max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
