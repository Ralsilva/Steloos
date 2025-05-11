import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de idiomas suportados
const supportedLocales = ['en', 'pt-BR']
const defaultLocale = 'pt-BR'

// Função para obter o idioma preferido do navegador
function getPreferredLocale(request: NextRequest): string {
  // Obter o cabeçalho Accept-Language
  const acceptLanguage = request.headers.get('accept-language')

  if (!acceptLanguage) return defaultLocale

  // Analisar o cabeçalho Accept-Language
  const locales = acceptLanguage.split(',')
    .map(item => {
      const [locale, priority] = item.trim().split(';')
      return {
        locale: locale.split('-')[0], // Pegar apenas a parte principal (en, pt, etc.)
        priority: priority ? parseFloat(priority.split('=')[1]) : 1.0
      }
    })
    .sort((a, b) => b.priority - a.priority) // Ordenar por prioridade

  // Encontrar o primeiro idioma suportado
  const preferredLocale = locales.find(item =>
    supportedLocales.some(supported => supported.startsWith(item.locale))
  )

  // Se encontrou um idioma suportado, retornar o idioma completo correspondente
  if (preferredLocale) {
    const matchedLocale = supportedLocales.find(supported =>
      supported.startsWith(preferredLocale.locale)
    )
    return matchedLocale || defaultLocale
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Se o caminho já contém um idioma, não fazer nada
  if (pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // Se o caminho é a raiz, redirecionar para o idioma preferido
  if (pathname === '/') {
    const preferredLocale = getPreferredLocale(request)

    // Se o idioma preferido for inglês, redirecionar para /en
    if (preferredLocale === 'en') {
      return NextResponse.redirect(new URL('/en', request.url))
    }

    // Se o idioma preferido for português, manter na raiz
    return NextResponse.next()
  }

  return NextResponse.next()
}

// Configurar para executar apenas na raiz
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
