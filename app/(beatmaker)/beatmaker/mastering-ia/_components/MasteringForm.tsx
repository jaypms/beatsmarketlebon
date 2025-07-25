'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'

export function MasteringForm() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const selectedFile = e.target.files[0]
      // Vérification taille max 100 Mo
      if (selectedFile.size > 100 * 1024 * 1024) {
        toast.error('Le fichier dépasse la taille maximale de 100 Mo.')
        return
      }
      setFile(selectedFile)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file) {
      toast.error('Veuillez sélectionner un fichier audio.')
      return
    }
    setLoading(true)
    try {
      // Ici, appeler API backend pour traitement mastering IA
      await new Promise((res) => setTimeout(res, 2000)) // Simuler attente
      toast.success('Mastering réalisé avec succès !')
      setFile(null)
    } catch (error) {
      toast.error('Erreur lors du traitement.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="file">Fichier audio (WAV ou MP3, max 100 Mo)</Label>
        <Input
          type="file"
          id="file"
          accept=".wav,.mp3"
          onChange={handleFileChange}
          disabled={loading}
          required
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Traitement...' : 'Lancer le mastering'}
      </Button>
    </form>
  )
}