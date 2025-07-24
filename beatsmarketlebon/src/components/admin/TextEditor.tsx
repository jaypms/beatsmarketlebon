"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"

// Chargement dynamique pour éviter les problèmes côté serveur
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"

interface TextEditorProps {
  initialContent?: string
  onSave: (content: string) => void
}

export default function TextEditor({ initialContent = "", onSave }: TextEditorProps) {
  const [content, setContent] = useState(initialContent)

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button
        onClick={() => onSave(content)}
        className="mt-3 rounded bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
      >
        Sauvegarder
      </button>
    </div>
  )
}
