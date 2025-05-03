import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { peacefulIllustrationImages } from "@/lib/data";

export default function FeaturedIllustration() {
  return (
    <section className="bg-[#FFE3C8] rounded-2xl p-6 md:p-10 mb-10 shadow-soft">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-text">
            Estórias que Alimentam a Imaginação
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Em Esteloo, cada estória é uma aventura que ensina valores importantes de forma divertida e cativante.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                <Check className="text-white h-3 w-3" />
              </div>
              <span className="text-gray-700">Estórias que ensinam sobre amor e compaixão</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                <Check className="text-white h-3 w-3" />
              </div>
              <span className="text-gray-700">Ilustrações coloridas e encantadoras</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                <Check className="text-white h-3 w-3" />
              </div>
              <span className="text-gray-700">Conteúdo apropriado para diferentes idades</span>
            </li>
          </ul>
          <Button 
            asChild
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/historias">Explorar Estórias</Link>
          </Button>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 floating">
          <img 
            src={peacefulIllustrationImages[1]} 
            alt="Crianças lendo livros em um ambiente colorido" 
            className="rounded-2xl shadow-md mx-auto max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
