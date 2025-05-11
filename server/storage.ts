import {
  categories,
  Category,
  InsertCategory,
  stories,
  Story,
  InsertStory,
  testimonials,
  Testimonial,
  InsertTestimonial,
  newsletterSubscribers,
  NewsletterSubscriber,
  InsertNewsletterSubscriber,
  users,
  type User,
  type InsertUser
} from "@shared/schema";

import { initialCategories, initialStories, initialTestimonials } from "./data/initialData";
import { importAdditionalStories } from "./data/importAdditionalStories";

// Interface for our storage methods
export interface IStorage {
  // User methods (keeping original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Category methods
  getCategories(): Promise<any[]>;
  getCategoryById(id: string): Promise<Category | undefined>;

  // Story methods
  getStories(): Promise<Story[]>;
  getStoriesByCategory(categoryId: string): Promise<Story[]>;
  getStoriesFeatured(): Promise<any[]>;
  getStoriesNewest(): Promise<any[]>;
  getStoryById(id: number): Promise<Story | undefined>;
  searchStories(query: string): Promise<Story[]>;
  getRelatedStories(storyId: number, limit?: number): Promise<Story[]>;

  // Testimonial methods
  getTestimonials(): Promise<any[]>;

  // Newsletter methods
  addNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

// Importando o cliente de banco de dados
import { db } from "./db";
import { eq, like, desc, sql, and, not } from "drizzle-orm";

// Mock storage para desenvolvimento local sem banco de dados
export class MockStorage implements IStorage {
  // Dados mock
  private mockCategories = [
    { id: "amor", name: "Amor", description: "Estórias sobre amor", nameEn: "Love", descriptionEn: "Stories about love" },
    { id: "paz", name: "Paz", description: "Estórias sobre paz", nameEn: "Peace", descriptionEn: "Stories about peace" }
  ];

  private mockStories = [
    {
      id: 1,
      title: "Estória de exemplo",
      excerpt: "Um exemplo de estória",
      content: "Conteúdo da estória...",
      titleEn: "Example story",
      excerptEn: "An example story",
      contentEn: "Story content...",
      imageUrl: "/images/placeholder.jpg",
      categoryId: "amor",
      categoryName: "Amor",
      ageRange: "3-6 anos",
      ageRangeEn: "3-6 years",
      featured: true,
      createdAt: new Date()
    }
  ];

  private mockTestimonials = [
    {
      id: 1,
      name: "Maria Silva",
      relation: "Mãe da Ana, 5 anos",
      content: "Minha filha adora as estórias!",
      nameEn: "Maria Silva",
      relationEn: "Ana's mother, 5 years old",
      contentEn: "My daughter loves the stories!"
    }
  ];

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    return { id: 1, username: user.username, password: user.password };
  }

  // Category methods
  async getCategories(): Promise<any[]> {
    return this.mockCategories;
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.mockCategories.find(c => c.id === id);
  }

  // Story methods
  async getStories(): Promise<Story[]> {
    return this.mockStories as any[];
  }

  async getStoriesByCategory(categoryId: string): Promise<Story[]> {
    return this.mockStories.filter(s => s.categoryId === categoryId) as any[];
  }

  async getStoriesFeatured(): Promise<any[]> {
    return this.mockStories.filter(s => s.featured);
  }

  async getStoriesNewest(): Promise<any[]> {
    return this.mockStories;
  }

  async getStoryById(id: number): Promise<Story | undefined> {
    return this.mockStories.find(s => s.id === id) as any;
  }

  async searchStories(query: string): Promise<Story[]> {
    return this.mockStories.filter(s =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.content.toLowerCase().includes(query.toLowerCase())
    ) as any[];
  }

  async getRelatedStories(storyId: number, limit: number = 3): Promise<Story[]> {
    const story = this.mockStories.find(s => s.id === storyId);
    if (!story) return [];

    return this.mockStories
      .filter(s => s.id !== storyId && s.categoryId === story.categoryId)
      .slice(0, limit) as any[];
  }

  // Testimonial methods
  async getTestimonials(): Promise<any[]> {
    return this.mockTestimonials;
  }

  // Newsletter methods
  async addNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    return {
      id: 1,
      email: subscriber.email,
      createdAt: new Date()
    };
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return [];
  }
}

// Classe de armazenamento que utiliza o banco de dados
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Category methods
  async getCategories(): Promise<any[]> {
    // Agora incluindo as colunas de tradução
    return await db.select({
      id: categories.id,
      name: categories.name,
      description: categories.description,
      nameEn: categories.nameEn,
      descriptionEn: categories.descriptionEn
    }).from(categories);
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category || undefined;
  }

  // Story methods
  async getStories(): Promise<Story[]> {
    return await db.select().from(stories);
  }

  async getStoriesByCategory(categoryId: string): Promise<Story[]> {
    return await db.select().from(stories).where(eq(stories.categoryId, categoryId));
  }

  async getStoriesFeatured(): Promise<any[]> {
    // Agora incluindo as colunas de tradução
    return await db.select({
      id: stories.id,
      title: stories.title,
      excerpt: stories.excerpt,
      content: stories.content,
      titleEn: stories.titleEn,
      excerptEn: stories.excerptEn,
      contentEn: stories.contentEn,
      imageUrl: stories.imageUrl,
      categoryId: stories.categoryId,
      categoryName: stories.categoryName,
      ageRange: stories.ageRange,
      ageRangeEn: stories.ageRangeEn,
      featured: stories.featured,
      createdAt: stories.createdAt
    })
    .from(stories)
    .where(eq(stories.featured, true))
    .limit(3);
  }

  async getStoriesNewest(): Promise<any[]> {
    // Agora incluindo as colunas de tradução
    return await db.select({
      id: stories.id,
      title: stories.title,
      excerpt: stories.excerpt,
      content: stories.content,
      titleEn: stories.titleEn,
      excerptEn: stories.excerptEn,
      contentEn: stories.contentEn,
      imageUrl: stories.imageUrl,
      categoryId: stories.categoryId,
      categoryName: stories.categoryName,
      ageRange: stories.ageRange,
      ageRangeEn: stories.ageRangeEn,
      featured: stories.featured,
      createdAt: stories.createdAt
    })
    .from(stories)
    .orderBy(desc(stories.createdAt))
    .limit(3);
  }

  async getStoryById(id: number): Promise<Story | undefined> {
    const [story] = await db.select().from(stories).where(eq(stories.id, id));
    return story || undefined;
  }

  async searchStories(query: string): Promise<Story[]> {
    const lowercaseQuery = `%${query.toLowerCase()}%`;
    return await db.select().from(stories).where(
      sql`LOWER(${stories.title}) LIKE ${lowercaseQuery} OR
          LOWER(${stories.excerpt}) LIKE ${lowercaseQuery} OR
          LOWER(${stories.content}) LIKE ${lowercaseQuery} OR
          LOWER(${stories.categoryName}) LIKE ${lowercaseQuery}`
    );
  }

  async getRelatedStories(storyId: number, limit: number = 3): Promise<Story[]> {
    const [story] = await db.select().from(stories).where(eq(stories.id, storyId));
    if (!story) return [];

    return await db.select().from(stories)
      .where(
        and(
          not(eq(stories.id, storyId)),
          eq(stories.categoryId, story.categoryId)
        )
      )
      .limit(limit);
  }

  // Testimonial methods
  async getTestimonials(): Promise<any[]> {
    // Agora incluindo as colunas de tradução
    return await db.select({
      id: testimonials.id,
      name: testimonials.name,
      relation: testimonials.relation,
      content: testimonials.content,
      nameEn: testimonials.nameEn,
      relationEn: testimonials.relationEn,
      contentEn: testimonials.contentEn
    }).from(testimonials);
  }

  // Newsletter methods
  async addNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    // Check if email already exists
    const [existingSubscriber] = await db.select().from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, insertSubscriber.email));

    if (existingSubscriber) {
      return existingSubscriber;
    }

    const [subscriber] = await db
      .insert(newsletterSubscribers)
      .values({
        ...insertSubscriber,
        createdAt: new Date()
      })
      .returning();

    return subscriber;
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return await db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.createdAt));
  }
}

// Função para adicionar colunas de tradução se não existirem
async function addTranslationColumns() {
  try {
    // Adicionar colunas para tabela de estórias
    await db.execute(sql`
      ALTER TABLE stories
      ADD COLUMN IF NOT EXISTS title_en TEXT,
      ADD COLUMN IF NOT EXISTS excerpt_en TEXT,
      ADD COLUMN IF NOT EXISTS content_en TEXT,
      ADD COLUMN IF NOT EXISTS age_range_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'stories'");

    // Adicionar colunas para tabela de categorias
    await db.execute(sql`
      ALTER TABLE categories
      ADD COLUMN IF NOT EXISTS name_en TEXT,
      ADD COLUMN IF NOT EXISTS description_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'categories'");

    // Adicionar colunas para tabela de testemunhos
    await db.execute(sql`
      ALTER TABLE testimonials
      ADD COLUMN IF NOT EXISTS name_en TEXT,
      ADD COLUMN IF NOT EXISTS relation_en TEXT,
      ADD COLUMN IF NOT EXISTS content_en TEXT
    `);
    console.log("Colunas adicionadas à tabela 'testimonials'");
  } catch (error) {
    console.error("Erro ao adicionar colunas de tradução:", error);
  }
}

// Initialize with data if table is empty
export async function initializeDatabase() {
  // Verificar se o banco de dados está desabilitado para desenvolvimento local
  if (process.env.NEXT_PUBLIC_DISABLE_DATABASE === 'true') {
    console.log('Database disabled for local development - skipping initialization');
    return;
  }

  try {
    // Adicionar colunas de tradução
    await addTranslationColumns();

    // Check if categories exist
    const existingCategories = await db.select().from(categories);
    if (existingCategories.length === 0) {
      // Insert categories
      await db.insert(categories).values(initialCategories);

      // Insert testimonials
      const insertTestimonials = initialTestimonials.map(testimonial => ({
        ...testimonial,
        createdAt: new Date()
      }));
      await db.insert(testimonials).values(insertTestimonials);

      // Insert stories
      const insertStories = initialStories.map(story => ({
        ...story,
        createdAt: new Date()
      }));
      await db.insert(stories).values(insertStories);

      console.log("Database initialized with seed data");

      // Import additional stories
      try {
        const storiesAdded = await importAdditionalStories();
        console.log(`Adicionadas ${storiesAdded} estórias complementares`);
      } catch (error) {
        console.error("Erro ao importar estórias adicionais:", error);
      }
    } else {
      // Verificar se as estórias adicionais já foram importadas
      const storiesCount = await db.select({ count: sql`count(*)` }).from(stories);
      const count = Number(storiesCount[0]?.count || 0);

      // Se temos apenas as estórias iniciais (normalmente 8), importamos as adicionais
      if (count <= initialStories.length) {
        try {
          const storiesAdded = await importAdditionalStories();
          console.log(`Adicionadas ${storiesAdded} estórias complementares`);
        } catch (error) {
          console.error("Erro ao importar estórias adicionais:", error);
        }
      }
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

// Escolher a implementação de armazenamento com base na configuração
export const storage = process.env.NEXT_PUBLIC_DISABLE_DATABASE === 'true'
  ? new MockStorage()
  : new DatabaseStorage();
