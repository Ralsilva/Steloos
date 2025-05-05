import React, { useState, useEffect } from "react"; 
import { Link } from "wouter";
import { Story } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryInfo, getFallbackImage } from "@/lib/data";
import { useTranslation } from "react-i18next";

interface StoryCardProps {
  story: Story;
  variant?: "large" | "small";
}

// Função para formatar a URL da imagem
function formatImageUrl(url: string, variant: "large" | "small"): string {
  if (!url) return "https://via.placeholder.com/600x400?text=STELOOS";
  
  // Fallback padrão para imagens
  const fallbackUrl = variant === "large" 
    ? "https://via.placeholder.com/600x400?text=STELOOS" 
    : "https://via.placeholder.com/300x200?text=STELOOS";
  
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
  const { t, i18n } = useTranslation(['translation', 'stories']);
  const [translatedTitle, setTranslatedTitle] = useState<string>(story.title);
  const [translatedExcerpt, setTranslatedExcerpt] = useState<string>(story.excerpt);
  
  // Mapa de tradução para categorias
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
  
  // Determinar o caminho correto da estória com base no idioma
  const getStoryPath = (storyId: number) => {
    return i18n.language === 'pt-BR' 
      ? `/estoria/${storyId}` 
      : `/story/${storyId}`;
  };
  
  // Traduzir categoria para URL
  const getCategoryUrlParam = (categoryId: string) => {
    if (i18n.language === 'en' && categoryTranslations[categoryId]) {
      return categoryTranslations[categoryId];
    }
    return categoryId;
  };
  
  // Carregar traduções para o card da estória
  useEffect(() => {
    // Chaves para buscar traduções no arquivo de traduções
    const titleKey = `story_${story.id}_title`;
    const excerptKey = `story_${story.id}_excerpt`;
    
    // Obter traduções do arquivo stories.json usando i18next
    const translatedTitleValue = t(titleKey, { ns: 'stories', defaultValue: story.title });
    const translatedExcerptValue = t(excerptKey, { ns: 'stories', defaultValue: story.excerpt });
    
    setTranslatedTitle(translatedTitleValue);
    setTranslatedExcerpt(translatedExcerptValue);
  }, [story.id, i18n.language, t]);
  
  const categoryInfo = getCategoryInfo(story.categoryId);
  // Escolher uma imagem, ou usando a URL original formatada, ou uma imagem de fallback
  const imageUrl = story.imageUrl ? formatImageUrl(story.imageUrl, variant) : getFallbackImage(story.id, story.categoryId);
  
  if (variant === "small") {
    return (
      <Link 
        href={getStoryPath(story.id)}
        className="story-card bg-white rounded-xl shadow-soft overflow-hidden flex hover-bounce"
      >
        <div className="w-24 h-full bg-gray-100">
          <img 
            src={imageUrl} 
            alt={translatedTitle} 
            className="w-24 h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = getFallbackImage(story.id, story.categoryId);
            }}
          />
        </div>
        <div className="p-4">
          <span className={`inline-block px-2 py-1 text-xs font-medium ${categoryInfo.color} text-white rounded-full mb-2`}>
            {t(`categories.${story.categoryId}`)}
          </span>
          <h3 className="font-heading font-bold text-lg mb-1">{translatedTitle}</h3>
          <p className="text-gray-600 text-sm">{translatedExcerpt}</p>
        </div>
      </Link>
    );
  }
  
  return (
    <div className="story-card bg-white rounded-xl shadow-soft overflow-hidden hover-bounce">
      <div className="w-full h-48 bg-gray-100 relative">
        <img 
          src={imageUrl} 
          alt={translatedTitle} 
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
            {t(`categories.${story.categoryId}`)}
          </span>
          <span className="text-sm text-gray-500">{t('stories.ageRange')}: {story.ageRange}</span>
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{translatedTitle}</h3>
        <p className="text-gray-600 mb-4">{translatedExcerpt}</p>
        <Button
          asChild
          variant="link"
          className="inline-block text-secondary font-bold hover:text-accent transition-colors p-0"
        >
          <Link href={getStoryPath(story.id)}>
            {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
