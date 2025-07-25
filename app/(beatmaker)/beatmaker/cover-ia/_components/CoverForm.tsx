'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'

export function CoverForm() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const selectedFile = e.target.files[0]
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error('Le fichier image dépasse la taille maximale de 10 Mo.')
        return
      }
      setFile(selectedFile)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) {
      toast.error('Veuillez saisir un titre.')
      return
    }
    if (!file) {
      toast.error('Veuillez sélectionner un fichier image.')
      return
    }
    setLoading(true)
    try {
      // Appeler API backend pour générer cover IA
      await new Promise((res) => setTimeout(res, 2000)) // Simuler délai
      toast.success('Cover généré avec succès !')
      setTitle('')
      setFile(null)
    } catch {
      toast.error('Erreur lors de la génération du cover.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="title">Titre de l'instrumentale</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          required
          placeholder="Titre de votre beat"
        />
      </div>
      <div>
        <Label htmlFor="file">Image de base (facultatif)</Label>
        <Input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Génération en cours...' : 'Générer le cover IA'}
      </Button>
    </form>
  )
}