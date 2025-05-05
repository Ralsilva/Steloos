import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/ui/language-switcher";
import esteloLogo from "@/assets/esteloo-logo.png"; 
import childrenReading from "@/assets/children-reading-new.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();
  
  const navigation = useMemo(() => {
    // Definir URLs com base no idioma atual
    const isPortuguese = i18n.language === 'pt-BR';
    
    return [
      { name: t('menu.home'), href: "/" },
      { name: t('menu.stories'), href: isPortuguese ? "/estorias" : "/stories" },
      { name: t('menu.categories'), href: isPortuguese ? "/categorias" : "/categories" },
      { name: t('menu.about'), href: isPortuguese ? "/sobre" : "/about" },
      { name: t('menu.contact'), href: isPortuguese ? "/contato" : "/contact" },
    ];
  }, [t, i18n.language]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src={esteloLogo} 
              alt={t('app.name')} 
              className="h-12 w-12 mr-3 hover-bounce"
            />
            <span className="text-2xl md:text-3xl font-bold text-primary font-heading">{t('app.name')}</span>
          </Link>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menu"
              className="text-gray-500 hover:text-accent focus:text-accent"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-lg font-medium ${
                location === item.href 
                  ? "text-primary font-semibold" 
                  : "text-text hover:text-primary"
              } transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div className="px-4 py-3 bg-white shadow-inner md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 text-base font-medium text-center ${
                location === item.href 
                  ? "text-primary font-semibold" 
                  : "text-text hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
