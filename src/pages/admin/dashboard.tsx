import React, { useEffect, useState } from "react";

type Kpi = {
  label: string;
  value: number;
  changePercent?: number; // positif ou négatif
};

type Sale = {
  id: number;
  beatTitle: string;
  buyer: string;
  date: string;
  amount: number;
  license: string;
};

export default function AdminDashboard() {
  const [kpis, setKpis] = useState<Kpi[]>([]);
  const [recentSales, setRecentSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  // Simuler fetch des données
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setKpis([
        { label: "Total des ventes", value: 1530, changePercent: 12.5 },
        { label: "Beatmakers actifs", value: 47 },
        { label: "Artistes inscrits", value: 120 },
        { label: "Revenu ce mois", value: 4230, changePercent: -3.2 },
      ]);

      setRecentSales([
        {
          id: 1,
          beatTitle: "Sunset Vibes",
          buyer: "Alice Dupont",
          date: "2025-07-20",
          amount: 29.99,
          license: "Premium WAV",
        },
        {
          id: 2,
          beatTitle: "Night Drive",
          buyer: "Bob Martin",
          date: "2025-07-18",
          amount: 19.99,
          license: "Basique MP3",
        },
        {
          id: 3,
          beatTitle: "Urban Flow",
          buyer: "Carla Ruiz",
          date: "2025-07-15",
          amount: 49.99,
          license: "Exclusive",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  function formatCurrency(value: number) {
    return value.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    });
  }

  return (
    <main className="min-h-screen bg-[#1A1B1F] text-white font-['Poppins'] max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Tableau de bord Admin</h1>

      {loading ? (
        <p>Chargement des données...</p>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {kpis.map(({ label, value, changePercent }) => (
              <div
                key={label}
                className="bg-[#2B2C31] p-6 rounded-lg shadow-md flex flex-col justify-center items-center"
              >
                <p className="text-sm text-gray-400 mb-2">{label}</p>
                <p className="text-3xl font-bold">
                  {label.includes("vente") || label.includes("Revenu")
                    ? formatCurrency(value)
                    : value}
                </p>
                {typeof changePercent === "number" && (
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      changePercent > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {changePercent > 0 ? "▲" : "▼"} {Math.abs(changePercent)}%
                  </p>
                )}
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ventes récentes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse bg-[#2B2C31] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#3C3D43] text-left">
                    <th className="py-3 px-4">Titre du beat</th>
                    <th className="py-3 px-4">Acheteur</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Licence</th>
                    <th className="py-3 px-4">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map(({ id, beatTitle, buyer, date, amount, license }) => (
                    <tr
                      key={id}
                      className="border-b border-gray-600 hover:bg-[#3B3B42] transition-colors"
                    >
                      <td className="py-3 px-4">{beatTitle}</td>
                      <td className="py-3 px-4">{buyer}</td>
                      <td className="py-3 px-4">{new Date(date).toLocaleDateString("fr-FR")}</td>
                      <td className="py-3 px-4">{license}</td>
                      <td className="py-3 px-4">{formatCurrency(amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </main>
  );
}