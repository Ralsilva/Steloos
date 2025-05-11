'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { i18n } = useTranslation()
  
  const languages = [
    { name: "Português", code: "pt-BR", flag: "🇧🇷" },
    { name: "English", code: "en", flag: "🇺🇸" },
  ]
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]
  
  // Map for category translations
  const categoryTranslations: Record<string, string> = {
    'amor': 'love',
    'paz': 'peace',
    'sabedoria': 'wisdom',
    'bondade': 'kindness',
    'natureza': 'nature',
    'protecao': 'protection',
    'familia': 'family',
    'amizade': 'friendship',
    // Reverse translations
    'love': 'amor',
    'peace': 'paz',
    'wisdom': 'sabedoria',
    'kindness': 'bondade',
    'nature': 'natureza',
    'protection': 'protecao',
    'family': 'familia',
    'friendship': 'amizade'
  }
  
  const handleLanguageChange = (languageCode: string) => {
    if (languageCode === i18n.language) return
    
    // Change language in i18n
    i18n.changeLanguage(languageCode)
    
    // Redirect to equivalent page in the new language
    let newPath = pathname
    
    // Handle route translations
    if (languageCode === 'en') {
      // Portuguese to English
      newPath = newPath
        .replace(/^\/estorias/, '/stories')
        .replace(/^\/estoria\//, '/story/')
        .replace(/^\/categorias/, '/categories')
        .replace(/^\/categoria\//, '/category/')
        .replace(/^\/sobre/, '/about')
        .replace(/^\/contato/, '/contact')
      
      // Handle home page
      if (newPath === '/') {
        newPath = '/en'
      }
    } else {
      // English to Portuguese
      newPath = newPath
        .replace(/^\/stories/, '/estorias')
        .replace(/^\/story\//, '/estoria/')
        .replace(/^\/categories/, '/categorias')
        .replace(/^\/category\//, '/categoria/')
        .replace(/^\/about/, '/sobre')
        .replace(/^\/contact/, '/contato')
      
      // Handle English home page
      if (newPath === '/en') {
        newPath = '/'
      }
    }
    
    // Handle category parameters in URLs
    if (newPath.includes('?category=') || newPath.includes('?categoria=')) {
      const urlObj = new URL(window.location.origin + newPath)
      const categoryParam = urlObj.searchParams.get('category') || urlObj.searchParams.get('categoria')
      
      if (categoryParam && categoryTranslations[categoryParam]) {
        if (languageCode === 'en') {
          urlObj.searchParams.delete('categoria')
          urlObj.searchParams.set('category', categoryTranslations[categoryParam])
        } else {
          urlObj.searchParams.delete('category')
          urlObj.searchParams.set('categoria', categoryTranslations[categoryParam])
        }
        newPath = urlObj.pathname + urlObj.search
      }
    }
    
    // Navigate to the new path
    router.push(newPath)
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}