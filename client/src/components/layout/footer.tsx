import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import estrelinhaLogo from "@/assets/estrelinha-logo.png";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img 
                src={estrelinhaLogo} 
                alt={t('app.name')} 
                className="h-10 w-10 mr-2 hover-bounce"
              />
              <span className="text-2xl font-bold text-white font-heading">STELOOS</span>
            </Link>
            <p className="mb-4">{t('app.slogan')}</p>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@Steloos" className="text-white hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">{t('menu.home')}</Link></li>
              <li><Link href="/estorias" className="hover:text-primary">{t('menu.stories')}</Link></li>
              <li><Link href="/categorias" className="hover:text-primary">{t('menu.categories')}</Link></li>
              <li><Link href="/sobre" className="hover:text-primary">{t('menu.about')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">{t('home.categories.title')}</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                <li><Link href="/categorias?categoria=amor" className="hover:text-primary">{t('categories.amor')}</Link></li>
                <li><Link href="/categorias?categoria=paz" className="hover:text-primary">{t('categories.paz')}</Link></li>
                <li><Link href="/categorias?categoria=sabedoria" className="hover:text-primary">{t('categories.sabedoria')}</Link></li>
                <li><Link href="/categorias?categoria=bondade" className="hover:text-primary">{t('categories.bondade')}</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="/categorias?categoria=protecao" className="hover:text-primary">{t('categories.protecao')}</Link></li>
                <li><Link href="/categorias?categoria=natureza" className="hover:text-primary">{t('categories.natureza')}</Link></li>
                <li><Link href="/categorias?categoria=familia" className="hover:text-primary">{t('categories.familia')}</Link></li>
                <li><Link href="/categorias?categoria=amizade" className="hover:text-primary">{t('categories.amizade')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> 
                <a href="mailto:contact@steloos.cm" className="hover:text-primary">contact@steloos.cm</a>
              </li>
              <li className="mt-3">
                <Link href="/contato" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                  {t('menu.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {t('app.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
