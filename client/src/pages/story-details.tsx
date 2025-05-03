import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryInfo } from "@/lib/data";

export default function StoryDetails() {
  const [match, params] = useRoute<{ id: string }>("/estoria/:id");
  
  const { data: story, isLoading } = useQuery({
    queryKey: [`/api/stories/${params?.id}`],
  });
  
  const { data: relatedStories, isLoading: loadingRelated } = useQuery({
    queryKey: [`/api/stories/related/${params?.id}`],
    enabled: !!story,
  });
  
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
            <Link href="/estorias">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para estórias
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
          <h1 className="text-3xl font-bold font-heading mb-4 text-text">Estória não encontrada</h1>
          <p className="mb-6 text-lg">Desculpe, não conseguimos encontrar esta estória.</p>
          <Button asChild>
            <Link href="/estorias">Ver todas as estórias</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const categoryInfo = getCategoryInfo(story.categoryId);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <Button 
          asChild
          variant="ghost"
          className="mb-4"
        >
          <Link href="/estorias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para estórias
          </Link>
        </Button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <img 
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <div className="mb-8">
            <span className={`inline-block px-3 py-1 text-sm font-medium ${categoryInfo.color} text-white rounded-full mb-2`}>
              {story.categoryName}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">{story.title}</h1>
            <p className="text-gray-600">Idade recomendada: {story.ageRange}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
            <p className="text-gray-600 italic">
              "Cada estória é uma semente de luz que plantamos no coração das crianças."
            </p>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.print()}
                className="rounded-full"
                title="Imprimir estória"
              >
                <i className="fas fa-print"></i>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => {
                  navigator.share({
                    title: story.title,
                    text: story.excerpt,
                    url: window.location.href
                  }).catch(() => {
                    // Fallback if Web Share API is not supported
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copiado para a área de transferência!');
                  });
                }}
                className="rounded-full"
                title="Compartilhar estória"
              >
                <i className="fas fa-share-alt"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {!loadingRelated && relatedStories && relatedStories.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading mb-6">Você também pode gostar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map(relatedStory => (
              <Link 
                key={relatedStory.id}
                href={`/estoria/${relatedStory.id}`}
                className="story-card bg-white rounded-xl shadow-soft overflow-hidden flex hover-bounce"
              >
                <img 
                  src={relatedStory.imageUrl} 
                  alt={relatedStory.title} 
                  className="w-24 h-full object-cover"
                />
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
        <h3 className="font-heading font-bold text-xl mb-4">Gostou desta estória?</h3>
        <p className="mb-6">Explore mais estórias encantadoras que ensinam valores importantes.</p>
        <Button asChild>
          <Link href="/estorias">
            Ver mais estórias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
