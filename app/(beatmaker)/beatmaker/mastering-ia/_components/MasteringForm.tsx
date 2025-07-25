import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function MasteringForm() {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file) {
      setMessage('Veuillez sélectionner un fichier audio.')
      return
    }
    setLoading(true)
    setMessage('')
    try {
      // Appel API pour envoyer le fichier à mastering IA (mock)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setMessage('Votre demande de mastering IA a été envoyée avec succès.')
      setFile(null)
      setEmail('')
    } catch (error) {
      setMessage('Erreur lors de l’envoi, veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="email">Adresse e-mail de contact</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemple@domaine.com"
        />
      </div>
      <div>
        <Label htmlFor="file">Fichier audio à masteriser (WAV, max 60 Mo)</Label>
        <Input
          id="file"
          type="file"
          accept=".wav,.mp3"
          required
          onChange={handleFileChange}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Envoi en cours...' : 'Envoyer pour mastering'}
      </Button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  )
}