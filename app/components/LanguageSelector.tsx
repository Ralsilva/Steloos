'use client'

import { useState, useRef, useEffect } from 'react'

interface Language {
  code: string
  name: string
  nativeName: string
  flag?: string
  path: string
}

const languages: Language[] = [
  {
    code: 'pt-BR',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português',
    flag: '🇧🇷',
    path: '/pt-BR'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    path: '/en'
  },
  // Adicione mais idiomas aqui conforme necessário
]

export default function LanguageSelector({ currentLang = 'pt-BR' }: { currentLang?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#6366F1',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '18px'
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span aria-hidden="true">🌐</span>
        <span className="sr-only">Selecionar idioma</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          {languages.map((language) => (
            <a
              key={language.code}
              href={language.path}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLang === language.code ? 'text-[#FF9D5C] font-medium' : 'text-gray-700'
              }`}
              role="menuitem"
            >
              <div className="flex items-center">
                {language.flag && <span className="mr-2">{language.flag}</span>}
                <span>{language.nativeName}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
