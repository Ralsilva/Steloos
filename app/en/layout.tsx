'use client'

import LanguageSelector from '../components/LanguageSelector'
import ActiveLink from '../components/ActiveLink'
import SimpleThemeButton from '../components/SimpleThemeButton'

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/en" className="flex items-center gap-2">
              <img
                src="/assets/images/steloos.jpg"
                alt="STELOOS Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-[#6366F1] font-heading">STELOOS</span>
            </a>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8">
            <ActiveLink href="/en">
              Home
            </ActiveLink>
            <ActiveLink href="/en/stories">
              Stories
            </ActiveLink>
            <ActiveLink href="/en/categories">
              Categories
            </ActiveLink>
            <ActiveLink href="/en/about">
              About
            </ActiveLink>
            <ActiveLink href="/en/contact">
              Contact
            </ActiveLink>
            </nav>
            <div className="flex items-center ml-4 border-l pl-4 border-gray-200 space-x-2">
              <SimpleThemeButton />
              <LanguageSelector currentLang="en" />
            </div>
          </div>
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
                Stories that enchant children's hearts
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
                Steloos on YouTube
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="/en" className="hover:text-[#FF9D5C]">Home</a></li>
                <li><a href="/en/stories" className="hover:text-[#FF9D5C]">Stories</a></li>
                <li><a href="/en/categories" className="hover:text-[#FF9D5C]">Categories</a></li>
                <li><a href="/en/about" className="hover:text-[#FF9D5C]">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Explore by Category
              </h3>
              <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-2">
                  <li><a href="/en/categories/love" className="hover:text-[#FF9D5C]">Love</a></li>
                  <li><a href="/en/categories/peace" className="hover:text-[#FF9D5C]">Peace</a></li>
                  <li><a href="/en/categories/protection" className="hover:text-[#FF9D5C]">Protection</a></li>
                  <li><a href="/en/categories/wisdom" className="hover:text-[#FF9D5C]">Wisdom</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="/en/categories/kindness" className="hover:text-[#FF9D5C]">Kindness</a></li>
                  <li><a href="/en/categories/nature" className="hover:text-[#FF9D5C]">Nature</a></li>
                  <li><a href="/en/categories/family" className="hover:text-[#FF9D5C]">Family</a></li>
                  <li><a href="/en/categories/friendship" className="hover:text-[#FF9D5C]">Friendship</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">
                Contact
              </h3>
              <p className="mb-2">
                <a href="mailto:contact@steloos.com" className="hover:text-[#FF9D5C]">
                  contact@steloos.com
                </a>
              </p>
              <p>
                <a href="/en/contact" className="hover:text-[#FF9D5C]">
                  Contact Form
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} STELOOS - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
