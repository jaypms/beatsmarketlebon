import React, { useState } from "react"

const allowedMimeTypesByLicense: Record<string, string[]> = {
  mp3: ["audio/mpeg"],
  wav: ["audio/wav", "audio/x-wav"],
  stems: ["audio/wav", "audio/x-wav"],
  image: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
}

interface Props {
  licenses: string[] // ex: ['mp3', 'wav', 'image']
  onUploadSuccess: (files: { url: string; originalName: string }[]) => void
}

export default function BeatmakerUpload({ licenses, onUploadSuccess }: Props) {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function checkFilesForLicenses(files: File[], licenses: string[]): boolean {
    const allowedMimes = licenses.flatMap(lic => allowedMimeTypesByLicense[lic] || [])
    return files.every(file => allowedMimes.includes(file.type))
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null)
    const files = e.target.files ? Array.from(e.target.files) : []
    if (!checkFilesForLicenses(files, licenses)) {
      setError("Le(s) fichier(s) ne correspondent pas aux licences choisies.")
      return
    }
    setLoading(true)

    try {
      const formData = new FormData()
      files.forEach(file => formData.append("file", file))

      // Envoie avec query licenses pour validation backend
      const res = await fetch(`/api/upload?licenses=${licenses.join(",")}`, {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'upload.")
      } else {
        onUploadSuccess(data.files)
      }
    } catch {
      setError("Erreur réseau pendant l'upload.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      {loading && <p>Upload en cours...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}
