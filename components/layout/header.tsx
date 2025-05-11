'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  
  const isEnglish = i18n.language === 'en'
  
  const navigation = [
    { name: t('menu.home'), href: isEnglish ? "/en" : "/" },
    { name: t('menu.stories'), href: isEnglish ? "/stories" : "/estorias" },
    { name: t('menu.categories'), href: isEnglish ? "/categories" : "/categorias" },
    { name: t('menu.about'), href: isEnglish ? "/about" : "/sobre" },
    { name: t('menu.contact'), href: isEnglish ? "/contact" : "/contato" },
  ]
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header className="bg-indigo-500 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="