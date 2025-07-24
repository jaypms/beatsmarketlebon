import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ActionsMenu from "@/components/ui/actions-menu";
import Modal from "@/components/ui/modal";
import UserForm from "@/components/forms/UserForm";

type Beatmaker = {
  id: string;
  name: string;
  email: string;
  status: "actif" | "suspendu" | "en_attente";
};

export default function AdminBeatmakersPage() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Beatmaker[]>([]);
  const [selected, setSelected] = useState<Beatmaker | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    setFiltered(
      beatmakers.filter(
        (b) =>
          b.name.toLowerCase().includes(search.toLowerCase()) ||
          b.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, beatmakers]);

  const openEditModal = (beatmaker: Beatmaker) => {
    setSelected(beatmaker);
    setShowEdit(true);
  };

  const openDeleteModal = (beatmaker: Beatmaker) => {
    setSelected(beatmaker);
    setShowDelete(true);
  };

  const toggleStatus = (beatmaker: Beatmaker) => {
    setBeatmakers((prev) =>
      prev.map((b) =>
        b.id === beatmaker.id
          ? {
              ...b,
              status: b.status === "actif" ? "suspendu" : "actif",
            }
          : b
      )
    );
  };

  const handleAdd = (data: { name: string; email: string; status: string }) => {
    const newBeatmaker: Beatmaker = {
      id: crypto.randomUUID(),
      ...data,
      status: data.status as "actif" | "suspendu" | "en_attente",
    };
    setBeatmakers((prev) => [...prev, newBeatmaker]);
    setShowAdd(false);
  };

  const handleEdit = (data: { name: string; email: string; status: string }) => {
    if (!selected) return;
    setBeatmakers((prev) =>
      prev.map((b) =>
        b.id === selected.id ? { ...b, ...data } : b
      )
    );
    setShowEdit(false);
    setSelected(null);
  };

  const handleDelete = () => {
    if (!selected) return;
    setBeatmakers((prev) => prev.filter((b) => b.id !== selected.id));
    setShowDelete(false);
    setSelected(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Beatmakers</h1>
        <Button onClick={() => setShowAdd(true)}>Ajouter</Button>
      </div>

      <Input
        placeholder="Rechercher un beatmaker..."
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
              {filtered.map((beatmaker) => (
                <tr key={beatmaker.id} className="border-b border-zinc-800">
                  <td className="px-4 py-2">{beatmaker.name}</td>
                  <td className="px-4 py-2">{beatmaker.email}</td>
                  <td className="px-4 py-2">
                    <Badge
                      variant={
                        beatmaker.status === "actif"
                          ? "success"
                          : beatmaker.status === "suspendu"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {beatmaker.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <ActionsMenu
                      actions={[
                        {
                          label: "Modifier",
                          onClick: () => openEditModal(beatmaker),
                        },
                        {
                          label:
                            beatmaker.status === "actif"
                              ? "Suspendre"
                              : "Activer",
                          onClick: () => toggleStatus(beatmaker),
                        },
                        {
                          label: "Supprimer",
                          onClick: () => openDeleteModal(beatmaker),
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
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Ajouter un beatmaker">
        <UserForm onSubmit={handleAdd} onCancel={() => setShowAdd(false)} />
      </Modal>

      {/* Modal Modifier */}
      <Modal
        open={showEdit}
        onClose={() => {
          setShowEdit(false);
          setSelected(null);
        }}
        title="Modifier un beatmaker"
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
        title="Supprimer ce beatmaker ?"
        description="Cette action est irréversible. Toutes les données liées à ce beatmaker seront définitivement supprimées."
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