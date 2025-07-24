'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full text-center py-20 px-4 md:px-8 bg-gradient-to-b from-[#121212] to-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Libère ton potentiel musical.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          BeatsMarket est la plateforme ultime pour les artistes et beatmakers. Trouve, vends et distribue tes beats sans limites.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/beats">
            <Button size="lg" className="text-white bg-pink-600 hover:bg-pink-700">
              Explorer les Beats
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Voir les Offres
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
