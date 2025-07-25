import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function CoverForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [processing, setProcessing] = useState(false)
  const [resultUrl, setResultUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setResultUrl(null)
    }
  }

  const handleSubmit = async () => {
    if (!file || !title) return
    setProcessing(true)
    try {
      // Simuler appel API cover IA
      await new Promise((r) => setTimeout(r, 3000))
      // Ici on aurait l'url du cover généré
      setResultUrl('/downloads/cover-sample.png')
    } catch (error) {
      alert('Erreur lors de la génération du cover, veuillez réessayer.')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}
      className="space-y-4 max-w-lg"
    >
      <Input
        placeholder="Titre de l'instrumentale"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={processing}
        required
      />
      <Textarea
        placeholder="Description (optionnelle)"
        value={description}
        onChange={e => setDescription(e.target.value)}
        disabled={processing}
        rows={3}
      />
      <Input
        type="file"
        accept=".jpg,.png"
        onChange={handleFileChange}
        disabled={processing}
        required
      />
      <Button type="submit" disabled={!file || !title || processing}>
        {processing ? 'Création en cours...' : 'Créer le cover'}
      </Button>
      {resultUrl && (
        <div className="mt-4">
          <a href={resultUrl} download className="text-blue-500 underline">
            Télécharger le cover
          </a>
        </div>
      )}
    </form>
  )
}