import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Landing() {
  const { t, i18n } = useTranslation();
  const [featuredStories, setFeaturedStories] = useState([]);
  const [recentStories, setRecentStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Carregar estórias em destaque e recentes
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const language = i18n.language === 'en' ? 'en' : 'pt-BR';
        
        // Carregar estórias em destaque
        const featuredResponse = await fetch(`/api/stories/featured?lang=${language}`);
        const featuredData = await featuredResponse.json();
        setFeaturedStories(featuredData);
        
        // Carregar estórias recentes
        const recentResponse = await fetch(`/api/stories/newest?lang=${language}`);
        const recentData = await recentResponse.json();
        setRecentStories(recentData);
      } catch (error) {
        console.error("Erro ao carregar estórias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [i18n.language]);

  // Função para lidar com a pesquisa
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchPath = i18n.language === 'en' 
        ? `/stories?search=${encodeURIComponent(searchQuery)}` 
        : `/estorias?busca=${encodeURIComponent(searchQuery)}`;
      window.location.href = searchPath;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section - Mantendo o estilo do site atual */}
      <section className="bg-indigo-500 rounded-lg p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              STELOOS
            </h1>
            <p className="text-xl mb-4">
              {i18n.language === 'en' 
                ? "Stories of Light for Children" 
                : "Estórias de Luz para Crianças"}
            </p>
            <p className="mb-6">
              {i18n.language === 'en'
                ? "Children's stories about peace, love, wisdom and spiritual values"
                : "Estórias infantis sobre paz, amor, sabedoria e valores espirituais"}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white border-none">
                <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>
                  {i18n.language === 'en' ? "Explore Stories" : "Explorar Estórias"}
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-indigo-500 hover:bg-gray-100"
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pt-BR' : 'en')}
              >
                <Globe className="mr-2 h-4 w-4" /> 
                {i18n.language === 'en' ? 'Mudar para PT' : 'Switch to EN'}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/src/assets/children-reading.png" 
              alt="Children reading" 
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.src = "https://img.freepik.com/free-vector/cartoon-children-reading-books-together-colorful-illustration_74855-14528.jpg?w=800&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Barra de pesquisa */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder={i18n.language === 'en' ? "Search stories..." : "Buscar estórias..."}
            className="w-full pl-10 pr-4 py-2 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </form>
      </div>

      {/* Bilingual Feature - Nova seção */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-3 text-purple-800">
              {i18n.language === 'en' 
                ? "All 40 Stories in Two Languages!" 
                : "Todas as 40 Estórias em Dois Idiomas!"}
            </h2>
            <p className="mb-4 text-purple-900">
              {i18n.language === 'en'
                ? "Every story is available in both English and Portuguese. Switch languages anytime to enjoy the same story in different languages!"
                : "Cada estória está disponível em português e inglês. Mude de idioma a qualquer momento para aproveitar a mesma estória em diferentes línguas!"}
            </p>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pt-BR' : 'en')}
            >
              <Globe className="mr-2 h-4 w-4" /> 
              {i18n.language === 'en' ? 'Try in Portuguese' : 'Experimente em Inglês'}
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md transform rotate-[-5deg]">
                <p className="font-bold text-purple-800">Português</p>
                <p className="text-sm">A Estrelinha de Luz</p>
              </div>
              <ArrowRight className="h-8 w-8 text-purple-500" />
              <div className="bg-white p-4 rounded-lg shadow-md transform rotate-[5deg]">
                <p className="font-bold text-purple-800">English</p>
                <p className="text-sm">The Little Star of Light</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explorar por Categoria - Mantendo o estilo do site atual */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === 'en' ? "Explore by Category" : "Explorar por Categoria"}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'paz', color: 'bg-blue-500', icon: '☮️', en: 'Peace', pt: 'Paz' },
            { id: 'amor', color: 'bg-red-400', icon: '❤️', en: 'Love', pt: 'Amor' },
            { id: 'sabedoria', color: 'bg-purple-500', icon: '🧠', en: 'Wisdom', pt: 'Sabedoria' },
            { id: 'bondade', color: 'bg-yellow-500', icon: '🤲', en: 'Kindness', pt: 'Bondade' },
            { id: 'natureza', color: 'bg-green-500', icon: '🌿', en: 'Nature', pt: 'Natureza' },
            { id: 'protecao', color: 'bg-teal-500', icon: '🛡️', en: 'Protection', pt: 'Proteção' },
            { id: 'familia', color: 'bg-pink-500', icon: '👨‍👩‍👧‍👦', en: 'Family', pt: 'Família' },
            { id: 'amizade', color: 'bg-blue-400', icon: '🤝', en: 'Friendship', pt: 'Amizade' }
          ].map((category) => {
            const categoryPath = i18n.language === 'en' 
              ? `/categories?category=${category.id === 'amor' ? 'love' : 
                 category.id === 'paz' ? 'peace' : 
                 category.id === 'sabedoria' ? 'wisdom' : 
                 category.id === 'bondade' ? 'kindness' : 
                 category.id === 'natureza' ? 'nature' : 
                 category.id === 'protecao' ? 'protection' : 
                 category.id === 'familia' ? 'family' : 
                 category.id === 'amizade' ? 'friendship' : category.id}`
              : `/categorias?categoria=${category.id}`;
            
            return (
              <Link 
                key={category.id}
                href={categoryPath}
                className={`${category.color} rounded-lg p-4 text-white text-center hover:opacity-90 transition-opacity`}
              >
                <div className="text-2xl mb-1">{category.icon}</div>
                <h3 className="font-medium">{i18n.language === 'en' ? category.en : category.pt}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Estórias em Destaque */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === 'en' ? "Featured Stories" : "Estórias em Destaque"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-100 animate-pulse h-64 rounded-lg"></div>
            ))
          ) : (
            featuredStories.slice(0, 3).map((story: any) => (
              <Link 
                key={story.id}
                href={i18n.language === 'en' ? `/story/${story.id}` : `/estoria/${story.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={story.imageUrl || `https://source.unsplash.com/random/300x200?${story.categoryId}`} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <div className="mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${
                      story.categoryId === 'amor' ? 'bg-red-400' :
                      story.categoryId === 'paz' ? 'bg-blue-500' :
                      story.categoryId === 'sabedoria' ? 'bg-purple-500' :
                      story.categoryId === 'bondade' ? 'bg-yellow-500' :
                      story.categoryId === 'natureza' ? 'bg-green-500' :
                      story.categoryId === 'protecao' ? 'bg-teal-500' :
                      story.categoryId === 'familia' ? 'bg-pink-500' :
                      story.categoryId === 'amizade' ? 'bg-blue-400' : 'bg-gray-500'
                    }`}>
                      {story.categoryName}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{story.excerpt}</p>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {story.ageRange}
                  </span>
                  <div className="flex items-center text-purple-600 text-sm">
                    <Globe className="h-3 w-3 mr-1" />
                    <span>PT/EN</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="text-center mt-4">
          <Button asChild variant="outline">
            <Link href={i18n.language === 'en' ? "/stories" : "/estorias"}>
              {i18n.language === 'en' ? "View All Stories" : "Ver Todas as Estórias"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Estórias Recentes */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === 'en' ? "Recent Stories" : "Estórias Recentes"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-100 animate-pulse h-64 rounded-lg"></div>
            ))
          ) : (
            recentStories.slice(0, 3).map((story: any) => (
              <Link 
                key={story.id}
                href={i18n.language === 'en' ? `/story/${story.id}` : `/estoria/${story.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={story.imageUrl || `https://source.unsplash.com/random/300x200?${story.categoryId}`} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <div className="mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${
                      story.categoryId === 'amor' ? 'bg-red-400' :
                      story.categoryId === 'paz' ? 'bg-blue-500' :
                      story.categoryId === 'sabedoria' ? 'bg-purple-500' :
                      story.categoryId === 'bondade' ? 'bg-yellow-500' :
                      story.categoryId === 'natureza' ? 'bg-green-500' :
                      story.categoryId === 'protecao' ? 'bg-teal-500' :
                      story.categoryId === 'familia' ? 'bg-pink-500' :
                      story.categoryId === 'amizade' ? 'bg-blue-400' : 'bg-gray-500'
                    }`}>
                      {story.categoryName}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{story.excerpt}</p>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {story.ageRange}
                  </span>
                  <div className="flex items-center text-purple-600 text-sm">
                    <Globe className="h-3 w-3 mr-1" />
                    <span>PT/EN</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Estórias que Acendem a Imaginação */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === 'en' ? "Stories that Ignite Imagination" : "Estórias que Acendem a Imaginação"}
        </h2>
        
        <div className="bg-amber-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
              <p className="mb-4">
                {i18n.language === 'en'
                  ? "Our stories are carefully crafted to inspire children's imagination while teaching important values."
                  : "Nossas estórias são cuidadosamente elaboradas para inspirar a imaginação das crianças enquanto ensinam valores importantes."}
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">🔸</span>
                  {i18n.language === 'en'
                    ? "Beautiful illustrations that capture children's attention"
                    : "Belas ilustrações que capturam a atenção das