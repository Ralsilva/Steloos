import { Category, Story, Testimonial } from "@shared/schema";

// Stock photo URLs for children reading books
export const childrenReadingImages = [
  "https://images.unsplash.com/photo-1602083573998-f227e03de2d6",
  "https://images.unsplash.com/photo-1546521343-4eb2c9aa8454",
  "https://images.unsplash.com/photo-1549737221-bef65e2604a6",
  "https://images.unsplash.com/photo-1551966775-a4ddc8df052b"
];

// Stock photo URLs for colorful peaceful illustrations
export const peacefulIllustrationImages = [
  "https://images.unsplash.com/photo-1518933165971-611dbc9c412d",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1579546929662-711aa81148cf",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
];

// Stock photo URLs for nature and animals for kids
export const natureAndAnimalsImages = [
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  "https://images.unsplash.com/photo-1548681528-6a5c45b66b42",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
  "https://images.unsplash.com/photo-1526336179256-1347bdb255ee"
];

// Category information with icons and colors
export const categoryInfo: Record<string, { icon: string; color: string }> = {
  amor: { icon: "heart", color: "bg-primary" },
  paz: { icon: "dove", color: "bg-secondary" },
  sabedoria: { icon: "lightbulb", color: "bg-accent" },
  bondade: { icon: "hand-holding-heart", color: "bg-green-500" },
  protecao: { icon: "shield", color: "bg-yellow-500" },
  natureza: { icon: "leaf", color: "bg-teal-500" },
  familia: { icon: "users", color: "bg-pink-500" },
  amizade: { icon: "user-friends", color: "bg-indigo-500" }
};

// Age ranges for stories
export const ageRanges = [
  "3-5 anos",
  "4-8 anos",
  "5-9 anos",
  "6-10 anos",
  "7-11 anos"
];

// Short excerpts for story previews
export const excerpts = [
  "Um pássaro e uma borboleta descobrem o verdadeiro significado da amizade apesar de suas diferenças.",
  "Uma menina descobre um jardim mágico onde as plantas crescem com pensamentos de paz e harmonia.",
  "Uma pequena estrela ajuda um menino a encontrar respostas para suas grandes perguntas sobre a vida.",
  "Um coelhinho aprende sobre o valor de compartilhar.",
  "Como os anjos nos protegem todos os dias.",
  "Uma história sobre respeitar e amar a natureza."
];

// Function to get category info by ID
export function getCategoryInfo(categoryId: string) {
  return categoryInfo[categoryId] || { icon: "star", color: "bg-primary" };
}

// Function to get random image from a collection
export function getRandomImage(collection: string[], seed?: number) {
  const index = seed ? Math.abs(seed) % collection.length : Math.floor(Math.random() * collection.length);
  return collection[index];
}
