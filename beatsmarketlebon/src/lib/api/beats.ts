// API simplifiée pour gestion beats

export type Beat = {
  id: string
  title: string
  description?: string
  miniatureUrl?: string
  prices: {
    basique: number
    premium: number
    exclusive: number
    exclusive_plus: number
  }
}

// Simulation fetch beats
export async function fetchBeats(): Promise<Beat[]> {
  const res = await fetch("/api/beats")
  if (!res.ok) throw new Error("Erreur récupération beats")
  return res.json()
}

// Simulation save beat (create or update)
export async function saveBeat(beat: Partial<Beat>): Promise<Beat> {
  const method = beat.id ? "PUT" : "POST"
  const url = beat.id ? `/api/beats/${beat.id}` : "/api/beats"
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(beat),
  })
  if (!res.ok) throw new Error("Erreur sauvegarde beat")
  return res.json()
}

// Simulation delete beat
export async function deleteBeat(id: string): Promise<void> {
  const res = await fetch(`/api/beats/${id}`, { method: "DELETE" })
  if (!res.ok) throw new Error("Erreur suppression beat")
}
