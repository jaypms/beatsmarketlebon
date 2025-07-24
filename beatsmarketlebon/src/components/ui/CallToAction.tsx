'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-4 text-center">
      <h3 className="text-3xl font-bold text-white mb-6">
        Rejoins la communauté BeatsMarket dès maintenant !
      </h3>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Que tu sois beatmaker ou artiste, découvre des outils innovants pour booster ta carrière musicale.
      </p>
      <Link href="/signup">
        <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          Inscription gratuite
        </Button>
      </Link>
    </section>
  )
}
