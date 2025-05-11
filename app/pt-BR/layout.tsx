'use client'

import LanguageSelector from '../components/LanguageSelector'
import { useState, useEffect } from 'react'

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        // Switch to light mode
        document.documentElement.classList.remove('dark')
        document.body.style.backgroundColor = '#FFF2E6'
        localStorage.setItem('theme', 'light')
        setIsDark(false)
      } else {
        // Switch to dark mode
        document.documentElement.classList.add('dark')
        document.body.style.backgroundColor = 'hsl(220, 40%, 13%)'
        localStorage.setItem('theme', 'dark')
        setIsDark(true)
      }
    }
  }
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/assets/images/steloos.jpg"
                alt="STELOOS Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-[#6366F1] font-heading">STELOOS</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
              Início
            </a>
            <a href="/estorias" className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
              Estórias
            </a>
            <a href="/categorias" className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
              Categorias
            </a>
            <a href="/sobre" className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
              Sobre
            </a>
            <a href="/contato" className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
              Contato
            </a>
            <div className="flex items-center ml-4 border-l pl-4 border-gray-200 space-x-2">
              <button
                onClick={toggleTheme}
                style={{
                  backgroundColor: isDark ? '#FF9D5C' : '#6366F1',
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
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <LanguageSelector currentLang="pt-BR" />
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white text-[#333333] py-6 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-3">
                <img src="/assets/images/steloos.jpg" alt="STELOOS Logo" className="h-8 w-auto" />
                <span className="text-2xl font-bold text-[#6366F1] font-heading ml-2">STELOOS</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center md:text-left">
                Estórias que encantam o coração infantil
              </p>
              <a
                href="https://youtube.com/@Steloos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                Steloos no YouTube
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Navegação
              </h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-[#FF9D5C]">Início</a></li>
                <li><a href="/estorias" className="hover:text-[#FF9D5C]">Estórias</a></li>
                <li><a href="/categorias" className="hover:text-[#FF9D5C]">Categorias</a></li>
                <li><a href="/sobre" className="hover:text-[#FF9D5C]">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Explorar por Categoria
              </h3>
              <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-2">
                  <li><a href="/categorias/amor" className="hover:text-[#FF9D5C]">Amor</a></li>
                  <li><a href="/categorias/paz" className="hover:text-[#FF9D5C]">Paz</a></li>
                  <li><a href="/categorias/fe" className="hover:text-[#FF9D5C]">Fé</a></li>
                  <li><a href="/categorias/sabedoria" className="hover:text-[#FF9D5C]">Sabedoria</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="/categorias/bondade" className="hover:text-[#FF9D5C]">Bondade</a></li>
                  <li><a href="/categorias/natureza" className="hover:text-[#FF9D5C]">Natureza</a></li>
                  <li><a href="/categorias/familia" className="hover:text-[#FF9D5C]">Família</a></li>
                  <li><a href="/categorias/amizade" className="hover:text-[#FF9D5C]">Amizade</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Contato
              </h3>
              <p className="mb-2">
                <a href="mailto:contact@steloos.com" className="hover:text-[#FF9D5C]">
                  contact@steloos.com
                </a>
              </p>
              <p>
                <a href="/contato" className="hover:text-[#FF9D5C]">
                  Formulário de Contato
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} STELOOS - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
