import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching featured stories" });
    }
  });

  app.get("/api/stories/newest", async (req, res) => {
    try {
      const stories = await storage.getStoriesNewest();
      res.json(stories);
    } catch (error) {
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
      res.json(testimonials);
    } catch (error) {
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

  const httpServer = createServer(app);
  return httpServer;
}
