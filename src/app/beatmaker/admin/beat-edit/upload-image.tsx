"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { uploadFile } from "@/lib/api/upload"

interface UploadImageProps {
  onUploadComplete: (url: string) => void
}

export function UploadImage({ onUploadComplete }: UploadImageProps) {
  const [uploading, setUploading] = useState(false)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return
    const file = e.target.files[0]
    setUploading(true)
    try {
      const url = await uploadFile(file)
      onUploadComplete(url)
    } catch {
      alert("Erreur lors de l'upload de l'image.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="upload-image-input"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-image-input">
        <Button disabled={uploading}>{uploading ? "Upload..." : "Uploader une image"}</Button>
      </label>
    </div>
  )
}
