import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function CoverForm() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setImageUrl(null)

    try {
      const response = await fetch('/api/ai/cover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la génération de l’image')
      }

      const data = await response.json()
      setImageUrl(data.imageUrl)
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="prompt" className="block mb-2 font-medium">
          Description de la pochette
        </label>
        <Textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décris ta pochette idéale..."
          rows={4}
          required
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Génération en cours...' : 'Générer la pochette'}
      </Button>

      {error && <p className="text-red-500">{error}</p>}

      {imageUrl && (
        <div className="mt-6 text-center">
          <img
            src={imageUrl}
            alt="Pochette générée par IA"
            className="mx-auto rounded shadow-md max-w-full h-auto"
          />
        </div>
      )}
    </form>
  )
}