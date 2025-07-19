import './globals.css'
import React from 'react'

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
      <body className="bg-darkbg text-white font-poppins">
        {children}
      </body>
    </html>
  )
}
