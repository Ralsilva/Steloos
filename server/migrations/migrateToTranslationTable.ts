import { db } from "../db";
import { translations } from "@shared/schema";
import { stories, categories, testimonials } from "@shared/schema";
import { TranslationService } from "../translations/translationService";

export async function migrateToTranslationTable() {
  const translationService = new TranslationService();
  
  console.log("Iniciando migração para tabela de traduções...");
  
  // Migrar estórias
  const allStories = await db.select().from(stories);
  console.log(`Migrando ${allStories.length} estórias...`);
  
  for (const story of allStories) {
    try {
      // Usar traduções existentes quando disponíveis
      if (story.titleEn) {
        await translationService.saveTranslation("story", story.id, "title", "en", story.titleEn);
      } else {
        // Aplicar tradução cultural para o título
        const translatedTitle = translationService.translateWithCulturalAdaptation(story.title, "pt", "en");
        await translationService.saveTranslation("story", story.id, "title", "en", translatedTitle);
      }
      
      if (story.excerptEn) {
        await translationService.saveTranslation("story", story.id, "excerpt", "en", story.excerptEn);
      } else {
        const translatedExcerpt = translationService.translateWithCulturalAdaptation(story.excerpt, "pt", "en");
        await translationService.saveTranslation("story", story.id, "excerpt", "en", translatedExcerpt);
      }
      
      if (story.contentEn) {
        await translationService.saveTranslation("story", story.id, "content", "en", story.contentEn);
      } else {
        // Para conteúdo, podemos deixar uma mensagem de tradução pendente
        await translationService.saveTranslation("story", story.id, "content", "en", "Translation pending. Please check back later.");
      }
      
      if (story.ageRangeEn) {
        await translationService.saveTranslation("story", story.id, "ageRange", "en", story.ageRangeEn);
      } else {
        const translatedAgeRange = story.ageRange.replace(/anos/g, "years old").replace(/ano/g, "year old");
        await translationService.saveTranslation("story", story.id, "ageRange", "en", translatedAgeRange);
      }
      
      // Guardar originais em português
      await translationService.saveTranslation("story", story.id, "title", "pt", story.title);
      await translationService.saveTranslation("story", story.id, "excerpt", "pt", story.excerpt);
      await translationService.saveTranslation("story", story.id, "content", "pt", story.content);
      await translationService.saveTranslation("story", story.id, "ageRange", "pt", story.ageRange);
      
      console.log(`Migrada estória: ${story.id} - ${story.title}`);
    } catch (error) {
      console.error(`Erro ao migrar estória ${story.id}:`, error);
    }
  }
  
  // Migrar categorias
  const allCategories = await db.select().from(categories);
  console.log(`Migrando ${allCategories.length} categorias...`);
  
  for (const category of allCategories) {
    try {
      // Tradução de categorias
      const categoryTranslations = {
        "amor": "Love",
        "paz": "Peace",
        "sabedoria": "Wisdom",
        "bondade": "Kindness",
        "natureza": "Nature",
        "protecao": "Protection",
        "familia": "Family",
        "amizade": "Friendship",
        "compaixao": "Compassion",
        "gratidao": "Gratitude",
        "espiritualidade": "Spirituality"
      };
      
      const translatedName = categoryTranslations[category.name as keyof typeof categoryTranslations] || 
                            translationService.translateWithCulturalAdaptation(category.name, "pt", "en");
      
      await translationService.saveTranslation("category", category.id, "name", "en", translatedName);
      await translationService.saveTranslation("category", category.id, "name", "pt", category.name);
      
      console.log(`Migrada categoria: ${category.id} - ${category.name}`);
    } catch (error) {
      console.error(`Erro ao migrar categoria ${category.id}:`, error);
    }
  }
  
  // Migrar testemunhos
  const allTestimonials = await db.select().from(testimonials);
  console.log(`Migrando ${allTestimonials.length} testemunhos...`);
  
  for (const testimonial of allTestimonials) {
    try {
      // Aplicar tradução cultural para nomes e conteúdo
      const translatedName = translationService.translateWithCulturalAdaptation(testimonial.name, "pt", "en");
      const translatedRelation = testimonial.relation
        .replace(/mãe/g, "mother")
        .replace(/pai/g, "father")
        .replace(/avó/g, "grandmother")
        .replace(/avô/g, "grandfather")
        .replace(/tia/g, "aunt")
        .replace(/tio/g, "uncle")
        .replace(/de/g, "of")
        .replace(/anos/g, "years old");
      
      const translatedContent = translationService.translateWithCulturalAdaptation(testimonial.content, "pt", "en");
      
      await translationService.saveTranslation("testimonial", testimonial.id, "name", "en", translatedName);
      await translationService.saveTranslation("testimonial", testimonial.id, "relation", "en", translatedRelation);
      await translationService.saveTranslation("testimonial", testimonial.id, "content", "en", translatedContent);
      
      // Guardar originais em português
      await translationService.saveTranslation("testimonial", testimonial.id, "name", "pt", testimonial.name);
      await translationService.saveTranslation("testimonial", testimonial.id, "relation", "pt", testimonial.relation);
      await translationService.saveTranslation("testimonial", testimonial.id, "content", "pt", testimonial.content);
      
      console.log(`Migrado testemunho: ${testimonial.id} - ${testimonial.name}`);
    } catch (error) {
      console.error(`Erro ao migrar testemunho ${testimonial.id}:`, error);
    }
  }
  
  console.log("Migração para tabela de traduções concluída com sucesso!");
}

