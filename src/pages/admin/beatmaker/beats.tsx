import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { BeatFormModal } from "@/components/beatmaker/BeatFormModal";
import { beatsMock } from "@/lib/mock/beats"; // temporaire pour test

export default function AdminBeatmakerBeats() {
  const [beats, setBeats] = useState(beatsMock);
  const [selectedBeat, setSelectedBeat] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    setSelectedBeat(null);
    setOpenModal(true);
  };

  const handleEdit = (beat: any) => {
    setSelectedBeat(beat);
    setOpenModal(true);
  };

  const handleDelete = (id: string) => {
    // TODO: API delete
    setBeats((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Mes Instrumentales</h1>
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un beat
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beats.map((beat) => (
          <div
            key={beat.id}
            className="border rounded-lg p-4 shadow bg-muted/50 flex flex-col"
          >
            <img
              src={beat.coverUrl || "/images/default-cover.jpg"}
              alt={beat.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold">{beat.title}</h2>
            <p className="text-sm text-gray-500">{beat.genre}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {beat.licenses.map((license: any) => (
                <Badge key={license.type} variant="outline">
                  {license.type} – {license.price} €
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="icon" onClick={() => handleEdit(beat)}>
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="destructive" size="icon" onClick={() => handleDelete(beat.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <BeatFormModal
        open={openModal}
        onOpenChange={setOpenModal}
        beat={selectedBeat}
        onSave={(newBeat) => {
          if (selectedBeat) {
            setBeats((prev) =>
              prev.map((b) => (b.id === newBeat.id ? newBeat : b))
            );
          } else {
            setBeats((prev) => [...prev, newBeat]);
          }
        }}
      />
    </main>
  );
}