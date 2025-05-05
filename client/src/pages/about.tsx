import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { childrenReadingImages, peacefulIllustrationImages } from "@/lib/data";
import childrenReadingImage from "@assets/children-sitting-together-reading-a-book.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <div className="bg-gradient-to-r from-secondary to-accent py-12 px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('app.slogan')}
          </p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold mb-4">{t('about.mission.title')}</h2>
                <p>
                  {t('about.mission.text')}
                </p>
                <p>
                  {t('stories.quote')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={childrenReadingImage} 
                  alt={t('categories.amor')} 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold mb-4">{t('about.values.title')}</h2>
                <p>
                  Cada estória no Steloos é cuidadosamente criada para trazer mensagens positivas 
                  e ensinamentos valiosos de forma lúdica e acessível.
                </p>
                <p>
                  Abordamos temas como:
                </p>
                <ul>
                  <li>{t('about.values.items.0.description')}</li>
                  <li>{t('about.values.items.2.description')}</li>
                  <li>{t('about.values.items.1.description')}</li>
                  <li>{t('categories.bondade')}</li>
                  <li>{t('categories.amizade')}</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={peacefulIllustrationImages[2]} 
                  alt={t('categories.paz')} 
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
            
            <div className="bg-[#FFE3C8] p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">{t('about.contact.title')}</h2>
              <p>
                {t('about.contact.text')}
              </p>
              <p>
                {t('app.name')}: {t('about.contact.email')}
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
              <h2 className="text-3xl font-heading font-bold mb-4">{t('home.categories.title')}</h2>
              <p className="max-w-3xl mx-auto mb-6">
                {t('categories.exploration')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link href="/estorias">{t('home.featured.viewAll')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
                  <Link href="/#newsletter">{t('home.newsletter.title')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
