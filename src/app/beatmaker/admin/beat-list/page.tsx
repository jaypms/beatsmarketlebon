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
          className={`px-4 py-2
