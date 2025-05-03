import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Carrega traduções utilizando o xhr backend
  .use(Backend)
  // Detecta o idioma do usuário
  .use(LanguageDetector)
  // passa o i18n para o react-i18next
  .use(initReactI18next)
  // inicializa i18next
  .init({
    fallbackLng: 'pt-BR', // idioma padrão se a detecção falhar
    supportedLngs: ['pt-BR', 'en'], // idiomas suportados
    debug: import.meta.env.DEV, // mostra logs de debug apenas em desenvolvimento
    
    interpolation: {
      escapeValue: false, // não é necessário para React
    },
    
    // Opções do detector de idioma
    detection: {
      // ordem de detecção
      order: ['navigator', 'htmlTag', 'path', 'localStorage', 'cookie'],
      // como armazenar o idioma selecionado
      caches: ['localStorage', 'cookie'],
      // configs para cookies
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
      cookieMinutes: 525600, // 1 ano em minutos
    },
    
    // Configurações do backend
    backend: {
      // caminho para carregar os arquivos de tradução
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    react: {
      useSuspense: true, // usar Suspense para carregar traduções
    },
  });

export default i18n;