import { Link } from "wouter";
import estrelinhaLogo from "@/assets/estrelinha-logo.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img 
                src={estrelinhaLogo} 
                alt="Estrelinha de Luz" 
                className="h-10 w-10 mr-2 hover-bounce"
              />
              <span className="text-2xl font-bold text-white font-heading">Estrelinha</span>
            </Link>
            <p className="mb-4">Histórias de luz para iluminar o coração das crianças.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-primary">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Início</Link></li>
              <li><Link href="/historias" className="hover:text-primary">Histórias</Link></li>
              <li><Link href="/categorias" className="hover:text-primary">Categorias</Link></li>
              <li><Link href="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Categorias</h3>
            <ul className="space-y-2">
              <li><Link href="/categorias?categoria=amor" className="hover:text-primary">Amor</Link></li>
              <li><Link href="/categorias?categoria=paz" className="hover:text-primary">Paz</Link></li>
              <li><Link href="/categorias?categoria=sabedoria" className="hover:text-primary">Sabedoria</Link></li>
              <li><Link href="/categorias?categoria=bondade" className="hover:text-primary">Bondade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i> contato@estrelinhadeluz.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i> (00) 1234-5678
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Estrelinha de Luz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
