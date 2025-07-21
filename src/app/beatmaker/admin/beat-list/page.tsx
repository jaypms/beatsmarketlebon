"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import BeatStatusBadge from "@/components/beat/BeatStatusBadge"

export default function BeatListPage() {
  const [beats, setBeats] = useState([])
  const [filter, setFilter] = useState<"all" | "draft" | "published" | "disabled">("all")

  useEffect(() => {
    async function fetchBeats() {
      const res = await fetch("/api/beatmaker/beats")
      if (res.ok) {
        const data = await res.json()
        setBeats(data)
      }
    }
    fetchBeats()
  }, [])

  const filteredBeats = beats.filter((beat) => filter === "all" || beat.status === filter)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Mes Beats</h1>

      <div className="mb-4 flex space-x-2">
        <button
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-400"}`}
          onClick={() => setFilter("all")}
        >
          Tous
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "draft" ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-400"}`}
          onClick={() => setFilter("draft")}
        >
          Brouillons
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "published" ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-400"}`}
          onClick={() => setFilter("published")}
        >
          En ligne
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "disabled" ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-400"}`}
          onClick={() => setFilter("disabled")}
        >
          Retirés
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-zinc-700 text-white">
        <thead>
          <tr>
            <th className="border border-zinc-700 px-4 py-2">Titre</th>
            <th className="border border-zinc-700 px-4 py-2">Statut</th>
            <th className="border border-zinc-700 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBeats.map((beat) => (
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
                {/* Actions à implémenter */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
