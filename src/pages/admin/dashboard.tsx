import React from "react";
import {
  BarChart2,
  Users,
  DollarSign,
  Music,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminDashboard() {
  // Données KPI simulées
  const kpis = [
    { id: 1, icon: <Users className="w-6 h-6 text-pink-500" />, label: "Utilisateurs actifs", value: 1287 },
    { id: 2, icon: <DollarSign className="w-6 h-6 text-pink-500" />, label: "Revenus ce mois", value: "12 350 €" },
    { id: 3, icon: <Music className="w-6 h-6 text-pink-500" />, label: "Beats vendus", value: 342 },
    { id: 4, icon: <CheckCircle className="w-6 h-6 text-pink-500" />, label: "Licences validées", value: 298 },
    { id: 5, icon: <AlertCircle className="w-6 h-6 text-pink-500" />, label: "Tickets ouverts", value: 14 },
  ];

  // Données ventes récentes simulées
  const recentSales = [
    { id: 1, buyer: "ArtisteX", beat: "Flow puissant", price: "49,90 €", date: "2025-07-20" },
    { id: 2, buyer: "MC Nova", beat: "Beat de feu", price: "29,90 €", date: "2025-07-19" },
    { id: 3, buyer: "DJ Cool", beat: "Chill vibes", price: "19,90 €", date: "2025-07-18" },
  ];

  return (
    <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-7xl mx-auto font-['PT_Sans', 'Poppins']">
      <h1 className="text-4xl font-bold mb-10">Dashboard Admin</h1>

      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        {kpis.map(({ id, icon, label, value }) => (
          <div
            key={id}
            className="bg-[#27282D] rounded-lg p-6 flex items-center space-x-4 shadow-md"
          >
            <div className="p-3 bg-pink-600 rounded-full">{icon}</div>
            <div>
              <p className="text-gray-400 font-semibold">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Graphique des revenus (placeholder) */}
      <section className="bg-[#27282D] rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Revenus mensuels</h2>
        <div className="h-48 flex justify-center items-center text-gray-500 italic">
          {/* Ici, intégrer un graphique réel (ex : recharts, chart.js) */}
          <BarChart2 size={48} />
          <span className="ml-3">Graphique à intégrer</span>
        </div>
      </section>

      {/* Ventes récentes */}
      <section className="bg-[#27282D] rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ventes récentes</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2 px-4">Acheteur</th>
              <th className="py-2 px-4">Beat</th>
              <th className="py-2 px-4">Prix</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentSales.map(({ id, buyer, beat, price, date }) => (
              <tr
                key={id}
                className="border-b border-gray-700 hover:bg-[#34343B] transition-colors"
              >
                <td className="py-2 px-4">{buyer}</td>
                <td className="py-2 px-4">{beat}</td>
                <td className="py-2 px-4">{price}</td>
                <td className="py-2 px-4">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}