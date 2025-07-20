import React, { useEffect, useState } from "react";

type FinanceRecord = {
  month: string;
  tva: number;           // en euros
  commissions: number;   // en euros
  reversements: number;  // en euros
};

type Invoice = {
  id: string;
  date: string;
  user: string;
  amount: number;
  pdfUrl: string; // url ou chemin fichier PDF
};

export default function SuperAdminFinance() {
  const [financeData, setFinanceData] = useState<FinanceRecord[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    // Simuler fetch des données finance
    setFinanceData([
      { month: "Janvier 2025", tva: 4000, commissions: 9000, reversements: 35000 },
      { month: "Février 2025", tva: 3500, commissions: 8500, reversements: 32000 },
      { month: "Mars 2025", tva: 4200, commissions: 9200, reversements: 38000 },
    ]);

    // Simuler fetch factures
    setInvoices([
      { id: "F001", date: "2025-03-05", user: "Beatmaker1", amount: 120, pdfUrl: "/factures/F001.pdf" },
      { id: "F002", date: "2025-03-07", user: "Beatmaker2", amount: 300, pdfUrl: "/factures/F002.pdf" },
      { id: "F003", date: "2025-03-10", user: "Beatmaker3", amount: 180, pdfUrl: "/factures/F003.pdf" },
    ]);
  }, []);

  // Filtrer factures par mois sélectionné
  const filteredInvoices = selectedMonth
    ? invoices.filter(inv => inv.date.startsWith(selectedMonth.split(" ")[0].slice(0, 3)))
    : invoices;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Finance & Factures</h1>

      <h2 className="text-xl mb-4">Résumé mensuel</h2>
      <table className="w-full mb-8 text-left border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border border-gray-700">Mois</th>
            <th className="p-3 border border-gray-700">TVA collectée (€)</th>
            <th className="p-3 border border-gray-700">Commissions (€)</th>
            <th className="p-3 border border-gray-700">Reversements (€)</th>
          </tr>
        </thead>
        <tbody>
          {financeData.map(({ month, tva, commissions, reversements }) => (
            <tr
              key={month}
              className={`cursor-pointer hover:bg-gray-800 ${
                selectedMonth === month ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedMonth(month === selectedMonth ? "" : month)}
            >
              <td className="p-3 border border-gray-700">{month}</td>
              <td className="p-3 border border-gray-700">{tva.toLocaleString()}</td>
              <td className="p-3 border border-gray-700">{commissions.toLocaleString()}</td>
              <td className="p-3 border border-gray-700">{reversements.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMonth && (
        <>
          <h2 className="text-xl mb-4">Factures pour {selectedMonth}</h2>
          <table className="w-full mb-6 text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-3 border border-gray-700">ID</th>
                <th className="p-3 border border-gray-700">Date</th>
                <th className="p-3 border border-gray-700">Utilisateur</th>
                <th className="p-3 border border-gray-700">Montant (€)</th>
                <th className="p-3 border border-gray-700">Télécharger</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.length ? (
                filteredInvoices.map(({ id, date, user, amount, pdfUrl }) => (
                  <tr key={id} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-700">{id}</td>
                    <td className="p-3 border border-gray-700">{date}</td>
                    <td className="p-3 border border-gray-700">{user}</td>
                    <td className="p-3 border border-gray-700">{amount.toLocaleString()}</td>
                    <td className="p-3 border border-gray-700">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline"
                        download
                      >
                        PDF
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-3 text-center">
                    Aucune facture pour ce mois.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Bouton pour télécharger un ZIP global : à implémenter côté backend */}
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
            onClick={() => alert("Fonction ZIP global à implémenter")}
          >
            Télécharger toutes les factures (ZIP)
          </button>
        </>
      )}
    </div>
  );
}
