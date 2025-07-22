// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'BeatsMarket - Le marché des beats pro',
  description: 'Achetez et vendez des beats de qualité professionnelle',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
