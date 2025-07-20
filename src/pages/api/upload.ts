import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import fs from "fs"
import path from "path"

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join(process.cwd(), "/public/uploads")

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const allowedMimeTypesByLicense: Record<string, string[]> = {
  mp3: ["audio/mpeg"],
  wav: ["audio/wav", "audio/x-wav"],
  stems: ["audio/wav", "audio/x-wav"],
  image: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
}

const maxFileSizeByLicense: Record<string, number> = {
  mp3: 20 * 1024 * 1024,   // 20 Mo
  wav: 60 * 1024 * 1024,   // 60 Mo
  stems: 60 * 1024 * 1024, // 60 Mo par stem
  image: 10 * 1024 * 1024, // 10 Mo max pour images
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Méthode non autorisée" })
    return
  }

  // Les licences attendues doivent être envoyées en query param sous forme CSV, ex : ?licenses=mp3,wav,image
  const licensesQuery = req.query.licenses
  let licenses: string[] = []
  if (typeof licensesQuery === "string") {
    licenses = licensesQuery.split(",").map(l => l.trim().toLowerCase())
  } else if (Array.isArray(licensesQuery)) {
    licenses = licensesQuery.flatMap(l => l.split(",").map(s => s.trim().toLowerCase()))
  }

  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: Math.max(...Object.values(maxFileSizeByLicense)), // max taille la plus grande possible
    multiples: true,
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Erreur lors du traitement du fichier" })
      return
    }

    const uploadedFiles = files.file
    if (!uploadedFiles) {
      res.status(400).json({ error: "Aucun fichier reçu" })
      return
    }

    const fileArray = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles]
    const savedFiles: { url: string; originalName: string }[] = []

    for (const file of fileArray) {
      // Validation mime type selon licences
      const isValidType = licenses.some(lic => {
        const allowedMimes = allowedMimeTypesByLicense[lic] || []
        return allowedMimes.includes(file.mimetype || "")
      })
      if (!isValidType) {
        // Supprime fichier temporaire
        fs.unlinkSync(file.filepath)
        return res.status(400).json({ error: `Type de fichier non autorisé: ${file.originalFilename}` })
      }

      // Validation taille selon licences (plus stricte)
      let maxAllowedSize = 0
      licenses.forEach(lic => {
        const size = maxFileSizeByLicense[lic] || 0
        if (size > maxAllowedSize) maxAllowedSize = size
      })
      if (file.size > maxAllowedSize) {
        fs.unlinkSync(file.filepath)
        return res.status(400).json({ error: `Fichier trop volumineux: ${file.originalFilename}` })
      }

      // Déplace le fichier vers /public/uploads
      const newFileName = `${Date.now()}-${file.originalFilename}`
      const newPath = path.join(uploadDir, newFileName)
      fs.renameSync(file.filepath, newPath)

      savedFiles.push({ url: `/uploads/${newFileName}`, originalName: file.originalFilename || "" })
    }

    return res.status(200).json({ files: savedFiles })
  })
}
