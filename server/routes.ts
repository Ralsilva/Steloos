import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { cacheMiddleware } from "./cache";

// Função para traduzir títulos em português para inglês
function translateTitle(title: string): string {
  return title === "As Asas da Amizade" ? "The Wings of Friendship" : 
         title === "O Jardim da Paz" ? "The Garden of Peace" :
         title === "A Estrela Sábia" ? "The Wise Star" :
         title === "O Coelho Generoso" ? "The Generous Rabbit" :
         title === "Anjos da Guarda" ? "Guardian Angels" :
         title === "A Jornada da Alma" ? "The Journey of the Soul" :
         title === "O Milagre do Perdão" ? "The Miracle of Forgiveness" :
         title === "O Presente do Coração" ? "The Gift from the Heart" :
         title;
}

// Função para traduzir resumos, incluindo nomes comuns
function translateExcerpt(excerpt: string): string {
  // Traduz termos específicos
  let translatedExcerpt = excerpt
    .replace(/estória/g, "story")
    .replace(/estórias/g, "stories");
    
  // Traduz nomes próprios comuns
  translatedExcerpt = translatedExcerpt
    .replace(/\bMaria\b/g, "Mary")
    .replace(/\bJoão\b/g, "John")
    .replace(/\bJosé\b/g, "Joseph")
    .replace(/\bPedro\b/g, "Peter")
    .replace(/\bLuísa\b/g, "Louise")
    .replace(/\bAntônio\b/g, "Anthony")
    .replace(/\bSofia\b/g, "Sophie")
    .replace(/\bCarlos\b/g, "Charles")
    .replace(/\bPaulo\b/g, "Paul")
    .replace(/\bAna\b/g, "Anne")
    .replace(/\bBeatriz\b/g, "Beatrice")
    .replace(/\bRoberto\b/g, "Robert")
    .replace(/\bLucas\b/g, "Luke")
    .replace(/\bMateus\b/g, "Matthew")
    .replace(/\bMariana\b/g, "Marianne");
    
  return translatedExcerpt;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Cache middleware for GET requests
  app.use('/api', cacheMiddleware(300)); // Cache API responses for 5 minutes
  
  // API routes
  
  // Category routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const category = await storage.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Error fetching category" });
    }
  });

  // Story routes
  app.get("/api/stories", async (req, res) => {
    try {
      const categoryId = req.query.categoryId as string;
      let stories;
      
      if (categoryId) {
        stories = await storage.getStoriesByCategory(categoryId);
      } else {
        stories = await storage.getStories();
      }
      
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching stories" });
    }
  });

  app.get("/api/stories/featured", async (req, res) => {
    try {
      const stories = await storage.getStoriesFeatured();
      
      // Adiciona logs para depuração
      console.log('GET /api/stories/featured - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined:', lang);
      
      // Se o idioma for inglês, traduz os títulos e resumos das estórias
      if (lang === 'en') {
        const translatedStories = stories.map(story => {
          // Usa as traduções do arquivo de localização para traduzir os títulos e resumos
          const englishTitle = story.title === "As Asas da Amizade" ? "The Wings of Friendship" : 
                               story.title === "O Jardim da Paz" ? "The Garden of Peace" :
                               story.title === "A Estrela Sábia" ? "The Wise Star" :
                               story.title === "O Coelho Generoso" ? "The Generous Rabbit" :
                               story.title === "Anjos da Guarda" ? "Guardian Angels" :
                               story.title === "A Jornada da Alma" ? "The Journey of the Soul" :
                               story.title === "O Milagre do Perdão" ? "The Miracle of Forgiveness" :
                               story.title === "O Presente do Coração" ? "The Gift from the Heart" :
                               story.title;
                               
          const englishExcerpt = story.excerpt.replace(/estória/g, "story").replace(/estórias/g, "stories");
          
          return {
            ...story,
            title: englishTitle,
            excerpt: englishExcerpt
          };
        });
        
        console.log('Sending translated stories');
        return res.json(translatedStories);
      }
      
      console.log('Sending original stories');
      res.json(stories);
    } catch (error) {
      console.error('Error in /api/stories/featured:', error);
      res.status(500).json({ message: "Error fetching featured stories" });
    }
  });

  app.get("/api/stories/newest", async (req, res) => {
    try {
      const stories = await storage.getStoriesNewest();
      
      // Adiciona logs para depuração
      console.log('GET /api/stories/newest - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined:', lang);
      
      // Se o idioma for inglês, traduz os títulos e resumos das estórias
      if (lang === 'en') {
        const translatedStories = stories.map(story => {
          // Usa as traduções do arquivo de localização para traduzir os títulos e resumos
          const englishTitle = story.title === "As Asas da Amizade" ? "The Wings of Friendship" : 
                               story.title === "O Jardim da Paz" ? "The Garden of Peace" :
                               story.title === "A Estrela Sábia" ? "The Wise Star" :
                               story.title === "O Coelho Generoso" ? "The Generous Rabbit" :
                               story.title === "Anjos da Guarda" ? "Guardian Angels" :
                               story.title === "A Jornada da Alma" ? "The Journey of the Soul" :
                               story.title === "O Milagre do Perdão" ? "The Miracle of Forgiveness" :
                               story.title === "O Presente do Coração" ? "The Gift from the Heart" :
                               story.title;
                               
          const englishExcerpt = story.excerpt.replace(/estória/g, "story").replace(/estórias/g, "stories");
          
          return {
            ...story,
            title: englishTitle,
            excerpt: englishExcerpt
          };
        });
        
        console.log('Sending translated newest stories');
        return res.json(translatedStories);
      }
      
      console.log('Sending original newest stories');
      res.json(stories);
    } catch (error) {
      console.error('Error in /api/stories/newest:', error);
      res.status(500).json({ message: "Error fetching newest stories" });
    }
  });

  app.get("/api/stories/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.json([]);
      }
      
      const stories = await storage.searchStories(query);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error searching stories" });
    }
  });

  app.get("/api/stories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid story ID" });
      }
      
      const story = await storage.getStoryById(id);
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      
      res.json(story);
    } catch (error) {
      res.status(500).json({ message: "Error fetching story" });
    }
  });

  app.get("/api/stories/by-category/:categoryId", async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      if (!categoryId) {
        return res.status(400).json({ message: "Category ID is required" });
      }
      
      const stories = await storage.getStoriesByCategory(categoryId);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching stories by category" });
    }
  });

  app.get("/api/stories/related/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid story ID" });
      }
      
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const stories = await storage.getRelatedStories(id, limit);
      
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching related stories" });
    }
  });

  // Testimonial routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      
      // Adiciona logs para depuração
      console.log('GET /api/testimonials - Query params:', req.query);
      console.log('Headers accept-language:', req.headers['accept-language']);
      
      // Corrige qualquer referência a "Estrelinha de Luz" para "STELOOS"
      // e também "histórias" para "estórias"
      const correctedTestimonials = testimonials.map(t => {
        return {
          ...t,
          content: t.content
            .replace(/Estrelinha de Luz/g, "STELOOS")
            .replace(/histórias/g, "estórias")
        };
      });
      
      // Verifica se o idioma está definido no parâmetro de consulta
      // Convertemos para string para garantir que a comparação seja correta
      const langParam = String(req.query.lang || '');
      const lang = langParam.toLowerCase() === 'en' ? 'en' : 'pt-BR';
      console.log('Language determined for testimonials:', lang);
      
      // Se o idioma for inglês, adapta os nomes e traduções
      if (lang === 'en') {
        const translatedTestimonials = correctedTestimonials.map(t => {
          if (t.name === "Ana Paula") {
            return {
              ...t,
              name: "Anne Paula",
              relation: "Mother of Mariana, 6 years old",
              content: "My daughter loves the stories from STELOOS! They teach important values in a way she understands and enjoys."
            };
          } else if (t.name === "Roberto") {
            return {
              ...t,
              name: "Robert",
              relation: "Father of Peter, 5 years old",
              content: "The stories are perfect for bedtime. My son always asks for one more! I love how they convey positive messages."
            };
          } else if (t.name === "Juliana") {
            return {
              ...t,
              name: "Julie",
              relation: "Teacher and mother",
              content: "As an educator, I recommend STELOOS to all families. The stories are educational and the illustrations are beautiful!"
            };
          } else {
            // Para outros testemunhos que possam ser adicionados no futuro
            return t;
          }
        });
        
        console.log('Sending translated testimonials');
        return res.json(translatedTestimonials);
      }
      
      console.log('Sending original testimonials');
      // Retorna a versão em português por padrão (já corrigida)
      res.json(correctedTestimonials);
    } catch (error) {
      console.error('Error in /api/testimonials:', error);
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      const parseResult = insertNewsletterSubscriberSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          message: "Invalid email format",
          errors: parseResult.error.errors 
        });
      }
      
      const subscriber = await storage.addNewsletterSubscriber(parseResult.data);
      res.status(201).json({ message: "Subscription successful" });
    } catch (error) {
      res.status(500).json({ message: "Error processing subscription" });
    }
  });

  // Endpoint para listar assinantes da newsletter (para o painel administrativo)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching newsletter subscribers" });
    }
  });

  // Cache management endpoints - restricted to development environment
  if (process.env.NODE_ENV === 'development') {
    // Import dynamically since these are dev-only endpoints
    import('./cache.js').then(({ clearCache, getCacheStats }) => {
      app.get("/api/_admin/cache/stats", (req, res) => {
        res.json(getCacheStats());
      });
      
      app.post("/api/_admin/cache/clear", (req, res) => {
        clearCache();
        res.json({ message: "Cache cleared successfully" });
      });
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}
