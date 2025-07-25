'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function CoverForm() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResultUrl(null)

    try {
      const response = await fetch('/api/cover-ia/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la génération de la cover')
      }

      const data = await response.json()
      setResultUrl(data.imageUrl)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <Textarea
        placeholder="Décris le style et les éléments de ta pochette (ex : ambiance urbaine, nuit, néons)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        required
      />
      <Button type="submit" disabled={loading || prompt.trim() === ''}>
        {loading ? 'Génération en cours...' : 'Générer la pochette'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
      {resultUrl && (
        <div className="mt-6">
          <p className="mb-2">Voici ta pochette générée :</p>
          <img src={resultUrl} alt="Cover IA générée" className="mx-auto rounded shadow-md" />
        </div>
      )}
    </form>
  )
}