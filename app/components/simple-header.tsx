"use client"

import Link from 'next/link'

export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">STELOOS</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/pt-BR" className="text-sm font-medium transition-colors hover:text-blue-600">
            Português
          </Link>
          <Link href="/en" className="text-sm font-medium transition-colors hover:text-blue-600">
            English
          </Link>
        </div>
      </nav>
    </header>
  )
}