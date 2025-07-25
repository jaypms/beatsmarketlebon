import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function DistributionForm() {
  const [title, setTitle] = useState('')
  const [format, setFormat] = useState('single')
  const [file, setFile] = useState<File | null>(null)
  const [processing, setProcessing] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setMessage(null)
    }
  }

  const handleSubmit = async () => {
    if (!file || !title) return
    setProcessing(true)
    try {
      // Simuler appel API distribution
      await new Promise((r) => setTimeout(r, 3000))
      setMessage('Votre distribution a été prise en compte avec succès.')
    } catch (error) {
      setMessage('Erreur lors de la distribution, veuillez réessayer.')
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
        placeholder="Titre du single ou album"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={processing}
        required
      />
      <Select onValueChange={setFormat} value={format} disabled={processing}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sélectionnez un format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="single">Single</SelectItem>
          <SelectItem value="album">Album</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="file"
        accept=".mp3,.wav,.zip"
        onChange={handleFileChange}
        disabled={processing}
        required
      />
      <Button type="submit" disabled={!file || !title || processing}>
        {processing ? 'Traitement...' : 'Lancer la distribution'}
      </Button>
      {message && (
        <p className="mt-2 text-center text-green-600 dark:text-green-400">{message}</p>
      )}
    </form>
  )
}