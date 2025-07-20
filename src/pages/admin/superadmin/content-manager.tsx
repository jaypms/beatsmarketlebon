import React, { useEffect, useState } from "react";

type PageContent = {
  id: string;
  page: string;
  section: string;
  content: string; // Markdown ou HTML simple
};

export default function ContentManager() {
  const [contents, setContents] = useState<PageContent[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  useEffect(() => {
    // Simuler fetch contenu pages
    setContents([
      { id: "1", page: "Accueil", section: "Titre principal", content: "Bienvenue sur BeatsMarket" },
      { id: "2", page: "Accueil", section: "Sous-titre", content: "Le meilleur marché de beats" },
      { id: "3", page: "À propos", section: "Présentation", content: "Notre mission est de ..." },
    ]);
  }, []);

  const startEdit = (id: string, currentContent: string) => {
    setEditingId(id);
    setEditContent(currentContent);
  };

  const saveEdit = () => {
    if (!editingId) return;
    setContents((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, content: editContent } : item
      )
    );
    setEditingId(null);
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gestionnaire de contenu</h1>

      {contents.map(({ id, page, section, content }) => (
        <div key={id} className="mb-6 p-4 bg-gray-800 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{page} — {section}</h2>
          {editingId === id ? (
            <>
              <textarea
                className="w-full h-24 p-2 rounded bg-gray-700 text-gray-100"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <div className="mt-2">
                <button
                  onClick={saveEdit}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded mr-2"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                >
                  Annuler
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-2 whitespace-pre-wrap">{content}</div>
              <button
                onClick={() => startEdit(id, content)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded"
              >
                Modifier
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
