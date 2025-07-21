import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto p-6 text-gray-300 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-pink-500">À propos de BeatsMarket</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notre mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            BeatsMarket est la plateforme numéro 1 dédiée aux beatmakers et artistes du monde entier. 
            Notre mission est de fournir un espace sécurisé, moderne et innovant pour la vente et l'achat de beats de qualité.
          </p>
        </CardContent>
      </Card>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nos outils</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Boutique Pro pour vendre vos beats</li>
              <li>Mastering audio par IA intégré</li>
              <li>Création automatique de pochettes</li>
              <li>Distribution digitale simplifiée</li>
              <li>Support client dédié
