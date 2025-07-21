"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { BeatStatusBadge } from "@/components/beat/BeatStatusBadge"

export default function BeatListPage() {
  const [beats, setBeats] = useState([])

  useEffect(() => {
    // Exemple de fetch des beats du beatmaker
    async function fetchBeats() {
      const res = await fetch("/api/beatmaker/beats")
      if (res.ok) {
        const data = await res.json()
        setBeats(data)
      }
    }
    fetchBeats()
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Mes Beats</h1>
      <table className="w-full table-auto border-collapse border border-zinc-700 text-white">
        <thead>
          <tr>
            <th className="border border-zinc-700 px-4 py-2">Titre</th>
            <th className="border border-zinc-700 px-4 py-2">Statut</th>
            <th className="border border-zinc-700 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beats.map((beat) => (
            <tr key={beat.id} className="hover:bg-zinc-800">
              <td className="border border-zinc-700 px-4 py-2">
                <Link href={`/beatmaker/admin/beat-edit/${beat.id}`} className="text-pink-500 hover:underline">
                  {beat.title}
                </Link>
              </td>
              <td className="border border-zinc-700 px-4 py-2">
                <BeatStatusBadge status={beat.status} />
              </td>
              <td className="border border-zinc-700 px-4 py-2">
                {/* Actions : éditer, supprimer, etc. */}
                {/* À implémenter */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
