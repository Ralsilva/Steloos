'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
}

export default function ActiveLink({ 
  href, 
  children, 
  className = 'text-sm font-medium transition-colors hover:text-[#FF9D5C]',
  activeClassName = 'text-[#FF9D5C]'
}: ActiveLinkProps) {
  const pathname = usePathname()
  
  // Check if the link should be active
  const isActive = 
    href === '/' ? (pathname === '/' || pathname === '/pt-BR') :
    href === '/en' ? pathname === '/en' :
    pathname.includes(href)
  
  // Combine the classes
  const finalClassName = `${className} ${isActive ? activeClassName : ''}`
  
  return (
    <Link href={href} className={finalClassName}>
      {children}
    </Link>
  )
}
