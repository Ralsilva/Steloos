'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Landing({ defaultLanguage = 'pt-BR' }: { defaultLanguage?: string }) {
  const { t, i18n } = useTranslation();
  
  // Define o idioma padrão com base no parâmetro
  useEffect(() => {
    if (i18n.language !== defaultLanguage) {
      i18n.changeLanguage(defaultLanguage);
    }
  }, [defaultLanguage, i18n]);
  
  const isEnglish = i18n.language === 'en';
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-indigo-500 rounded-lg p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              STELOOS
            </h1>
            <p className="text-xl mb-4">
              {isEnglish 
                ? "Stories of Light for Children" 
                : "Estórias de Luz para Crianças"}
            </p>
            <p className="mb-6">
              {isEnglish
                ? "Children's stories about peace, love, wisdom and spiritual values"
                : "Estórias infantis sobre paz, amor, sabedoria e valores espirituais"}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link 
                href={isEnglish ? "/stories" : "/estorias"}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md"
              >
                {isEnglish ? "Explore Stories" : "Explorar Estórias"}
              </Link>
              <Link 
                href={isEnglish ? "/" : "/en"}
                className="bg-white text-indigo-500 hover:bg-gray-100 px-4 py-2 rounded-md"
              >
                {isEnglish ? 'Mudar para PT' : 'Switch to EN'}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full">
              <Image 
                src="/assets/children-reading.png" 
                alt={isEnglish ? "Children reading" : "Crianças lendo"}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estórias em Destaque */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {isEnglish ? "Featured Stories" : "Estórias em Destaque"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exemplo de card de estória */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h3 className="font-bold mb-2">
                {isEnglish ? "The Little Star of Light" : "A Estrelinha de Luz"}
              </h3>
              <p className="text-gray-600 mb-4">
                {isEnglish 
                  ? "A story about hope and friendship..." 
                  : "Uma estória sobre esperança e amizade..."}
              </p>
              <Link 
                href={isEnglish ? "/stories/little-star" : "/estorias/estrelinha-luz"}
                className="text-indigo-500 hover:underline"
              >
                {isEnglish ? "Read more" : "Ler mais"}
              </Link>
            </div>
          </div>
          
          {/* Mais cards aqui */}
        </div>
      </section>
    </div>
  )
}
