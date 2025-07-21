import '../styles/globals.css'

export const metadata = {
  title: 'BeatsMarket',
  description: 'Plateforme de vente de beats pro',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
