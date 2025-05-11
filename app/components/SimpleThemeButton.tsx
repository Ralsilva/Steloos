'use client'

import { useState, useEffect } from 'react'

export default function SimpleThemeButton() {
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
        marginLeft: '10px',
        marginRight: '10px'
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
