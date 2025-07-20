import type { NextApiRequest, NextApiResponse } from "next"

// Exemple simple de sauvegarde en "base de données" simulée
// Dans un vrai projet, ici tu ferais l'insertion dans ta vraie base (MySQL, MongoDB, etc.)

type Data = {
  success: boolean
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Méthode non autorisée" })
  }

  try {
    const { files } = req.body

    if (!Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ success: false, error: "Aucun fichier fourni" })
    }

    // TODO : ici tu insères les fichiers en base pour le beatmaker connecté
    // Exemple fictif : console.log des fichiers reçus
    console.log("Fichiers reçus à sauvegarder :", files)

    // Simuler une sauvegarde réussie
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ success: false, error: "Erreur serveur" })
  }
}
