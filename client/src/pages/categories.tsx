import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { categoryInfo } from "@/lib/data";

export default function Categories() {
  const [location] = useLocation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  
  const { data: categories, isLoading: loadingCategories } = useQuery({
    queryKey: ['/api/categories'],
  });
  
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    if (params.has('categoria')) {
      setSelectedCategoryId(params.get('categoria'));
    } else {
      setSelectedCategoryId(null);
    }
  }, [location]);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-text">Categorias de Histórias</h1>
      
      {selectedCategoryId && categories?.find(c => c.id === selectedCategoryId) ? (
        <div className="mb-6">
          <Link 
            href="/categorias"
            className="text-secondary hover:text-accent font-medium inline-flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Voltar para todas as categorias
          </Link>
        </div>
      ) : null}
      
      {loadingCategories ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-soft animate-pulse h-40"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories?.map((category) => {
            const { icon, color } = categoryInfo[category.id] || { icon: "star", color: "bg-primary" };
            
            return (
              <Link 
                key={category.id} 
                href={`/categorias?categoria=${category.id}`}
                className={`category-card bg-white rounded-xl shadow-soft overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-md ${
                  selectedCategoryId === category.id ? 'ring-4 ring-primary' : ''
                }`}
              >
                <div className={`h-32 ${color} flex items-center justify-center`}>
                  <i className={`fas fa-${icon} text-white text-5xl`}></i>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      
      {selectedCategoryId && categories?.find(c => c.id === selectedCategoryId) ? (
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-text">
            Histórias de {categories.find(c => c.id === selectedCategoryId)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="category-stories">
            {/* Stories will be loaded here by StoryList component */}
            {/* This would be better implemented with a StoryList component, but for simplicity I'm using the existing routes */}
            <iframe
              src={`/historias?categoria=${selectedCategoryId}&embed=true`}
              className="w-full h-[800px] border-none"
              title={`Histórias de ${categories.find(c => c.id === selectedCategoryId)?.name}`}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
