import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from '@shared/schema'

// Cores exatas das categorias conforme a imagem
const categoryColors: Record<string, string> = {
  'protecao': 'bg-[#F0BA0B]', // Amarelo mais forte
  'amor': 'bg-[#FF9966]',     // Laranja/pêssego
  'paz': 'bg-[#4D9FFF]',      // Azul claro
  'sabedoria': 'bg-[#B96EFF]', // Roxo/lilás
  'bondade': 'bg-[#33CC66]',   // Verde
  'natureza': 'bg-[#20B2AA]',  // Verde-azulado
  'familia': 'bg-[#FF6699]',   // Rosa
  'amizade': 'bg-[#66A3FF]'    // Azul mais claro
}

// Ícones SVG simples em branco para cada categoria
const CategoryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'protecao':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" stroke="white" fill="white" strokeWidth="1.5" />
        </svg>
      );
    case 'amor':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" fill="white" />
        </svg>
      );
    case 'paz':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 16.1 20.1 17 19 17H5C3.9 17 3 16.1 3 15V9C3 7.9 3.9 7 5 7H19C20.1 7 21 7.9 21 9V15Z" fill="white" />
          <path d="M18 5V3H6V5H18Z" fill="white" />
          <path d="M12 7V17M12 17L16 13M12 17L8 13" stroke="white" fill="white" strokeWidth="1.5" />
        </svg>
      );
    case 'sabedoria':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="white" />
          <path d="M12 17L12 13M12 9V7" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'bondade':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" fill="white" />
          <path d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" fill="white" />
        </svg>
      );
    case 'natureza':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8C8 10 7 16 7 16C7 16 10 7 17 8Z" fill="white" />
          <path d="M7 16C7 16 8.5 5.5 17 8C12 10 7 16 7 16Z" fill="white" />
          <path d="M12 20L7.5 16.5" stroke="white" strokeWidth="1.5" />
          <path d="M12 20L16.5 16.5" stroke="white" strokeWidth="1.5" />
        </svg>
      );
    case 'familia':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="7" r="4" fill="white" />
          <circle cx="6" cy="12" r="3" fill="white" />
          <circle cx="18" cy="12" r="3" fill="white" />
          <path d="M12 11L12 21" stroke="white" strokeWidth="2" />
          <path d="M6 15L6 21" stroke="white" strokeWidth="2" />
          <path d="M18 15L18 21" stroke="white" strokeWidth="2" />
        </svg>
      );
    case 'amizade':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="4" fill="white" />
          <circle cx="16" cy="8" r="4" fill="white" />
          <path d="M4 18C4 15.79 5.79 14 8 14C10.21 14 12 15.79 12 18" stroke="white" strokeWidth="2" fill="white" />
          <path d="M12 18C12 15.79 13.79 14 16 14C18.21 14 20 15.79 20 18" stroke="white" strokeWidth="2" fill="white" />
        </svg>
      );
    default:
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="white" />
        </svg>
      );
  }
};

export default function CategoriesList({ language = 'pt-BR' }) {
  const { t } = useTranslation()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories')
        if (!response.ok) throw new Error('Failed to fetch categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-40"></div>
        ))}
      </div>
    )
  }

  // Função para traduzir a descrição da categoria
  const getCategoryDescription = (category: Category, lang: string) => {
    if (lang === 'en') {
      switch(category.id) {
        case 'protecao': return 'Stories about care and protection';
        case 'amor': return 'Stories about love and affection';
        case 'paz': return 'Stories about inner peace and harmony';
        case 'sabedoria': return 'Stories about wisdom and knowledge';
        case 'bondade': return 'Stories about kindness and generosity';
        case 'natureza': return 'Stories about respect for nature';
        case 'familia': return 'Stories about family values';
        case 'amizade': return 'Stories about true friendship';
        default: return category.description;
      }
    }
    return category.description;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => {
        const color = categoryColors[category.id] || 'bg-gray-500';
        const categoryPath = language === 'en' 
          ? `/categories?category=${category.id === 'amor' ? 'love' : 
             category.id === 'paz' ? 'peace' : 
             category.id === 'sabedoria' ? 'wisdom' : 
             category.id === 'bondade' ? 'kindness' : 
             category.id === 'natureza' ? 'nature' : 
             category.id === 'protecao' ? 'protection' : 
             category.id === 'familia' ? 'family' : 
             category.id === 'amizade' ? 'friendship' : category.id}`
          : `/categorias?categoria=${category.id}`;
        
        const categoryName = language === 'en' 
          ? (category.id === 'amor' ? 'Love' : 
             category.id === 'paz' ? 'Peace' : 
             category.id === 'sabedoria' ? 'Wisdom' : 
             category.id === 'bondade' ? 'Kindness' : 
             category.id === 'natureza' ? 'Nature' : 
             category.id === 'protecao' ? 'Protection' : 
             category.id === 'familia' ? 'Family' : 
             category.id === 'amizade' ? 'Friendship' : category.id)
          : (category.id === 'amor' ? 'Amor' : 
             category.id === 'paz' ? 'Paz' : 
             category.id === 'sabedoria' ? 'Sabedoria' : 
             category.id === 'bondade' ? 'Bondade' : 
             category.id === 'natureza' ? 'Natureza' : 
             category.id === 'protecao' ? 'Proteção' : 
             category.id === 'familia' ? 'Família' : 
             category.id === 'amizade' ? 'Amizade' : category.id);
        
        return (
          <a 
            key={category.id}
            href={categoryPath}
            className="block"
          >
            <div className={`${color} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all`}>
              <div className="h-28 flex items-center justify-center">
                <CategoryIcon type={category.id} />
              </div>
              <div className="bg-white p-3 text-center">
                <h3 className="font-medium text-gray-800">{categoryName}</h3>
                <p className="text-xs text-gray-500 mt-1">{getCategoryDescription(category, language)}</p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
