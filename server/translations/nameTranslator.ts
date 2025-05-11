// Sistema de tradução cultural de nomes próprios

// Mapeamento de nomes por idioma
export const nameTranslations: Record<string, Record<string, string>> = {
  // Português para Inglês
  "pt-en": {
    // Nomes de pessoas
    "João": "John",
    "Maria": "Mary",
    "José": "Joseph",
    "Pedro": "Peter",
    "Ana": "Anne",
    "Carlos": "Charles",
    "Antônio": "Anthony",
    "Francisco": "Francis",
    "Paulo": "Paul",
    "Luís": "Louis",
    "Luísa": "Louise",
    "Miguel": "Michael",
    "Rafael": "Raphael",
    "Gabriel": "Gabriel",
    "Beatriz": "Beatrice",
    "Sofia": "Sophie",
    "Mariana": "Marianne",
    "Catarina": "Catherine",
    "Isabela": "Isabella",
    "Manoel": "Emmanuel",
    "Joaquim": "Joachim",
    "Teresa": "Theresa",
    "Lúcia": "Lucy",
    "Roberto": "Robert",
    "Ricardo": "Richard",
    "Eduardo": "Edward",
    "Guilherme": "William",
    "Henrique": "Henry",
    "Mateus": "Matthew",
    "Lucas": "Luke",
    
    // Lugares
    "Rio de Janeiro": "Rio de Janeiro",
    "São Paulo": "São Paulo",
    "Brasília": "Brasilia",
    "Salvador": "Salvador",
    "Recife": "Recife",
    "Floresta Amazônica": "Amazon Rainforest",
    "Pantanal": "Pantanal Wetlands",
    "Nordeste": "Northeast",
    "Sul": "South",
    "Sudeste": "Southeast",
    "Centro-Oeste": "Midwest",
    "Norte": "North",
    
    // Elementos da natureza
    "Rio": "River",
    "Montanha": "Mountain",
    "Floresta": "Forest",
    "Oceano": "Ocean",
    "Céu": "Sky",
    "Sol": "Sun",
    "Lua": "Moon",
    "Estrela": "Star",
    "Mar": "Sea",
    "Lago": "Lake"
  },
  
  // Português para Espanhol
  "pt-es": {
    // Nomes de pessoas
    "João": "Juan",
    "Maria": "María",
    "José": "José",
    "Pedro": "Pedro",
    "Ana": "Ana",
    "Carlos": "Carlos",
    "Antônio": "Antonio",
    "Francisco": "Francisco",
    "Paulo": "Pablo",
    "Luís": "Luis",
    "Luísa": "Luisa",
    "Miguel": "Miguel",
    "Rafael": "Rafael",
    "Gabriel": "Gabriel",
    "Beatriz": "Beatriz",
    "Sofia": "Sofía",
    "Mariana": "Mariana",
    "Catarina": "Catalina",
    "Isabela": "Isabel",
    "Manoel": "Manuel",
    "Joaquim": "Joaquín",
    "Teresa": "Teresa",
    "Lúcia": "Lucía",
    "Roberto": "Roberto",
    "Ricardo": "Ricardo",
    "Eduardo": "Eduardo",
    "Guilherme": "Guillermo",
    "Henrique": "Enrique",
    "Mateus": "Mateo",
    "Lucas": "Lucas",
    
    // Lugares
    "Rio de Janeiro": "Río de Janeiro",
    "São Paulo": "São Paulo",
    "Brasília": "Brasilia",
    "Salvador": "Salvador",
    "Recife": "Recife",
    "Floresta Amazônica": "Selva Amazónica",
    "Pantanal": "Pantanal",
    "Nordeste": "Nordeste",
    "Sul": "Sur",
    "Sudeste": "Sudeste",
    "Centro-Oeste": "Centro-Oeste",
    "Norte": "Norte",
    
    // Elementos da natureza
    "Rio": "Río",
    "Montanha": "Montaña",
    "Floresta": "Bosque",
    "Oceano": "Océano",
    "Céu": "Cielo",
    "Sol": "Sol",
    "Lua": "Luna",
    "Estrela": "Estrella",
    "Mar": "Mar",
    "Lago": "Lago"
  }
};

// Função para traduzir nomes próprios
export function translateName(name: string, fromLang: string, toLang: string): string {
  const langPair = `${fromLang}-${toLang}`;
  
  if (!nameTranslations[langPair]) {
    return name; // Se não temos mapeamento para este par de idiomas
  }
  
  // Verificar se o nome completo está no dicionário
  if (nameTranslations[langPair][name]) {
    return nameTranslations[langPair][name];
  }
  
  // Se não encontrou o nome completo, tenta traduzir palavra por palavra
  const words = name.split(' ');
  const translatedWords = words.map(word => {
    return nameTranslations[langPair][word] || word;
  });
  
  return translatedWords.join(' ');
}

// Função para detectar e traduzir nomes próprios em um texto
export function translateProperNamesInText(text: string, fromLang: string, toLang: string): string {
  if (!text) return '';
  
  const langPair = `${fromLang}-${toLang}`;
  if (!nameTranslations[langPair]) {
    return text;
  }
  
  let translatedText = text;
  
  // Ordenar nomes por comprimento (do mais longo para o mais curto)
  // para evitar substituições parciais
  const sortedNames = Object.keys(nameTranslations[langPair])
    .sort((a, b) => b.length - a.length);
  
  for (const name of sortedNames) {
    // Usar expressão regular para encontrar o nome como palavra completa
    const regex = new RegExp(`\\b${name}\\b`, 'g');
    translatedText = translatedText.replace(regex, nameTranslations[langPair][name]);
  }
  
  return translatedText;
}