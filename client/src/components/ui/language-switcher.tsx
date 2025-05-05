import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const languages = [
    { name: "Português", code: "pt-BR", flag: "🇧🇷" },
    { name: "English", code: "en", flag: "🇺🇸" },
  ];
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  // Mapa de tradução para IDs de categorias
  const categoryTranslations: Record<string, string> = {
    'amor': 'love',
    'paz': 'peace',
    'sabedoria': 'wisdom',
    'bondade': 'kindness',
    'natureza': 'nature',
    'protecao': 'protection',
    'familia': 'family',
    'amizade': 'friendship',
    // Tradução inversa
    'love': 'amor',
    'peace': 'paz',
    'wisdom': 'sabedoria',
    'kindness': 'bondade',
    'nature': 'natureza',
    'protection': 'protecao',
    'family': 'familia',
    'friendship': 'amizade'
  };
  
  // Função para traduzir o ID da categoria com base no idioma
  const translateCategoryId = (categoryId: string, toLanguage: string): string => {
    // Se estamos mudando para o inglês e temos uma categoria em português
    if (toLanguage === 'en' && Object.keys(categoryTranslations).includes(categoryId)) {
      return categoryTranslations[categoryId] || categoryId;
    }
    
    // Se estamos mudando para o português e temos uma categoria em inglês
    if (toLanguage === 'pt-BR' && Object.keys(categoryTranslations).includes(categoryId)) {
      return categoryTranslations[categoryId] || categoryId;
    }
    
    return categoryId;
  };
  
  const changeLanguage = (code: string) => {
    // Obter URL atual
    const currentUrl = new URL(window.location.href);
    const currentPath = window.location.pathname;
    
    // Verificar se estamos na página de categorias
    const isCategoriesPage = currentPath.includes('/categorias') || currentPath.includes('/categories');
    
    if (isCategoriesPage) {
      // Obter categoria atual (se existir)
      const categoriaParam = currentUrl.searchParams.get('categoria');
      const categoryParam = currentUrl.searchParams.get('category');
      const currentCategoryId = categoriaParam || categoryParam;
      
      if (currentCategoryId) {
        // Limpar parâmetros existentes
        currentUrl.searchParams.delete('categoria');
        currentUrl.searchParams.delete('category');
        
        // Adicionar parâmetro no idioma correto
        const newParamName = code === 'pt-BR' ? 'categoria' : 'category';
        const translatedCategoryId = translateCategoryId(currentCategoryId, code);
        currentUrl.searchParams.set(newParamName, translatedCategoryId);
      }
    }
    
    // Atualizar caminho baseado no idioma
    let newPath = currentPath;
    if (code === 'en') {
      newPath = currentPath
        .replace('/estorias', '/stories')
        .replace('/categorias', '/categories')
        .replace('/estoria/', '/story/')
        .replace('/sobre', '/about');
    } else {
      newPath = currentPath
        .replace('/stories', '/estorias')
        .replace('/categories', '/categorias')
        .replace('/story/', '/estoria/')
        .replace('/about', '/sobre');
    }
    
    // Mudar idioma e redirecionar
    i18n.changeLanguage(code);
    
    // Atualizar URL somente se o caminho mudou
    if (newPath !== currentPath) {
      const newUrl = new URL(currentUrl.toString());
      newUrl.pathname = newPath;
      window.history.pushState({}, '', newUrl.toString());
    } else {
      // Caso apenas os parâmetros tenham mudado
      window.history.pushState({}, '', currentUrl.toString());
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1.5 text-sm font-medium"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="inline md:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer ${language.code === i18n.language ? 'font-bold bg-muted' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}