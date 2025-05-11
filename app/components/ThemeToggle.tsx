'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark-mode')
      document.body.style.backgroundColor = ''
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark-mode')
      document.body.style.backgroundColor = 'hsl(220, 40%, 13%)'
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors hover:text-[#FF9D5C] focus:outline-none z-50"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem' }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        // Sun icon for dark mode (more kid-friendly)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#FF9D5C" stroke="#FF9D5C">
          <circle cx="12" cy="12" r="5" fill="#FF9D5C" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="#FF9D5C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        // Moon and stars icon for night mode (kid-friendly)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#6366F1" stroke="#6366F1">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="6" r="1" fill="#6366F1" />
          <circle cx="16" cy="8" r="1" fill="#6366F1" />
          <circle cx="19" cy="4" r="1" fill="#6366F1" />
        </svg>
      )}
    </button>
  )
}
