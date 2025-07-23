"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  email: string;
  status: "active" | "pending" | "banned";
  createdAt: string;
}

const STATUS_BADGES = {
  active: "bg-green-600 text-white",
  pending: "bg-yellow-500 text-black",
  banned: "bg-red-600 text-white",
};

export default function AdminArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Mock fetch artists
    setArtists([
      { id: "1", name: "Alice", email: "alice@example.com", status: "active", createdAt: "2025-06-10" },
      { id: "2", name: "Bob", email: "bob@example.com", status: "pending", createdAt: "2025-06-15" },
      { id: "3", name: "Charlie", email: "charlie@example.com", status: "banned", createdAt: "2025-05-22" },
    ]);
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Confirmez-vous la suppression de cet artiste ? Cette action est irréversible.")) {
      setArtists((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <main className="pt-20 px-6 max-w-7xl mx-auto bg-[#121212] min-h-screen text-white font-poppins">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-pink-500">Gestion des Artistes</h1>
        <Button>Ajouter un artiste</Button>
      </div>

      <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-md">
        <table className="w-full table-auto text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="py-3 px-4">Nom</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Statut</th>
              <th className="py-3 px-4">Inscrit le</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map(({ id, name, email, status, createdAt }) => (
              <tr
                key={id}
                className="border-b border-gray-800 hover:bg-gray-800 transition"
              >
                <td className="py-3 px-4">{name}</td>
                <td className="py-3 px-4">{email}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${STATUS_BADGES[status]}`}>
                    {status.toUpperCase()}
                  </span>
                </td>
                <td className="py-3 px-4">{new Date(createdAt).toLocaleDateString()}</td>
                <td className="py-3 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-5 w-5" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => alert(`Modifier l'artiste ${name}`)}>
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(id)}>
                        Supprimer
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert(`Voir profil ${name}`)}>
                        Voir profil
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
            {artists.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Aucun artiste trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
