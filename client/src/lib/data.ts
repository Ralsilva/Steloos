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

// Imagens de fallback organizadas por categoria (desenhos e ilustrações)
export const fallbackImagesByCategory: Record<string, string[]> = {
  // Amor - corações, abraços, carinho, afeto (desenhos)
  amor: [
    "https://img.freepik.com/free-vector/cute-little-girl-hugging-teddy-bear-cartoon-vector-icon-illustration_138676-5696.jpg?w=600&h=400&fit=crop", // Menina abraçando urso
    "https://img.freepik.com/free-vector/cute-rabbit-with-duck-love-cartoon-vector-icon-illustration_138676-5328.jpg?w=600&h=400&fit=crop", // Coelhinho e pato
    "https://img.freepik.com/free-vector/hand-drawn-cute-animals-couples-collection_23-2149248269.jpg?w=600&h=400&fit=crop", // Casais animais fofos
    "https://img.freepik.com/free-vector/watercolor-valentine-s-day-animals-couple-collection_23-2148819257.jpg?w=600&h=400&fit=crop", // Casal de animais em aquarela
    "https://img.freepik.com/free-vector/hand-drawn-family-hugging-together_23-2148948792.jpg?w=600&h=400&fit=crop", // Família abraçada
    "https://img.freepik.com/free-vector/hand-drawn-family-illustration_23-2149145959.jpg?w=600&h=400&fit=crop", // Família feliz
    "https://img.freepik.com/free-vector/cute-koala-with-baby-cartoon-icon-illustration_138676-2839.jpg?w=600&h=400&fit=crop", // Coala mãe e filho
    "https://img.freepik.com/free-vector/cute-bunny-holding-heart-cartoon-vector-icon-illustration_138676-4822.jpg?w=600&h=400&fit=crop", // Coelho com coração
  ],
  
  // Paz - pomba, arco-íris, céu, natureza serena (desenhos)
  paz: [
    "https://img.freepik.com/free-vector/hand-drawn-peace-symbol-concept_23-2149514267.jpg?w=600&h=400&fit=crop", // Símbolo da paz desenhado
    "https://img.freepik.com/free-vector/flat-design-peace-day-background-with-dove_23-2149596934.jpg?w=600&h=400&fit=crop", // Pomba da paz
    "https://img.freepik.com/free-vector/cute-rabbit-sleeping-moon-cartoon-vector-icon-illustration_138676-5556.jpg?w=600&h=400&fit=crop", // Coelhinho dormindo
    "https://img.freepik.com/free-vector/scene-with-rainbow-sky_1308-77344.jpg?w=600&h=400&fit=crop", // Arco-íris no céu
    "https://img.freepik.com/free-vector/cute-peace-dove-flying-with-branch-cartoon-illustration_138676-2472.jpg?w=600&h=400&fit=crop", // Pomba voando com ramo
    "https://img.freepik.com/free-vector/relaxing-concept-illustration_114360-1092.jpg?w=600&h=400&fit=crop", // Relaxando
    "https://img.freepik.com/free-vector/hand-drawn-cozy-home-illustration_23-2149554309.jpg?w=600&h=400&fit=crop", // Lar aconchegante
    "https://img.freepik.com/free-vector/cute-penguin-sleeping-pillow-cartoon-vector-icon-illustration_138676-5350.jpg?w=600&h=400&fit=crop", // Pinguim dormindo
  ],
  
  // Sabedoria - livros, corujas, estudos, idosos (desenhos)
  sabedoria: [
    "https://img.freepik.com/free-vector/hand-drawn-wise-old-man-illustration_23-2150667124.jpg?w=600&h=400&fit=crop", // Sábio ancião
    "https://img.freepik.com/free-vector/cute-astronaut-reading-book-space-cartoon-vector-icon-illustration_138676-5801.jpg?w=600&h=400&fit=crop", // Astronauta lendo
    "https://img.freepik.com/free-vector/cute-cat-reading-book-cartoon-vector-icon-illustration_138676-3521.jpg?w=600&h=400&fit=crop", // Gato lendo
    "https://img.freepik.com/free-vector/cute-owl-with-book-cartoon-vector-icon-illustration_138676-4961.jpg?w=600&h=400&fit=crop", // Coruja com livro
    "https://img.freepik.com/free-vector/book-club-abstract-concept-illustration_335657-3898.jpg?w=600&h=400&fit=crop", // Clube do livro
    "https://img.freepik.com/free-vector/tiny-women-near-huge-books-people-studying-library-flat-vector-illustration-cartoon-female-characters-reading-literature_74855-8588.jpg?w=600&h=400&fit=crop", // Pessoas estudando
    "https://img.freepik.com/free-vector/cute-wizard-holding-staff-cartoon-vector-icon-illustration_138676-4652.jpg?w=600&h=400&fit=crop", // Pequeno mago
    "https://img.freepik.com/free-vector/cute-panda-with-book-cartoon-vector-icon-illustration_138676-2702.jpg?w=600&h=400&fit=crop", // Panda com livro
  ],
  
  // Bondade - ajudar, compartilhar, presentes, sorrisos (desenhos)
  bondade: [
    "https://img.freepik.com/free-vector/cute-panda-giving-gift-box-cartoon-illustration_138676-2773.jpg?w=600&h=400&fit=crop", // Panda dando presente
    "https://img.freepik.com/free-vector/illustration-children-donating-food-toys_53876-26964.jpg?w=600&h=400&fit=crop", // Crianças doando
    "https://img.freepik.com/free-vector/cute-rabbit-with-gift-box-cartoon-vector-icon-illustration_138676-5555.jpg?w=600&h=400&fit=crop", // Coelho com presente
    "https://img.freepik.com/free-vector/cute-girl-giving-gift-box-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3992.jpg?w=600&h=400&fit=crop", // Menina dando presente
    "https://img.freepik.com/free-vector/children-friends-playing-together-girls-boys-sharing-toys-having-fun-flat-vector-illustration-friendship-childhood-concept_74855-13270.jpg?w=600&h=400&fit=crop", // Crianças compartilhando
    "https://img.freepik.com/free-vector/volunteer-people-taking-care-elderly-illustration_23-2148573045.jpg?w=600&h=400&fit=crop", // Ajudando idoso
    "https://img.freepik.com/free-vector/cute-bear-giving-love-cartoon-vector-icon-illustration_138676-4749.jpg?w=600&h=400&fit=crop", // Urso dando amor
    "https://img.freepik.com/free-vector/cute-rabbit-holding-carrot-cartoon-vector-icon-illustration_138676-2169.jpg?w=600&h=400&fit=crop", // Coelho compartilhando cenoura
  ],
  
  // Proteção - escudos, guarda-chuvas, abrigos, anjos (desenhos)
  protecao: [
    "https://img.freepik.com/free-vector/cute-cat-superhero-cartoon-vector-icon-illustration_138676-3972.jpg?w=600&h=400&fit=crop", // Gato super-herói
    "https://img.freepik.com/free-vector/cute-shepherd-dog-protect-sheep-cartoon-vector-icon-illustration_138676-5033.jpg?w=600&h=400&fit=crop", // Cão pastor
    "https://img.freepik.com/free-vector/cute-koala-with-umbrella-cartoon-vector-icon-illustration_138676-3389.jpg?w=600&h=400&fit=crop", // Coala com guarda-chuva
    "https://img.freepik.com/free-vector/cute-lion-with-umbrella-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3998.jpg?w=600&h=400&fit=crop", // Leão com guarda-chuva
    "https://img.freepik.com/free-vector/angel-cartoon-illustration_138676-2054.jpg?w=600&h=400&fit=crop", // Anjo
    "https://img.freepik.com/free-vector/girl-protected-by-big-hands-safe-childhood-concept_74855-11191.jpg?w=600&h=400&fit=crop", // Criança protegida
    "https://img.freepik.com/free-vector/cute-elephant-blanket-cartoon-vector-icon-illustration_138676-5246.jpg?w=600&h=400&fit=crop", // Elefante na coberta
    "https://img.freepik.com/free-vector/cute-bird-with-chicks-nest-branch-cartoon-vector-icon-illustration_138676-5712.jpg?w=600&h=400&fit=crop", // Pássaro com filhotes
  ],
  
  // Natureza - plantas, árvores, flores, animais, jardins (desenhos)
  natureza: [
    "https://img.freepik.com/free-vector/cute-rabbit-sitting-grass-cartoon-vector-icon-illustration_138676-3152.jpg?w=600&h=400&fit=crop", // Coelho na grama
    "https://img.freepik.com/free-vector/cute-butterfly-branch-cartoon-vector-icon-illustration_138676-3343.jpg?w=600&h=400&fit=crop", // Borboleta no galho
    "https://img.freepik.com/free-vector/cute-sloth-tree-branch-cartoon-icon-illustration_138676-2246.jpg?w=600&h=400&fit=crop", // Preguiça na árvore
    "https://img.freepik.com/free-vector/birds-sitting-deer-s-head-cartoon-illustration_183364-2593.jpg?w=600&h=400&fit=crop", // Pássaros e veado
    "https://img.freepik.com/free-vector/forest-scene-with-mountains-trees_1308-93066.jpg?w=600&h=400&fit=crop", // Cena da floresta
    "https://img.freepik.com/free-vector/cute-tiger-playing-nature-cartoon-vector-icon-illustration_138676-5244.jpg?w=600&h=400&fit=crop", // Tigre na natureza
    "https://img.freepik.com/free-vector/cute-panda-sitting-with-bamboo-cartoon-vector-icon-illustration_138676-2220.jpg?w=600&h=400&fit=crop", // Panda com bambu
    "https://img.freepik.com/free-vector/cute-rabbit-with-butterfly-cartoon-vector-icon-illustration_138676-5215.jpg?w=600&h=400&fit=crop", // Coelho com borboleta
  ],
  
  // Família - pessoas juntas, lares, refeições (desenhos)
  familia: [
    "https://img.freepik.com/free-vector/hand-drawn-family-theme-illustration_23-2149169545.jpg?w=600&h=400&fit=crop", // Família desenhada
    "https://img.freepik.com/free-vector/big-happy-family-portrait-old-young-relatives-gathered-together-home-scene-flat-vector-illustration_1284-61223.jpg?w=600&h=400&fit=crop", // Grande família
    "https://img.freepik.com/free-vector/happy-family-with-child-walking-holding-hands_74855-14335.jpg?w=600&h=400&fit=crop", // Família de mãos dadas
    "https://img.freepik.com/free-vector/hand-drawn-family-with-different-generations_23-2148955514.jpg?w=600&h=400&fit=crop", // Família multigeracional
    "https://img.freepik.com/free-vector/cute-family-cat-with-baby-cartoon-illustration_138676-2760.jpg?w=600&h=400&fit=crop", // Família de gatos
    "https://img.freepik.com/free-vector/happy-family-with-children-concept_23-2148380891.jpg?w=600&h=400&fit=crop", // Família feliz colorida
    "https://img.freepik.com/free-vector/happy-tiny-people-sitting-standing-near-huge-picture-frames-with-family-photos-flat-vector-illustration-cartoon-relatives-having-fun-together_74855-13238.jpg?w=600&h=400&fit=crop", // Fotos de família
    "https://img.freepik.com/free-vector/cute-family-lion-cartoon-illustration_138676-2248.jpg?w=600&h=400&fit=crop", // Família de leões
  ],
  
  // Amizade - crianças brincando, mãos dadas, compartilhando (desenhos)
  amizade: [
    "https://img.freepik.com/free-vector/cute-cat-dog-friend-cartoon_138676-2432.jpg?w=600&h=400&fit=crop", // Gato e cachorro amigos
    "https://img.freepik.com/free-vector/cute-mouse-rat-best-friend-cartoon-icon-illustration_138676-2677.jpg?w=600&h=400&fit=crop", // Ratinhos amigos
    "https://img.freepik.com/free-vector/cute-rabbit-with-duck-playing-together-cartoon-vector-icon-illustration_138676-3495.jpg?w=600&h=400&fit=crop", // Coelho e pato brincando
    "https://img.freepik.com/free-vector/cute-panda-rabbit-playing-together-cartoon-illustration_138676-2778.jpg?w=600&h=400&fit=crop", // Panda e coelho
    "https://img.freepik.com/free-vector/cute-monkey-squirrel-playing-together-cartoon-illustration_138676-2762.jpg?w=600&h=400&fit=crop", // Macaco e esquilo
    "https://img.freepik.com/free-vector/cute-bunny-bear-playing-together-cartoon-vector-icon-illustration_138676-3513.jpg?w=600&h=400&fit=crop", // Urso e coelho
    "https://img.freepik.com/free-vector/cute-children-playing-together-collection_23-2149380128.jpg?w=600&h=400&fit=crop", // Crianças brincando
    "https://img.freepik.com/free-vector/watercolor-children-s-day-background_23-2149330682.jpg?w=600&h=400&fit=crop", // Crianças em aquarela
  ],
};

// Imagens genéricas para qualquer categoria (desenhos coloridos infantis)
export const genericFallbackImages = [
  "https://img.freepik.com/free-vector/hand-drawn-children-s-day-background_23-2149328687.jpg?w=600&h=400&fit=crop", // Crianças coloridas
  "https://img.freepik.com/free-vector/hand-drawn-flat-design-children-s-day-illustration_23-2148946195.jpg?w=600&h=400&fit=crop", // Crianças brincando
  "https://img.freepik.com/free-vector/cute-children-playing-together-illustration_23-2148167376.jpg?w=600&h=400&fit=crop", // Crianças divertidas
  "https://img.freepik.com/free-vector/cute-animals-colorful-hand-drawn-style_23-2147821213.jpg?w=600&h=400&fit=crop", // Animais coloridos
  "https://img.freepik.com/free-vector/watercolor-background-with-hand-painted-elements_52683-66273.jpg?w=600&h=400&fit=crop", // Fundo aquarela
  "https://img.freepik.com/free-vector/cartoon-forest-background-nature-landscape-with-deciduous-trees-stumps-green-grass-bushes-two-squirrels_107791-2040.jpg?w=600&h=400&fit=crop", // Floresta de desenho
  "https://img.freepik.com/free-vector/drawn-children-s-pattern_23-2149176652.jpg?w=600&h=400&fit=crop", // Padrão infantil
  "https://img.freepik.com/free-vector/hand-drawn-colorful-star-pattern_23-2149140137.jpg?w=600&h=400&fit=crop", // Padrão de estrelas
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
