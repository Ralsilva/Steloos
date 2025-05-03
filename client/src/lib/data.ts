import { Category, Story, Testimonial } from "@shared/schema";

// Stock photo URLs for children reading books
export const childrenReadingImages = [
  "https://images.unsplash.com/photo-1602083573998-f227e03de2d6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546521343-4eb2c9aa8454?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1549737221-bef65e2604a6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?auto=format&fit=crop&w=800&q=80"
];

// Stock photo URLs for colorful peaceful illustrations
export const peacefulIllustrationImages = [
  "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80"
];

// Stock photo URLs for nature and animals for kids
export const natureAndAnimalsImages = [
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=800&q=80"
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

// Imagens de fallback organizadas por categoria
export const fallbackImagesByCategory: Record<string, string[]> = {
  // Amor - tons quentes, corações, pessoas juntas
  amor: [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1518898053858-dcb290e8719b?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&q=80&fit=crop",
  ],
  
  // Paz - céus, nuvens, água calma
  paz: [
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1544084944-15258d5d4b18?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?w=600&h=400&q=80&fit=crop",
  ],
  
  // Sabedoria - livros, estrelas, lanternas
  sabedoria: [
    "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1529704693195-d9d7eec7c039?w=600&h=400&q=80&fit=crop",
  ],
  
  // Bondade - mãos dadas, presentes, dar
  bondade: [
    "https://images.unsplash.com/photo-1469571486292-b5d2ed591f04?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&q=80&fit=crop",
  ],
  
  // Proteção - abrigos, guarda-chuvas, abraços
  protecao: [
    "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1516714819001-8ee7a13215e8?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1509099340172-48f5bbe4ef97?w=600&h=400&q=80&fit=crop",
  ],
  
  // Natureza - plantas, árvores, florestas
  natureza: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=400&q=80&fit=crop",
  ],
  
  // Família - pessoas juntas, lares
  familia: [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1509506489701-dfe23b067808?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1601564267560-9956504b2c6c?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1603091763394-aaa22df2f45e?w=600&h=400&q=80&fit=crop",
  ],
  
  // Amizade - crianças brincando, mãos dadas
  amizade: [
    "https://images.unsplash.com/photo-1544161513-0179fe746fd5?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&q=80&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=400&q=80&fit=crop",
  ],
};

// Imagens genéricas para qualquer categoria
export const genericFallbackImages = [
  "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=600&h=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=600&h=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&h=400&q=80&fit=crop",
];

// Armazena imagens já usadas para evitar repetições
const usedFallbackImages = new Set<string>();
// Cache para imagens já selecionadas por ID
const fallbackImageCache: Record<string, string> = {};

// Retorna uma imagem alternativa para estórias com base no ID e categoria
export function getFallbackImage(storyId: number | string, categoryId?: string): string {
  const id = typeof storyId === 'string' ? parseInt(storyId, 10) : storyId;
  
  // Verificar se já temos uma imagem em cache para este ID
  const cacheKey = `story-${id}`;
  if (fallbackImageCache[cacheKey]) {
    return fallbackImageCache[cacheKey];
  }
  
  // Selecionar conjunto de imagens baseado na categoria
  let imageSet = genericFallbackImages;
  
  if (categoryId && fallbackImagesByCategory[categoryId]) {
    imageSet = fallbackImagesByCategory[categoryId];
  }
  
  // Usar uma função de hash simples para determinar o índice baseado no ID
  // Garantindo que a mesma estória sempre obtenha a mesma imagem
  const imageIndex = id % imageSet.length;
  
  // Adicionar um pequeno deslocamento baseado no ID para evitar repetições 
  // com estórias próximas em sequência
  const imageIndexWithOffset = (imageIndex + Math.floor(id / imageSet.length)) % imageSet.length;
  
  // Armazenar em cache a URL selecionada
  fallbackImageCache[cacheKey] = imageSet[imageIndexWithOffset];
  
  return fallbackImageCache[cacheKey];
}
