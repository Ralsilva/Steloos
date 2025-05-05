import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { cacheMiddleware } from "./cache";

// Função para traduzir títulos em português para inglês
function translateTitle(title: string): string {
  // Traduções específicas para os títulos existentes
  const titleMap: Record<string, string> = {
    "As Asas da Amizade": "The Wings of Friendship",
    "O Jardim da Paz": "The Garden of Peace",
    "A Estrela Sábia": "The Wise Star",
    "O Coelho Generoso": "The Generous Rabbit",
    "Anjos da Guarda": "Guardian Angels",
    "A Jornada da Alma": "The Journey of the Soul",
    "O Milagre do Perdão": "The Miracle of Forgiveness",
    "O Presente do Coração": "The Gift from the Heart",
    "A Lagarta que Encontrou a Paz": "The Caterpillar that Found Peace",
    "O Menino e a Estrela": "The Boy and the Star",
    "Amigos Para Sempre": "Friends Forever",
    "Um Coração Cheio de Amor": "A Heart Full of Love",
    "A Flor da Gratidão": "The Flower of Gratitude",
    "O Jardim Secreto": "The Secret Garden",
    "O Passarinho que Não Sabia Voar": "The Little Bird That Couldn't Fly",
    "A Árvore Generosa": "The Giving Tree",
    "O Rio da Vida": "The River of Life",
    "A Pequena Fada da Natureza": "The Little Nature Fairy"
  };
  
  // Verificar se o título tem uma tradução específica
  if (titleMap[title]) {
    return titleMap[title];
  }
  
  // Se não tiver uma tradução específica, traduza palavra por palavra
  return translateContent(title);
}

// Função para traduzir resumos, incluindo nomes comuns e fazer adaptações específicas
function translateExcerpt(excerpt: string): string {
  // Mapeamento direto para resumos específicos
  const excerptMap: Record<string, string> = {
    "Uma menina descobre um jardim mágico onde as plantas crescem com pensamentos de paz e harmonia.": 
      "A girl discovers a magical garden where plants grow with thoughts of peace and harmony.",
      
    "Como uma lagarta aprendeu que a verdadeira paz vem de dentro.": 
      "How a caterpillar learned that true peace comes from within.",
      
    "Um conto sobre o poder de compartilhar e como a generosidade transforma vidas.": 
      "A tale about the power of sharing and how generosity transforms lives.",
      
    "Uma história sobre como os anjos da guarda protegem e guiam as crianças.": 
      "A story about how guardian angels protect and guide children.",
      
    "Uma bela explicação de como nossa alma aprende e cresce através de múltiplas experiências.": 
      "A beautiful explanation of how our soul learns and grows through multiple experiences.",
      
    "Uma bela estória sobre as asas mágicas que a verdadeira amizade pode proporcionar em nossa jornada de vida.":
      "A beautiful story about the magical wings that true friendship can provide in our life journey.",
      
    "Um pássaro e uma borboleta descobrem o verdadeiro significado da amizade apesar de suas diferenças.":
      "A bird and a butterfly discover the true meaning of friendship despite their differences.",
      
    "Uma pequena estrela ajuda um menino a encontrar respostas para suas grandes perguntas sobre a vida.":
      "A small star helps a boy find answers to his big questions about life.",
      
    "Um coelhinho aprende sobre o valor de compartilhar.":
      "A little rabbit learns about the value of sharing.",
      
    "Como os anjos nos protegem todos os dias.":
      "How angels protect us every day.",
      
    "O poder transformador de perdoar os outros e a nós mesmos.":
      "The transformative power of forgiving others and ourselves.",
      
    "Uma mensagem do coração pode ser o presente mais valioso.":
      "A message from the heart can be the most valuable gift."
  };
  
  // Verifica se o resumo está no mapeamento
  if (excerptMap[excerpt]) {
    return excerptMap[excerpt];
  }
  
  // Se não estiver no mapeamento, usa a tradução de conteúdo padrão
  return translateContent(excerpt);
}

// Função para traduzir conteúdo completo das estórias
function translateContent(text: string): string {
  if (!text) return '';
  
  // Mapeamento direto para os parágrafos iniciais do Jardim da Paz (ID 2)
  if (text.startsWith('No centro de uma pequena cidade, havia um terreno abandonado')) {
    return `In the center of a small town, there was an abandoned plot of land that nobody visited. People hurried by, always too busy to notice that sad, empty space.

Sophie, a 7-year-old girl, had eyes that saw beyond what adults could see. One day, while walking to school with her mother, she felt a special energy coming from that place.

"Mommy, can I go see that empty lot?" Sophie asked.

Her mother, surprised by her daughter's interest in such an abandoned place, agreed with a bit of hesitation.

Upon entering the lot, Sophie felt a gentle breeze and heard a whisper: "Welcome to the Garden of Peace."

Sophie looked around, confused. There was no garden at all, just dry earth and some stones. "What garden?" she asked.

The voice, gentle like the breeze, answered: "The garden that exists in your thoughts and in your heart. The garden that can bloom with your feelings of peace."

Intrigued, Sophie sat on the ground and closed her eyes. She began to imagine a beautiful garden with colorful flowers, leafy trees, and a small lake with crystal clear waters. In her mind, she filled the garden with thoughts of peace, harmony, and love.

When she opened her eyes, Sophie was amazed. A small white flower had grown exactly where she was sitting.

"It's a miracle!" she exclaimed.

"It's not a miracle," said the voice. "It's the power of your peaceful thoughts. Every thought of love and harmony you have is like a seed that can bloom and transform the world around you."

From that day on, Sophie visited the lot every day after school. During each visit, she would sit, close her eyes, and fill her mind with thoughts of peace. And each day, more flowers would grow.

Other children from the neighborhood, curious about what Sophie was doing, began to join her. Sophie taught them about the Garden of Peace and how their positive thoughts could make flowers grow.

In a few months, the abandoned lot transformed into a beautiful garden, full of flowers, trees, and even a small lake, exactly as Sophie had imagined. The people of the town, who used to hurry past, now stopped to admire the garden and feel the peace that emanated from it.

The Garden of Peace became a special place in the town, where people of all ages went to find tranquility. And Sophie, with her childlike wisdom, taught everyone a valuable lesson: peace begins within us, in our thoughts and feelings, and has the power to transform not only our lives but also the world around us.`;
  }
  
  // Traduz termos específicos
  let translated = text
    .replace(/estória/g, "story")
    .replace(/estórias/g, "stories")
    .replace(/Estória/g, "Story")
    .replace(/Estórias/g, "Stories")
    .replace(/criança/g, "child")
    .replace(/crianças/g, "children")
    .replace(/Criança/g, "Child")
    .replace(/Crianças/g, "Children")
    .replace(/amigo/g, "friend")
    .replace(/amigos/g, "friends")
    .replace(/Amigo/g, "Friend")
    .replace(/Amigos/g, "Friends")
    .replace(/escola/g, "school")
    .replace(/Escola/g, "School")
    .replace(/professor/g, "teacher")
    .replace(/professora/g, "teacher")
    .replace(/professores/g, "teachers")
    .replace(/Professor/g, "Teacher")
    .replace(/Professora/g, "Teacher")
    .replace(/Professores/g, "Teachers")
    .replace(/jardim/g, "garden")
    .replace(/Jardim/g, "Garden")
    .replace(/floresta/g, "forest")
    .replace(/Floresta/g, "Forest")
    .replace(/estrela/g, "star")
    .replace(/estrelas/g, "stars")
    .replace(/Estrela/g, "Star")
    .replace(/Estrelas/g, "Stars")
    .replace(/menino/g, "boy")
    .replace(/menina/g, "girl")
    .replace(/meninos/g, "boys")
    .replace(/meninas/g, "girls")
    .replace(/Menino/g, "Boy")
    .replace(/Menina/g, "Girl")
    .replace(/Meninos/g, "Boys")
    .replace(/Meninas/g, "Girls")
    .replace(/céu/g, "sky")
    .replace(/Céu/g, "Sky")
    .replace(/coração/g, "heart")
    .replace(/Coração/g, "Heart")
    .replace(/amor/g, "love")
    .replace(/Amor/g, "Love")
    .replace(/paz/g, "peace")
    .replace(/Paz/g, "Peace")
    .replace(/sabedoria/g, "wisdom")
    .replace(/Sabedoria/g, "Wisdom")
    .replace(/natureza/g, "nature")
    .replace(/Natureza/g, "Nature")
    .replace(/família/g, "family")
    .replace(/Família/g, "Family")
    .replace(/amizade/g, "friendship")
    .replace(/Amizade/g, "Friendship")
    .replace(/lagarta/g, "caterpillar")
    .replace(/Lagarta/g, "Caterpillar")
    .replace(/borboleta/g, "butterfly")
    .replace(/Borboleta/g, "Butterfly")
    .replace(/mamãe/g, "mommy")
    .replace(/Mamãe/g, "Mommy")
    .replace(/papai/g, "daddy")
    .replace(/Papai/g, "Daddy")
    .replace(/joaninha/g, "ladybug")
    .replace(/Joaninha/g, "Ladybug")
    .replace(/pequeno/g, "small")
    .replace(/pequena/g, "small")
    .replace(/pequenos/g, "small")
    .replace(/pequenas/g, "small")
    .replace(/Pequeno/g, "Small")
    .replace(/Pequena/g, "Small")
    .replace(/Pequenos/g, "Small")
    .replace(/Pequenas/g, "Small")
    .replace(/árvore/g, "tree")
    .replace(/árvores/g, "trees")
    .replace(/Árvore/g, "Tree")
    .replace(/Árvores/g, "Trees")
    .replace(/flor/g, "flower")
    .replace(/flores/g, "flowers")
    .replace(/Flor/g, "Flower")
    .replace(/Flores/g, "Flowers")
    .replace(/água/g, "water")
    .replace(/Água/g, "Water")
    .replace(/pássaro/g, "bird")
    .replace(/pássaros/g, "birds")
    .replace(/Pássaro/g, "Bird")
    .replace(/Pássaros/g, "Birds")
    .replace(/animais/g, "animals")
    .replace(/Animais/g, "Animals")
    .replace(/caminho/g, "path")
    .replace(/Caminho/g, "Path")
    .replace(/mundo/g, "world")
    .replace(/Mundo/g, "World")
    .replace(/vida/g, "life")
    .replace(/Vida/g, "Life")
    .replace(/tempo/g, "time")
    .replace(/Tempo/g, "Time")
    .replace(/anos/g, "years")
    .replace(/ano/g, "year")
    .replace(/dia/g, "day")
    .replace(/dias/g, "days")
    .replace(/noite/g, "night")
    .replace(/noites/g, "nights")
    .replace(/Dia/g, "Day")
    .replace(/Dias/g, "Days")
    .replace(/Noite/g, "Night")
    .replace(/Noites/g, "Nights")
    .replace(/cidade/g, "city")
    .replace(/Cidade/g, "City")
    .replace(/onde/g, "where")
    .replace(/como/g, "how")
    .replace(/Como/g, "How")
    .replace(/que/g, "that")
    .replace(/muita/g, "a lot of")
    .replace(/muito/g, "a lot")
    .replace(/Muito/g, "A lot")
    .replace(/Muita/g, "A lot of")
    .replace(/através/g, "through")
    .replace(/dentro/g, "inside")
    .replace(/fora/g, "outside")
    .replace(/sobre/g, "about")
    .replace(/entre/g, "between")
    .replace(/junto/g, "together")
    .replace(/juntos/g, "together")
    .replace(/juntas/g, "together")
    .replace(/olhos/g, "eyes")
    .replace(/olho/g, "eye")
    .replace(/Olhos/g, "Eyes")
    .replace(/mão/g, "hand")
    .replace(/mãos/g, "hands")
    .replace(/Mão/g, "Hand")
    .replace(/Mãos/g, "Hands")
    .replace(/encontrar/g, "find")
    .replace(/encontrou/g, "found")
    .replace(/encontra/g, "finds")
    .replace(/Encontrar/g, "Find")
    .replace(/pensamento/g, "thought")
    .replace(/pensamentos/g, "thoughts")
    .replace(/Pensamento/g, "Thought")
    .replace(/Pensamentos/g, "Thoughts")
    .replace(/sentimento/g, "feeling")
    .replace(/sentimentos/g, "feelings")
    .replace(/Sentimento/g, "Feeling")
    .replace(/Sentimentos/g, "Feelings")
    .replace(/presente/g, "gift")
    .replace(/presentes/g, "gifts")
    .replace(/Presente/g, "Gift")
    .replace(/Presentes/g, "Gifts")
    .replace(/irmão/g, "brother")
    .replace(/irmã/g, "sister")
    .replace(/irmãos/g, "siblings")
    .replace(/Irmão/g, "Brother")
    .replace(/Irmã/g, "Sister")
    .replace(/Irmãos/g, "Siblings")
    .replace(/filho/g, "son")
    .replace(/filha/g, "daughter")
    .replace(/filhos/g, "children")
    .replace(/Filho/g, "Son")
    .replace(/Filha/g, "Daughter")
    .replace(/Filhos/g, "Children")
    .replace(/mãe/g, "mother")
    .replace(/pai/g, "father")
    .replace(/Mãe/g, "Mother")
    .replace(/Pai/g, "Father")
    .replace(/voz/g, "voice")
    .replace(/vozes/g, "voices")
    .replace(/Voz/g, "Voice")
    .replace(/Vozes/g, "Voices")
    .replace(/história/g, "history")
    .replace(/História/g, "History")
    .replace(/histórias/g, "histories")
    .replace(/Histórias/g, "Histories");
    
  // Traduz nomes próprios comuns
  translated = translated
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
    .replace(/\bMariana\b/g, "Marianne")
    .replace(/\bDeus\b/g, "God")
    .replace(/\bJesus\b/g, "Jesus");
    
  return translated;
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
          // Usa nossas funções de tradução
          return {
            ...story,
            title: translateTitle(story.title),
            excerpt: translateExcerpt(story.excerpt)
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
          // Usa nossas funções de tradução
          return {
            ...story,
            title: translateTitle(story.title),
            excerpt: translateExcerpt(story.excerpt)
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
      
      // Verifica se o idioma está definido no parâmetro de consulta
      const langParam = String(req.query.lang || '');
      const acceptLanguage = req.headers['accept-language'] || '';
      const lang = langParam.toLowerCase() === 'en' || acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
      
      if (lang === 'en') {
        // Traduz o conteúdo da estória para inglês
        const translatedStory = {
          ...story,
          title: translateTitle(story.title),
          excerpt: translateExcerpt(story.excerpt),
          content: translateContent(story.content),
          ageRange: story.ageRange.replace(/anos/g, "years old")
        };
        return res.json(translatedStory);
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
      
      // Verifica se o idioma está definido no parâmetro de consulta
      const langParam = String(req.query.lang || '');
      const acceptLanguage = req.headers['accept-language'] || '';
      const lang = langParam.toLowerCase() === 'en' || acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
      
      if (lang === 'en') {
        // Traduz as estórias relacionadas para inglês
        const translatedStories = stories.map(story => ({
          ...story,
          title: translateTitle(story.title),
          excerpt: translateExcerpt(story.excerpt),
          content: translateContent(story.content),
          ageRange: story.ageRange.replace(/anos/g, "years old"),
          categoryName: story.categoryName === 'Amor' ? 'Love' :
                       story.categoryName === 'Paz' ? 'Peace' :
                       story.categoryName === 'Sabedoria' ? 'Wisdom' :
                       story.categoryName === 'Natureza' ? 'Nature' :
                       story.categoryName === 'Família' ? 'Family' :
                       story.categoryName === 'Amizade' ? 'Friendship' :
                       story.categoryName === 'Proteção' ? 'Protection' :
                       story.categoryName
        }));
        return res.json(translatedStories);
      }
      
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
