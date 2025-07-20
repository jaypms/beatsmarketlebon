import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type KPI = {
  label: string;
  value: number | string;
  icon?: React.ReactNode;
};

export default function SuperAdminDashboard() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number[]>([]);

  useEffect(() => {
    // Simuler fetch des données, remplacer par API réelle
    setKpis([
      { label: "Chiffre d'affaires total", value: "45 000 €" },
      { label: "Utilisateurs actifs", value: 1245 },
      { label: "Ventes récentes", value: 38 },
    ]);

    setMonthlyRevenue([3000, 2500, 3200, 4000, 4200, 4800, 4700, 5000, 5200, 5800, 6000, 6500]);
  }, []);

  const data = {
    labels: [
      "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
      "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
    ],
    datasets: [
      {
        label: "CA mensuel (€)",
        data: monthlyRevenue,
        borderColor: "rgba(236, 72, 153, 1)", // rose vif
        backgroundColor: "rgba(236, 72, 153, 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" as const },
      title: { display: true, text: "Évolution du CA sur 12 mois" },
    },
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Dashboard SuperAdmin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-gray-800 p-4 rounded shadow flex flex-col items-center"
          >
            <div className="text-xl font-semibold">{kpi.value}</div>
            <div className="text-gray-400 mt-1">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
