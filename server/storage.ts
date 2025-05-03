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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<string, Category>;
  private stories: Map<number, Story>;
  private testimonials: Map<number, Testimonial>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  
  private userCurrentId: number;
  private storyCurrentId: number;
  private testimonialCurrentId: number;
  private newsletterSubscriberCurrentId: number;

  constructor() {
    // Initialize empty maps
    this.users = new Map();
    this.categories = new Map();
    this.stories = new Map();
    this.testimonials = new Map();
    this.newsletterSubscribers = new Map();
    
    // Initialize IDs
    this.userCurrentId = 1;
    this.storyCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.newsletterSubscriberCurrentId = 1;

    // Load initial data
    this.loadInitialData();
  }

  private loadInitialData() {
    // Load categories
    initialCategories.forEach(category => {
      this.categories.set(category.id, category);
    });

    // Load stories
    initialStories.forEach(story => {
      const storyWithId = { ...story, id: this.storyCurrentId++ };
      this.stories.set(storyWithId.id, storyWithId);
    });

    // Load testimonials
    initialTestimonials.forEach(testimonial => {
      const testimonialWithId = { ...testimonial, id: this.testimonialCurrentId++ };
      this.testimonials.set(testimonialWithId.id, testimonialWithId);
    });
  }

  // User methods (keeping original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  // Story methods
  async getStories(): Promise<Story[]> {
    return Array.from(this.stories.values());
  }

  async getStoriesByCategory(categoryId: string): Promise<Story[]> {
    return Array.from(this.stories.values()).filter(
      (story) => story.categoryId === categoryId
    );
  }

  async getStoriesFeatured(): Promise<Story[]> {
    return Array.from(this.stories.values())
      .filter(story => story.featured)
      .slice(0, 3);
  }

  async getStoriesNewest(): Promise<Story[]> {
    return Array.from(this.stories.values())
      .sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      })
      .slice(0, 3);
  }

  async getStoryById(id: number): Promise<Story | undefined> {
    return this.stories.get(id);
  }

  async searchStories(query: string): Promise<Story[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.stories.values()).filter(
      (story) => 
        story.title.toLowerCase().includes(lowercaseQuery) || 
        story.excerpt.toLowerCase().includes(lowercaseQuery) ||
        story.content.toLowerCase().includes(lowercaseQuery) ||
        story.categoryName.toLowerCase().includes(lowercaseQuery)
    );
  }

  async getRelatedStories(storyId: number, limit: number = 3): Promise<Story[]> {
    const story = this.stories.get(storyId);
    if (!story) return [];

    // Get stories from the same category, excluding the current story
    return Array.from(this.stories.values())
      .filter(s => s.id !== storyId && s.categoryId === story.categoryId)
      .slice(0, limit);
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  // Newsletter methods
  async addNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.newsletterSubscribers.values()).find(
      subscriber => subscriber.email === insertSubscriber.email
    );

    if (existingSubscriber) {
      return existingSubscriber;
    }

    const id = this.newsletterSubscriberCurrentId++;
    const subscriber: NewsletterSubscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: new Date() 
    };
    
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
