import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-text text-center">
        {t('contact.title')}
      </h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-soft p-8">
        <div className="text-center mb-8">
          <p className="text-lg mb-6">
            {t('contact.description')}
          </p>
          
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-lg px-6 py-4 font-medium">
            <Mail className="mr-3 h-5 w-5" />
            <a href="mailto:contact@steloos.cm" className="hover:underline">
              contact@steloos.cm
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="font-heading font-bold text-xl mb-4">{t('contact.responseTime')}</h3>
          <p className="text-gray-600">
            {t('contact.responseTimeDescription')}
          </p>
        </div>
      </div>
    </div>
  );
}