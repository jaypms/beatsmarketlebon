'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function BeatEditPage() {
  const { beatId } = useParams() as { beatId: string }
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchBeat() {
      try {
        const res = await fetch(`/api/beatmaker/beats/${beatId}`)
        if (!res.ok) throw new Error('Erreur lors du chargement du beat')
        const data = await res.json()
        setTitle(data.title)
        setDescription(data.description)
      } catch (err) {
        toast.error('Impossible de charger le beat')
        console.error(err)
      }
    }

    if (beatId) fetchBeat()
  }, [beatId])

  async function handleSave() {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/beatmaker/beats/${beatId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })

      if (!res.ok) throw new Error('Échec de la mise à jour')

      toast.success('Beat mis à jour avec succès')
    } catch (err) {
      toast.error('Erreur lors de la mise à jour')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Modifier le beat</h1>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Titre</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
      </div>
    </div>
  )
}
