'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

type Story = {
  id: string
  title: string
  excerpt: string
  categoryId: string
  ageRange: string
  imageUrl?: string
}

type Category = {
  id: string
  name: string
}

export default function StoriesList({ language }: { language: 'en' | 'pt-BR' }) {
  const [stories, setStories] = useState<Story[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  // Translations
  const t = {
    search: language === 'en' ? 'Search stories...' : 'Buscar estórias...',
    allCategories: language === 'en' ? 'All Categories' : 'Todas as Categorias',
    noResults: language === 'en' 
      ? 'No stories found. Try a different search or category.' 
      : 'Nenhuma estória encontrada. Tente uma busca ou categoria diferente.',
    years: language === 'en' ? 'years' : 'anos'
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        
        // Fetch categories
        const categoriesResponse = await fetch(`/api/categories?lang=${language}`)
        const categoriesData = await categoriesResponse.json()
        setCategories(categoriesData)
        
        // Fetch stories
        let url = `/api/stories?lang=${language}`
        if (activeCategory) {
          url = `/api/stories/by-category/${activeCategory}?lang=${language}`
        }
        if (searchQuery) {
          url = `/api/stories/search?q=${searchQuery}&lang=${language}`
        }
        
        const storiesResponse = await fetch(url)
        const storiesData = await storiesResponse.json()
        setStories(storiesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [language, activeCategory, searchQuery])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const query = formData.get('query') as string
    setSearchQuery(query)
    setActiveCategory(null)
  }
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId)
    setSearchQuery('')
  }
  
  const getCategoryColor = (categoryId: string) => {
    switch(categoryId) {
      case 'amor': return 'bg-red-100 text-red-800'
      case 'paz': return 'bg-blue-100 text-blue-800'
      case 'sabedoria': return 'bg-purple-100 text-purple-800'
      case 'natureza': return 'bg-green-100 text-green-800'
      case 'familia': return 'bg-yellow-100 text-yellow-800'
      case 'amizade': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map(i => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <form onSubmit={handleSearch} className="relative w-full md:w-64">
          <Input 
            name="query"
            placeholder={t.search}
            className="pr-10"
            defaultValue={searchQuery}
          />
          <Button 
            type="submit" 
            size="icon" 
            variant="ghost" 
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
        
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            size="sm"
            className="rounded-full whitespace-nowrap"
            onClick={() => setActiveCategory(null)}
          >
            {t.allCategories}
          </Button>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Stories grid */}
      {stories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map(story => (
            <Link
              key={story.id}
              href={language === 'en' ? `/story/${story.id}` : `/estoria/${story.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="h-40 overflow-hidden bg-gray-100">
                <img 
                  src={story.imageUrl || `/assets/stories/${story.id}.jpg`} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/assets/categories/${story.categoryId}.jpg`;
                  }}
                />
              </div>
              <div className="p-4 flex-grow">
                <div className="mb-2">
                  <Badge variant="outline" className={getCategoryColor(story.categoryId)}>
                    {categories.find(c => c.id === story.categoryId)?.name || story.categoryId}
                  </Badge>
                </div>
                <h2 className="text-lg font-semibold mb-2">{story.title}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{story.excerpt}</p>
                <p className="text-xs text-gray-500">{story.ageRange} {t.years}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">{t.noResults}</p>
        </div>
      )}
    </div>
  )
}
