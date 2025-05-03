import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import childrenReading from "@/assets/children-reading-new.png";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="rounded-2xl bg-gradient-to-br from-secondary to-accent p-6 md:p-10 mb-10 text-white flex flex-col md:flex-row items-center shadow-floating">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 rainbow-animation">
          {t('app.name')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading mb-4">
          {t('home.hero.title')}
        </h2>
        <p className="text-lg md:text-xl mb-6 font-content">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/estorias">{t('home.hero.button')}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white hover:bg-opacity-90 text-accent px-6 py-3 rounded-xl font-bold text-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/sobre">{t('menu.about')}</Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 floating">
        <img 
          src={childrenReading} 
          alt={t('home.hero.title')} 
          className="rounded-2xl shadow-md max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
