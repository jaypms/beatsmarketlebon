// Exemple simple de fonction upload fichier vers API

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  })

  if (!res.ok) {
    throw new Error("Erreur lors de l'upload du fichier")
  }

  // Retourne l'URL du fichier uploadé
  const data = await res.json()
  return data.url
}
