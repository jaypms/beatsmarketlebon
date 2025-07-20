import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import fs from "fs"
import path from "path"

// Désactive le body parser par défaut de Next.js pour gérer les fichiers
export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join(process.cwd(), "/public/uploads")

// Crée le dossier uploads s'il n'existe pas
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Méthode non autorisée" })
    return
  }

  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 60 * 1024 * 1024, // 60 Mo max par fichier
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Erreur lors du traitement du fichier" })
      return
    }

    const file = files.file
    if (!file) {
      res.status(400).json({ error: "Aucun fichier reçu" })
      return
    }

    // Dans le cas où plusieurs fichiers, on prend le premier
    const uploadedFile = Array.isArray(file) ? file[0] : file

    // URL publique relative au fichier
    const fileName = path.basename(uploadedFile.filepath)
    const fileUrl = `/uploads/${fileName}`

    res.status(200).json({ url: fileUrl })
  })
}
