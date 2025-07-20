"use client"

import React, { useState } from "react"

export default function AssistantIA() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!input.trim()) return
    setLoading(true)
    setResponse(null)
    try {
      // Exemple : appel API fictif vers backend IA
      const res = await fetch("/api/assistant-ia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      })
      const data = await res.json()
      setResponse(data.reply)
    } catch (err) {
      setResponse("Erreur lors de la requête IA.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Demande à l'assistant IA..."
        rows={4}
        className="w-full rounded border p-2"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-2 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? "Chargement..." : "Envoyer"}
      </button>
      {response && (
        <div className="mt-4 rounded border bg-gray-900 p-4 text-white whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  )
}
