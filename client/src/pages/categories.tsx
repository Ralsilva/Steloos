import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { categoryInfo } from "@/lib/data";
import { Category, Story } from "@shared/schema";
import StoryCard from "@/components/stories/story-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t, i18n } = useTranslation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  
  // Detectar categoria da URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = searchParams.get('categoria') || searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategoryId(categoryFromUrl);
    }
  }, []);
  
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
  
  // Função para selecionar uma categoria
  const handleCategorySelect = (categoryId: string) => {
    console.log("Clicou na categoria:", categoryId);
    setSelectedCategoryId(categoryId);
    
    // Atualizar a URL com o parâmetro de categoria no idioma correto
    const paramName = i18n.language === 'pt-BR' ? 'categoria' : 'category';
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramName, categoryId);
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
