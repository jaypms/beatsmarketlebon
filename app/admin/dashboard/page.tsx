import React from "react"
import { StatCard } from "@/components/ui/stat-card"

export default function AdminDashboardPage() {
  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Tableau de bord SuperAdmin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
        <StatCard title="Nombre d'utilisateurs" value="1 245" />
        <StatCard title="Beatmakers actifs" value="315" />
        <StatCard title="Artistes inscrits" value="600" />
        <StatCard title="Revenus totaux" value="98 750 €" />
        <StatCard title="Beats vendus" value="2 300" />
        <StatCard title="Tickets support ouverts" value="15" />
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dernières activités</h2>
        <div className="bg-darkbg2 rounded-lg p-6 text-gray-400 italic">
          [Module d'activités à implémenter]
        </div>
      </section>
    </section>
  )
}
