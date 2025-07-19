import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'BeatsMarket - La plateforme mondiale des beats',
  description: 'Achetez, vendez et découvrez les meilleurs beats musicaux.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-darkbg text-white font-poppins flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
