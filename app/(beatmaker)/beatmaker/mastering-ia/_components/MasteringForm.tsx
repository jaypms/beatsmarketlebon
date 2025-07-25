import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MasteringForm() {
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
    if (!file) return
    setProcessing(true)
    try {
      // Simuler appel API mastering IA
      await new Promise((r) => setTimeout(r, 3000))
      // Ici on aurait l'url du fichier masterisé
      setResultUrl('/downloads/mastered-sample.mp3')
    } catch (error) {
      alert('Erreur lors du mastering, veuillez réessayer.')
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
        type="file"
        accept=".mp3,.wav"
        onChange={handleFileChange}
        disabled={processing}
        required
      />
      <Button type="submit" disabled={!file || processing}>
        {processing ? 'Traitement...' : 'Lancer le mastering'}
      </Button>
      {resultUrl && (
        <div className="mt-4">
          <a href={resultUrl} download className="text-blue-500 underline">
            Télécharger le fichier masterisé
          </a>
        </div>
      )}
    </form>
  )
}