import React from "react"

export default function DashboardPage() {
  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Tableau de bord Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        <StatCard title="Revenus ce mois" value="12 450 €" />
        <StatCard title="Nouveaux beatmakers" value="23" />
        <StatCard title="Beats en ligne" value="1 200" />
        <StatCard title="Commandes en attente" value="7" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Graphique des ventes</h2>
        <div className="bg-darkbg2 rounded-lg h-48 flex items-center justify-center text-gray-500 italic">
          [Graphique à implémenter]
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ventes récentes</h2>
        <table className="w-full text-sm text-left border border-gray-700 rounded-lg">
          <thead className="bg-darkbg2">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Beat</th>
              <th className="p-3">Acheteur</th>
              <th className="p-3">Montant</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemple de ligne */}
            <tr className="border-t border-gray-700 hover:bg-darkbg2/50">
              <td className="p-3">15/07/2025</td>
              <td className="p-3">Beat Hip-Hop N°1</td>
              <td className="p-3">Jay Jay</td>
              <td className="p-3">29,90 €</td>
            </tr>
            <tr className="border-t border-gray-700 hover:bg-darkbg2/50">
              <td className="p-3">14/07/2025</td>
              <td className="p-3">Beat Trap N°5</td>
              <td className="p-3">Zara</td>
              <td className="p-3">14,90 €</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-darkbg2 rounded-lg p-6 shadow-md">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}
