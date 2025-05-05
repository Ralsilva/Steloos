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
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | undefined>;

  // Story methods
  getStories(): Promise<Story[]>;
  getStoriesByCategory(categoryId: string): Promise<Story[]>;
  getStoriesFeatured(): Promise<Story[]>;
  getStoriesNewest(): Promise<Story[]>;
  getStoryById(id: number): Promise<Story | undefined>;
  searchStories(query: string): Promise<Story[]>;
  getRelatedStories(storyId: number, limit?: number): Promise<Story[]>;

  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;

  // Newsletter methods
  addNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

// Importando o cliente de banco de dados
import { db } from "./db";
import { eq, like, desc, sql, and, not } from "drizzle-orm";

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
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
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

  async getStoriesFeatured(): Promise<Story[]> {
    return await db.select().from(stories)
      .where(eq(stories.featured, true))
      .limit(3);
  }

  async getStoriesNewest(): Promise<Story[]> {
    return await db.select().from(stories)
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
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
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

// Initialize with data if table is empty
export async function initializeDatabase() {
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
}

export const storage = new DatabaseStorage();
