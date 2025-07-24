import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ActionsMenu from "@/components/ui/actions-menu";
import Modal from "@/components/ui/modal";
import UserForm from "@/components/forms/UserForm";

type Artist = {
  id: string;
  name: string;
  email: string;
  status: "actif" | "suspendu" | "en_attente";
};

export default function AdminArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Artist[]>([]);
  const [selected, setSelected] = useState<Artist | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    setFiltered(
      artists.filter(
        (a) =>
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, artists]);

  const openEditModal = (artist: Artist) => {
    setSelected(artist);
    setShowEdit(true);
  };

  const openDeleteModal = (artist: Artist) => {
    setSelected(artist);
    setShowDelete(true);
  };

  const toggleStatus = (artist: Artist) => {
    setArtists((prev) =>
      prev.map((a) =>
        a.id === artist.id
          ? {
              ...a,
              status: a.status === "actif" ? "suspendu" : "actif",
            }
          : a
      )
    );
  };

  const handleAdd = (data: { name: string; email: string; status: string }) => {
    const newArtist: Artist = {
      id: crypto.randomUUID(),
      ...data,
      status: data.status as "actif" | "suspendu" | "en_attente",
    };
    setArtists((prev) => [...prev, newArtist]);
    setShowAdd(false);
  };

  const handleEdit = (data: { name: string; email: string; status: string }) => {
    if (!selected) return;
    setArtists((prev) =>
      prev.map((a) =>
        a.id === selected.id ? { ...a, ...data } : a
      )
    );
    setShowEdit(false);
    setSelected(null);
  };

  const handleDelete = () => {
    if (!selected) return;
    setArtists((prev) => prev.filter((a) => a.id !== selected.id));
    setShowDelete(false);
    setSelected(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Artistes</h1>
        <Button onClick={() => setShowAdd(true)}>Ajouter</Button>
      </div>

      <Input
        placeholder="Rechercher un artiste..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Statut</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((artist) => (
                <tr key={artist.id} className="border-b border-zinc-800">
                  <td className="px-4 py-2">{artist.name}</td>
                  <td className="px-4 py-2">{artist.email}</td>
                  <td className="px-4 py-2">
                    <Badge
                      variant={
                        artist.status === "actif"
                          ? "success"
                          : artist.status === "suspendu"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {artist.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <ActionsMenu
                      actions={[
                        {
                          label: "Modifier",
                          onClick: () => openEditModal(artist),
                        },
                        {
                          label:
                            artist.status === "actif"
                              ? "Suspendre"
                              : "Activer",
                          onClick: () => toggleStatus(artist),
                        },
                        {
                          label: "Supprimer",
                          onClick: () => openDeleteModal(artist),
                          color: "text-red-500",
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Modal Ajouter */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Ajouter un artiste">
        <UserForm onSubmit={handleAdd} onCancel={() => setShowAdd(false)} />
      </Modal>

      {/* Modal Modifier */}
      <Modal
        open={showEdit}
        onClose={() => {
          setShowEdit(false);
          setSelected(null);
        }}
        title="Modifier un artiste"
      >
        {selected && (
          <UserForm
            initialValues={selected}
            onSubmit={handleEdit}
            onCancel={() => {
              setShowEdit(false);
              setSelected(null);
            }}
          />
        )}
      </Modal>

      {/* Modal Supprimer */}
      <Modal
        open={showDelete}
        onClose={() => {
          setShowDelete(false);
          setSelected(null);
        }}
        title="Supprimer cet artiste ?"
        description="Cette action est irréversible. Toutes les données liées à cet artiste seront définitivement supprimées."
        footer={
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setShowDelete(false);
                setSelected(null);
              }}
            >
              Annuler
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </div>
        }
      />
    </div>
  );
}