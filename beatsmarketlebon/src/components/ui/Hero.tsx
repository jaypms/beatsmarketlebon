'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#1f1f1f] to-[#121212] py-24 px-4 md:px-8 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">
          Trouve le beat parfait pour ta musique
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300">
          BeatsMarket connecte les artistes et les beatmakers du monde entier, avec un moteur de recherche IA puissant et une boutique unique.
        </p>
        <Link href="/beats">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Découvrir les Beats
          </Button>
        </Link>
      </div>
    </section>
  )
}
