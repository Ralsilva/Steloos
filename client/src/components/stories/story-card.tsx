import { Link } from "wouter";
import { Story } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryInfo, getFallbackImage } from "@/lib/data";

interface StoryCardProps {
  story: Story;
  variant?: "large" | "small";
}

// Função para formatar a URL da imagem
function formatImageUrl(url: string, variant: "large" | "small"): string {
  if (!url) return "https://via.placeholder.com/600x400?text=Estrelinha";
  
  // Fallback padrão para imagens
  const fallbackUrl = variant === "large" 
    ? "https://via.placeholder.com/600x400?text=Estrelinha" 
    : "https://via.placeholder.com/300x200?text=Estrelinha";
  
  try {
    // Verifica se a URL é válida
    new URL(url);
    
    // Se a URL já contém parâmetros, não modificamos
    if (url.includes("?")) return url;
    
    // Para imagens do Unsplash
    if (url.includes("unsplash.com")) {
      // Remove qualquer parâmetro existente
      const baseUrl = url.split('?')[0];
      
      // Parâmetros para controlar tamanho e qualidade
      const size = variant === "large" ? "w=600&h=400" : "w=300&h=200";
      const quality = "&q=80&fit=crop&auto=format";
      
      return `${baseUrl}?${size}${quality}`;
    }
    
    return url;
  } catch (error) {
    console.error("URL de imagem inválida:", url);
    return fallbackUrl;
  }
}

export default function StoryCard({ story, variant = "large" }: StoryCardProps) {
  const categoryInfo = getCategoryInfo(story.categoryId);
  // Escolher uma imagem, ou usando a URL original formatada, ou uma imagem de fallback
  const imageUrl = story.imageUrl ? formatImageUrl(story.imageUrl, variant) : getFallbackImage(story.id, story.categoryId);
  
  if (variant === "small") {
    return (
      <Link 
        href={`/estoria/${story.id}`}
        className="story-card bg-white rounded-xl shadow-soft overflow-hidden flex hover-bounce"
      >
        <div className="w-24 h-full bg-gray-100">
          <img 
            src={imageUrl} 
            alt={story.title} 
            className="w-24 h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = getFallbackImage(story.id, story.categoryId);
            }}
          />
        </div>
        <div className="p-4">
          <span className={`inline-block px-2 py-1 text-xs font-medium ${categoryInfo.color} text-white rounded-full mb-2`}>
            {story.categoryName}
          </span>
          <h3 className="font-heading font-bold text-lg mb-1">{story.title}</h3>
          <p className="text-gray-600 text-sm">{story.excerpt}</p>
        </div>
      </Link>
    );
  }
  
  return (
    <div className="story-card bg-white rounded-xl shadow-soft overflow-hidden hover-bounce">
      <div className="w-full h-48 bg-gray-100 relative">
        <img 
          src={imageUrl} 
          alt={story.title} 
          className="w-full h-48 object-cover absolute inset-0"
          loading="lazy"
          onError={(e) => {
            console.log("Erro ao carregar imagem:", story.imageUrl);
            e.currentTarget.src = getFallbackImage(story.id, story.categoryId);
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className={`inline-block px-3 py-1 text-xs font-medium ${categoryInfo.color} text-white rounded-full`}>
            {story.categoryName}
          </span>
          <span className="text-sm text-gray-500">Idade: {story.ageRange}</span>
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <Button
          asChild
          variant="link"
          className="inline-block text-secondary font-bold hover:text-accent transition-colors p-0"
        >
          <Link href={`/estoria/${story.id}`}>
            Ler estória <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
