import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "@/components/home/search-bar";
import StoryList from "@/components/stories/story-list";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Stories() {
  const [location] = useLocation();
  const [searchParams, setSearchParams] = useState<URLSearchParams>();
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  
  const { data: categories } = useQuery({
    queryKey: ['/api/categories'],
  });
  
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    setSearchParams(params);
    
    if (params.has('categoria')) {
      setCategoryFilter(params.get('categoria') || "");
    } else {
      setCategoryFilter("");
    }
  }, [location]);
  
  const searchQuery = searchParams?.get('q') || "";
  const title = searchQuery 
    ? `Resultados para "${searchQuery}"` 
    : categoryFilter && categories?.find(c => c.id === categoryFilter)
      ? `Histórias de ${categories.find(c => c.id === categoryFilter)?.name}`
      : "Todas as Histórias";
      
  const queryKey = searchQuery 
    ? `/api/stories/search?q=${searchQuery}` 
    : categoryFilter 
      ? `/api/stories?categoryId=${categoryFilter}` 
      : "/api/stories";
  
  const emptyMessage = searchQuery 
    ? `Nenhuma história encontrada para "${searchQuery}".` 
    : "Nenhuma história encontrada.";

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-text">{title}</h1>
      
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="w-full sm:w-64">
          <Label htmlFor="category-filter" className="mb-2 block">Filtrar por categoria</Label>
          <Select 
            value={categoryFilter} 
            onValueChange={(value) => {
              const [_, navigate] = useLocation();
              if (value) {
                navigate(`/historias?categoria=${value}`);
              } else {
                navigate('/historias');
              }
            }}
          >
            <SelectTrigger id="category-filter" className="w-full">
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as categorias</SelectItem>
              {categories?.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <StoryList 
        queryKey={queryKey}
        title=""
        emptyMessage={emptyMessage}
        variant="large"
      />
    </div>
  );
}
