import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MasteringForm() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [masteredUrl, setMasteredUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0])
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!audioFile) return

    setLoading(true)
    setError(null)
    setMasteredUrl(null)

    try {
      const formData = new FormData()
      formData.append('audio', audioFile)

      const response = await fetch('/api/ai/mastering', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Erreur lors du mastering')
      }

      const data = await response.json()
      setMasteredUrl(data.masteredUrl)
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="audio" className="block mb-2 font-medium">
          Fichier audio à masteriser
        </label>
        <Input
          type="file"
          id="audio"
          accept="audio/*"
          onChange={handleFileChange}
          required
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Mastering en cours...' : 'Lancer le mastering'}
      </Button>

      {error && <p className="text-red-500">{error}</p>}

      {masteredUrl && (
        <div className="mt-6 text-center">
          <audio controls src={masteredUrl} className="mx-auto" />
          <p className="mt-2 text-sm text-gray-600">Mastering terminé</p>
        </div>
      )}
    </form>
  )
}