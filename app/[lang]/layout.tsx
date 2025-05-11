import type { Metadata } from 'next'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEnglish = params.lang === 'en';

  return {
    title: isEnglish ? 'STELOOS - Light Stories for Children' : 'STELOOS - Estórias de Luz para Crianças',
    description: isEnglish
      ? 'Stories about peace, love, wisdom and spiritual values for children'
      : 'Estórias sobre paz, amor, sabedoria e valores espirituais para crianças',
  }
}

export default async function RootLayout({ children, params }: Props) {
  const isEnglish = params.lang === 'en';

  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen bg-[#FFF2E6]">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href={`/${params.lang}`} className="flex items-center">
                <span className="text-2xl font-bold text-[#6366F1] font-heading">STELOOS</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href={`/${params.lang}`} className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
                {isEnglish ? 'Home' : 'Início'}
              </a>
              <a href={`/${params.lang}/${isEnglish ? 'stories' : 'estorias'}`} className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
                {isEnglish ? 'Stories' : 'Estórias'}
              </a>
              <a href={`/${params.lang}/${isEnglish ? 'categories' : 'categorias'}`} className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
                {isEnglish ? 'Categories' : 'Categorias'}
              </a>
              <a href={`/${params.lang}/${isEnglish ? 'about' : 'sobre'}`} className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
                {isEnglish ? 'About' : 'Sobre'}
              </a>
              <a href={`/${params.lang}/${isEnglish ? 'contact' : 'contato'}`} className="text-sm font-medium transition-colors hover:text-[#FF9D5C]">
                {isEnglish ? 'Contact' : 'Contato'}
              </a>
            </nav>
            <div className="flex items-center space-x-4 language-selector">
              <a href="/pt-BR" className={`text-sm font-medium transition-colors ${!isEnglish ? 'text-[#FF9D5C] font-bold' : 'hover:text-[#FF9D5C]'}`}>
                Português
              </a>
              <a href="/en" className={`text-sm font-medium transition-colors ${isEnglish ? 'text-[#FF9D5C] font-bold' : 'hover:text-[#FF9D5C]'}`}>
                English
              </a>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white text-[#333333] py-6 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 font-heading">
                  {isEnglish ? 'Navigation' : 'Navegação'}
                </h3>
                <ul className="space-y-2">
                  <li><a href={`/${params.lang}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Home' : 'Início'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'stories' : 'estorias'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Stories' : 'Estórias'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'categories' : 'categorias'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Categories' : 'Categorias'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'about' : 'sobre'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'About' : 'Sobre'}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-heading">
                  {isEnglish ? 'Categories' : 'Categorias'}
                </h3>
                <ul className="space-y-2">
                  <li><a href={`/${params.lang}/${isEnglish ? 'categories/love' : 'categorias/amor'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Love' : 'Amor'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'categories/peace' : 'categorias/paz'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Peace' : 'Paz'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'categories/wisdom' : 'categorias/sabedoria'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Wisdom' : 'Sabedoria'}</a></li>
                  <li><a href={`/${params.lang}/${isEnglish ? 'categories/kindness' : 'categorias/bondade'}`} className="hover:text-[#FF9D5C]">{isEnglish ? 'Kindness' : 'Bondade'}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-heading">
                  {isEnglish ? 'Contact' : 'Contato'}
                </h3>
                <p className="mb-2">
                  <a href="mailto:contact@steloos.com" className="hover:text-[#FF9D5C]">
                    contact@steloos.com
                  </a>
                </p>
                <p>
                  <a href={`/${params.lang}/${isEnglish ? 'contact' : 'contato'}`} className="hover:text-[#FF9D5C]">
                    {isEnglish ? 'Contact Form' : 'Formulário de Contato'}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                © {new Date().getFullYear()} STELOOS - {isEnglish ? 'All rights reserved' : 'Todos os direitos reservados'}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



