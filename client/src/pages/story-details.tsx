import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Sparkle } from "lucide-react";
import { getCategoryInfo, getFallbackImage } from "@/lib/data";
import StoryNarrator from "@/components/stories/story-narrator";
import InteractiveStory from "@/components/stories/interactive-story";
import { Story } from "@shared/schema";
import { useTranslation } from "react-i18next";

// Função para formatar a URL da imagem
function formatImageUrl(url: string | undefined, large = true): string {
  if (!url) return "https://via.placeholder.com/1200x800?text=Steloos";
  
  // Fallback padrão para imagens
  const fallbackUrl = large
    ? "https://via.placeholder.com/1200x800?text=Steloos" 
    : "https://via.placeholder.com/300x200?text=Steloos";
  
  try {
    // Verifica se a URL é válida
    new URL(url);
    
    // Para imagens do Unsplash
    if (url.includes("unsplash.com")) {
      // Remove qualquer parâmetro existente
      const baseUrl = url.split('?')[0];
      
      // Parâmetros para controlar tamanho e qualidade
      const size = large ? "w=1200&h=800" : "w=300&h=200";
      const quality = "&q=85&fit=crop&auto=format";
      
      return `${baseUrl}?${size}${quality}`;
    }
    
    return url;
  } catch (error) {
    console.error("URL de imagem inválida:", url);
    return fallbackUrl;
  }
}

export default function StoryDetails() {
  const { t, i18n } = useTranslation(['translation', 'stories']);
  // Verifica correspondência para ambas as rotas (português e inglês)
  const [matchPt, paramsPt] = useRoute<{ id: string }>("/estoria/:id");
  const [matchEn, paramsEn] = useRoute<{ id: string }>("/story/:id");
  
  // Usa os parâmetros da rota que corresponder
  const match = matchPt || matchEn;
  const params = paramsPt || paramsEn;
  const [translatedStory, setTranslatedStory] = useState<{
    title?: string;
    excerpt?: string;
    content?: string;
  }>({});
  
  const { data: story, isLoading } = useQuery<Story>({
    queryKey: [`/api/stories/${params?.id}`, i18n.language],
    queryFn: async () => {
      const language = i18n.language === 'en' ? 'en' : 'pt-BR';
      const response = await fetch(`/api/stories/${params?.id}?lang=${language}`);
      return response.json();
    }
  });
  
  const { data: relatedStories, isLoading: loadingRelated } = useQuery<Story[]>({
    queryKey: [`/api/stories/related/${params?.id}`, i18n.language],
    queryFn: async () => {
      const language = i18n.language === 'en' ? 'en' : 'pt-BR';
      const response = await fetch(`/api/stories/related/${params?.id}?lang=${language}`);
      return response.json();
    },
    enabled: !!story,
  });
  
  // Carregar traduções da estória
  useEffect(() => {
    if (story && params?.id) {
      try {
        const loadStoryTranslations = async () => {
          try {
            // Usar fetch para carregar as traduções como recomendado pelos avisos do Vite
            const response = await fetch(`/locales/${i18n.language}/stories.json`);
            if (!response.ok) {
              throw new Error(`Failed to load stories for ${i18n.language}: ${response.status}`);
            }
            
            const translations = await response.json();
            const storyTranslations = translations[params.id];
            
            if (storyTranslations) {
              setTranslatedStory(storyTranslations);
            } else {
              console.warn(`No translation found for story ${params.id} in ${i18n.language}`);
              setTranslatedStory({});
            }
          } catch (err) {
            console.warn(`Could not load story translations for ${i18n.language}:`, err);
            setTranslatedStory({});
          }
        };
        
        loadStoryTranslations();
      } catch (error) {
        console.error("Error loading translations:", error);
        setTranslatedStory({});
      }
    }
  }, [story, params?.id, i18n.language]);
  
  useEffect(() => {
    // Scroll to top when story changes
    window.scrollTo(0, 0);
  }, [params?.id]);
  
  if (!match) {
    return null;
  }
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <Button 
            asChild
            variant="ghost"
            className="mb-4"
          >
            <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.backToStories')}
            </Link>
          </Button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
          <Skeleton className="w-full h-80" />
          <div className="p-8">
            <div className="mb-4">
              <Skeleton className="h-8 w-32 mb-2" />
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-5 w-40" />
            </div>
            <div className="prose max-w-none">
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-4" />
              
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-5/6 mb-4" />
              
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!story) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h1 className="text-3xl font-bold font-heading mb-4 text-text">{t('stories.notFound.title')}</h1>
          <p className="mb-6 text-lg">{t('stories.notFound.text')}</p>
          <Button asChild>
            <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>{t('stories.viewAll')}</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const categoryInfo = getCategoryInfo(story.categoryId);
  // Usar imagem alternativa se a URL original estiver vazia ou for inválida
  const storyImageUrl = story.imageUrl ? formatImageUrl(story.imageUrl, true) : getFallbackImage(story.id, story.categoryId);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <Button 
          asChild
          variant="ghost"
          className="mb-4"
        >
          <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.backToStories')}
          </Link>
        </Button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <div className="w-full h-80 bg-gray-100 relative">
          <img 
            src={storyImageUrl}
            alt={story.title}
            className="w-full h-80 object-cover absolute inset-0"
            loading="lazy"
            onError={(e) => {
              console.log("Erro ao carregar imagem principal:", story.imageUrl);
              e.currentTarget.src = getFallbackImage(story.id, story.categoryId);
            }}
          />
        </div>
        <div className="p-8">
          <div className="mb-8">
            <span className={`inline-block px-3 py-1 text-sm font-medium ${categoryInfo.color} text-white rounded-full mb-2`}>
              {t(`categories.${story.categoryId}`)}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">
              {translatedStory.title || story.title}
            </h1>
            <p className="text-gray-600">{t('stories.recommendedAge', { age: story.ageRange })}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {(translatedStory.content || story.content).split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          {/* Modo Interativo */}
          <div className="my-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold font-heading mb-4 flex items-center">
              <Sparkles className="h-5 w-5 text-amber-500 mr-2" />
              <span>{t('stories.interactive.title')}</span>
              <Sparkle className="h-5 w-5 text-amber-500 ml-2" />
            </h3>
            <p className="mb-4 text-gray-600">
              {t('stories.interactive.description')}
            </p>
            <InteractiveStory
              content={translatedStory.content || story.content}
              title={translatedStory.title || story.title}
              categoryId={story.categoryId}
            />
          </div>
          
          {/* Narrador de Estórias */}
          <div className="my-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold font-heading mb-4 flex items-center">
              <span className="text-primary">✨</span>
              <span className="mx-2">{t('stories.childNarrator.title')}</span>
              <span className="text-primary">✨</span>
            </h3>
            <p className="mb-4 text-gray-600">
              {t('stories.childNarrator.description')}
            </p>
            <StoryNarrator storyTitle={translatedStory.title || story.title} />
          </div>
          
          <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
            <p className="text-gray-600 italic">
              "{t('stories.quote')}"
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.print()}
                className="rounded-full"
                title={t('common.print')}
              >
                <i className="fas fa-print"></i>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => {
                  navigator.share({
                    title: translatedStory.title || story.title,
                    text: translatedStory.excerpt || story.excerpt,
                    url: window.location.href
                  }).catch(() => {
                    // Fallback if Web Share API is not supported
                    navigator.clipboard.writeText(window.location.href);
                    alert(t('common.linkCopied'));
                  });
                }}
                className="rounded-full"
                title={t('common.share')}
              >
                <i className="fas fa-share-alt"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {!loadingRelated && relatedStories && relatedStories.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading mb-6">{t('stories.youMayAlsoLike')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((relatedStory) => (
              <Link 
                key={relatedStory.id}
                href={i18n.language === 'en' ? `/story/${relatedStory.id}` : `/estoria/${relatedStory.id}`}
                className="story-card bg-white rounded-xl shadow-soft overflow-hidden flex hover-bounce"
              >
                <div className="w-24 h-full bg-gray-100 relative">
                  <img 
                    src={relatedStory.imageUrl ? formatImageUrl(relatedStory.imageUrl, false) : getFallbackImage(relatedStory.id, relatedStory.categoryId)}
                    alt={relatedStory.title} 
                    className="w-24 h-full object-cover absolute inset-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = getFallbackImage(relatedStory.id, relatedStory.categoryId);
                    }}
                  />
                </div>
                <div className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs font-medium ${getCategoryInfo(relatedStory.categoryId).color} text-white rounded-full mb-2`}>
                    {relatedStory.categoryName}
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-1">{relatedStory.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedStory.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-[#FFE3C8] rounded-xl p-6 text-center">
        <h3 className="font-heading font-bold text-xl mb-4">{t('stories.didYouLike')}</h3>
        <p className="mb-6">{t('stories.exploreMore')}</p>
        <Button asChild>
          <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>
            {t('stories.viewMoreStories')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
