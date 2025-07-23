'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/beats', label: 'Beats' },
    { href: '/pricing', label: 'Tarifs' },
    { href: '/about', label: 'À propos' },
    { href: '/help', label: 'Aide' },
  ]

  return (
    <nav className="w-full px-4 md:px-8 py-4 border-b border-white/10 bg-[#121212] flex justify-between items-center z-50 relative">
      <Link href="/" className="text-xl font-bold text-white">BeatsMarket</Link>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <div className={cn(
        'flex-col md:flex-row md:flex md:gap-6 md:static absolute top-full left-0 w-full md:w-auto bg-[#121212] transition-all duration-300 overflow-hidden',
        open ? 'flex' : 'hidden'
      )}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              'block px-6 py-3 md:px-0 md:py-0 text-white font-medium hover:text-pink-500 transition',
              pathname === link.href && 'text-pink-500'
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
