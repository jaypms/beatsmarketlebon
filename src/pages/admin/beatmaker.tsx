import React, { useState } from "react"
import BeatmakerUpload from "@/components/BeatmakerUpload"

interface UploadedFile {
  url: string
  originalName: string
}

export default function AdminBeatmakerPage() {
  // Exemple : licences que le beatmaker souhaite vendre
  const [licenses, setLicenses] = useState<string[]>(["mp3", "wav", "image"])
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [message, setMessage] = useState<string | null>(null)

  async function handleUploadSuccess(files: UploadedFile[]) {
    setMessage(null)
    setUploadedFiles(files)

    try {
      // Appeler une API pour sauvegarder les fichiers en base (exemple POST)
      const res = await fetch("/api/beatmaker/saveFiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        setMessage(`Erreur sauvegarde : ${errorData.error || "Erreur inconnue"}`)
        return
      }

      setMessage("Fichiers sauvegardés avec succès.")
    } catch (error) {
      setMessage("Erreur réseau lors de la sauvegarde.")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Administration Beatmaker - Gestion boutique</h1>
      <p>Licences choisies : {licenses.join(", ")}</p>

      <BeatmakerUpload licenses={licenses} onUploadSuccess={handleUploadSuccess} />

      {message && <p>{message}</p>}

      <h2>Fichiers uploadés :</h2>
      <ul>
        {uploadedFiles.map((file, idx) => (
          <li key={idx}>
            <a href={file.url} target="_blank" rel="noreferrer">
              {file.originalName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
