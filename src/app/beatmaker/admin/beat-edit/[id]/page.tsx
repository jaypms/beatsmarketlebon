"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import BeatForm from "@/components/beat/BeatForm"

export default function BeatEditPage() {
  const { id } = useParams()
  const router = useRouter()
  const [beat, setBeat] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBeat() {
      const res = await fetch(`/api/beatmaker/beats/${id}`)
      if (res.ok) {
        const data = await res.json()
        setBeat(data)
      } else {
        router.push("/beatmaker/admin/beat-list")
      }
      setLoading(false)
    }

    if (id) {
      fetchBeat()
    }
  }, [id, router])

  if (loading) {
    return <div className="p-6 text-white">Chargement...</div>
  }

  if (!beat) {
    return <div className="p-6 text-red-500">Beat introuvable</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Modifier le beat</h1>
      <BeatForm initialData={beat} />
    </div>
  )
}
