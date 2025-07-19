import React from "react"

type Artist = {
  id: string
  name: string
  email: string
  status: "actif" | "en attente" | "banni"
  purchasesCount: number
  totalSpent: number
}

const dummyArtists: Artist[] = [
  { id: "a1", name: "Lina", email: "lina@example.com", status: "actif", purchasesCount: 8, totalSpent: 320 },
  { id: "a2", name: "Tom", email: "tom@example.com", status: "en attente", purchasesCount: 1, totalSpent: 14.9 },
  { id: "a3", name: "Emma", email: "emma@example.com", status: "banni", purchasesCount: 0, totalSpent: 0 },
]

export default function AdminArtistsPage() {
  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Gestion des Artistes</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-darkbg2 text-gray-300">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Achats</th>
              <th className="px-4 py-3">Total dépensé (€)</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyArtists.map((a) => (
              <tr key={a.id} className="border-t border-gray-700 hover:bg-darkbg2/50">
                <td className="px-4 py-3">{a.name}</td>
                <td className="px-4 py-3">{a.email}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={a.status} />
                </td>
                <td className="px-4 py-3">{a.purchasesCount}</td>
                <td className="px-4 py-3">{a.totalSpent.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <ActionMenu artistId={a.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: Artist["status"] }) {
  let color = "bg-gray-500"
  if (status === "actif") color = "bg-green-600"
  else if (status === "en attente") color = "bg-yellow-500"
  else if (status === "banni") color = "bg-red-600"

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
      {status.toUpperCase()}
    </span>
  )
}

function ActionMenu({ artistId }: { artistId: string }) {
  return (
    <div>
      {/* Ici un menu déroulant avec actions comme Editer, Suspendre, Supprimer */}
      <button className="bg-primary px-3 py-1 rounded hover:bg-primary/80 text-sm font-semibold">
        Actions
      </button>
    </div>
  )
}
