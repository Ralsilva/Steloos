import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { categoryInfo } from "@/lib/data";
import { Category, Story } from "@shared/schema";
import StoryCard from "@/components/stories/story-card-new";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t, i18n } = useTranslation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  
  // Mapa inverso de tradução (inglês para português)
  const categoryTranslationsReverse: Record<string, string> = {
    'love': 'amor',
    'peace': 'paz',
    'wisdom': 'sabedoria',
    'kindness': 'bondade',
    'nature': 'natureza', 
    'protection': 'protecao',
    'family': 'familia',
    'friendship': 'amizade'
  };
  
  // Detectar categoria da URL e converter para ID interno (sempre em português)
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    
    // Se estamos na versão em inglês, esperamos o parâmetro 'category'
    // Se estamos na versão em português, esperamos o parâmetro 'categoria'
    const categoryParam = i18n.language === 'pt-BR' ? 'categoria' : 'category';
    
    // Tentamos obter o valor do parâmetro correto primeiro, depois tentamos o outro como fallback
    const categoryFromUrl = searchParams.get(categoryParam) || 
                        searchParams.get(i18n.language === 'pt-BR' ? 'category' : 'categoria');
    
    if (categoryFromUrl) {
      console.log(`Parâmetro detectado: ${categoryParam}=${categoryFromUrl}`);
      
      let internalCategoryId = categoryFromUrl;
      
      // Converter ID inglês para português se estamos em português e o valor é em inglês
      if (i18n.language === 'pt-BR' && Object.keys(categoryTranslationsReverse).includes(categoryFromUrl)) {
        internalCategoryId = categoryTranslationsReverse[categoryFromUrl];
        
        // Atualizar URL com o ID em português
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('categoria', internalCategoryId);
        window.history.pushState({}, '', newUrl.toString());
      } 
      // Converter ID português para inglês se estamos em inglês e o valor é em português
      else if (i18n.language === 'en' && Object.keys(categoryTranslations).includes(categoryFromUrl)) {
        // O ID interno ainda é em português
        internalCategoryId = categoryFromUrl;
        
        // Mas a URL deve ter o ID em inglês
        const englishId = categoryTranslations[categoryFromUrl];
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('category', englishId);
        window.history.pushState({}, '', newUrl.toString());
      }
        
      setSelectedCategoryId(internalCategoryId);
      console.log("Categoria detectada na URL:", categoryFromUrl);
      console.log("ID interno da categoria:", internalCategoryId);
    }
  }, [i18n.language, categoryTranslations, categoryTranslationsReverse]);
  
  // Carrega todas as categorias
  const { data: categories, isLoading: loadingCategories } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });
  
  // Busca estórias para a categoria selecionada
  const { data: storiesByCategory, isLoading: loadingStories, refetch } = useQuery<Story[]>({
    queryKey: [`/api/stories/by-category/${selectedCategoryId || 'none'}`],
    enabled: !!selectedCategoryId, // Só executa query se tiver categoria selecionada
  });
  
  // Refaz a consulta sempre que o ID da categoria muda
  useEffect(() => {
    if (selectedCategoryId) {
      refetch();
    }
  }, [selectedCategoryId, refetch]);
  
  // Para debug
  console.log("Categoria selecionada:", selectedCategoryId);
  console.log("Estórias carregadas:", storiesByCategory?.length || 0);
  
  // Mapa de tradução para IDs de categorias
  const categoryTranslations: Record<string, string> = {
    'amor': 'love',
    'paz': 'peace',
    'sabedoria': 'wisdom',
    'bondade': 'kindness',
    'natureza': 'nature',
    'protecao': 'protection',
    'familia': 'family',
    'amizade': 'friendship'
  };
  
  // Função para traduzir o ID da categoria com base no idioma
  const getCategoryIdForLanguage = (categoryId: string, lang: string): string => {
    if (lang === 'en' && Object.keys(categoryTranslations).includes(categoryId)) {
      return categoryTranslations[categoryId];
    }
    return categoryId;
  };
  
  // Função para selecionar uma categoria
  const handleCategorySelect = (categoryId: string) => {
    console.log("Clicou na categoria:", categoryId);
    setSelectedCategoryId(categoryId);
    
    // Atualizar a URL com o parâmetro de categoria no idioma correto
    const paramName = i18n.language === 'pt-BR' ? 'categoria' : 'category';
    
    // Quando estamos na versão em inglês, usamos o ID em inglês
    // Quando estamos na versão em português, usamos o ID em português
    const categoryIdForUrl = i18n.language === 'en' 
      ? getCategoryIdForLanguage(categoryId, 'en') // ID em inglês (ex: "love")
      : categoryId; // ID em português (ex: "amor")
    
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramName, categoryIdForUrl);
    window.history.pushState({}, '', newUrl.toString());
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-text">{t('categories.title')}</h1>
      
      {selectedCategoryId && categories?.find(c => c.id === selectedCategoryId) ? (
        <div className="mb-6">
          <button 
            onClick={() => {
              setSelectedCategoryId(null);
              // Remover parâmetros da URL
              const newUrl = new URL(window.location.href);
              newUrl.search = '';
              window.history.pushState({}, '', newUrl.toString());
            }}
            className="text-secondary hover:text-accent font-medium inline-flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> {t('categories.backToAll')}
          </button>
        </div>
      ) : null}
      
      {/* Grid de categorias */}
      {!selectedCategoryId && (
        <>
          {loadingCategories ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-soft animate-pulse h-40"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories?.map((category) => {
                const { icon, color } = categoryInfo[category.id] || { icon: "star", color: "bg-primary" };
                
                return (
                  <div 
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="category-card bg-white rounded-xl shadow-soft overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-md cursor-pointer"
                  >
                    <div className={`h-32 ${color} flex items-center justify-center`}>
                      <i className={`fas fa-${icon} text-white text-5xl`}></i>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-heading font-bold text-xl mb-1">{t(`categories.${category.id}`)}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
      
      {/* Exibição de estórias da categoria selecionada */}
      {selectedCategoryId && categories?.find(c => c.id === selectedCategoryId) && (
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-text">
            {t('categories.storiesOf', { category: t(`categories.${selectedCategoryId}`) })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="category-stories">
            {loadingStories ? (
              // Esqueletos durante o carregamento
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-7 w-full mb-2" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </div>
              ))
            ) : storiesByCategory && storiesByCategory.length > 0 ? (
              // Exibir estórias se houver
              storiesByCategory.map(story => (
                <StoryCard key={story.id} story={story} variant="large" />
              ))
            ) : (
              // Mensagem se não houver estórias
              <div className="col-span-3 bg-white rounded-xl p-8 text-center shadow-soft">
                <p className="text-gray-600">{t('categories.empty')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
