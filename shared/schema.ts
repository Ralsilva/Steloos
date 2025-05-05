import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema (keeping original for authentication if needed later)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Categories schema
export const categories = pgTable("categories", {
  id: text("id").primaryKey(), // slug-like ID (e.g., "amor", "paz")
  name: text("name").notNull(),
  description: text("description"),
  // Campos traduzidos para inglês
  nameEn: text("name_en"),
  descriptionEn: text("description_en"),
});

export const insertCategorySchema = createInsertSchema(categories);
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Stories schema
export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  // Campos traduzidos para inglês
  titleEn: text("title_en"),
  excerptEn: text("excerpt_en"),
  contentEn: text("content_en"),
  ageRangeEn: text("age_range_en"),
  // Outros campos
  imageUrl: text("image_url").notNull(),
  categoryId: text("category_id").notNull().references(() => categories.id),
  categoryName: text("category_name").notNull(),
  ageRange: text("age_range").notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertStorySchema = createInsertSchema(stories).omit({
  id: true,
  createdAt: true,
});

export type InsertStory = z.infer<typeof insertStorySchema>;
export type Story = typeof stories.$inferSelect;

// Testimonials schema
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  relation: text("relation").notNull(), // e.g., "Mãe da Mariana, 6 anos"
  content: text("content").notNull(),
  // Campos traduzidos para inglês
  nameEn: text("name_en"),
  relationEn: text("relation_en"),
  contentEn: text("content_en"),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Newsletter subscribers
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({
  id: true,
  createdAt: true,
});

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
