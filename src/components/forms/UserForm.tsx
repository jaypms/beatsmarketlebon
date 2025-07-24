import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface UserFormProps {
  initialData?: {
    name: string;
    email: string;
    status: "actif" | "suspendu" | "en_attente";
  };
  onSubmit: (data: { name: string; email: string; status: string }) => void;
  onCancel: () => void;
}

export default function UserForm({ initialData, onSubmit, onCancel }: UserFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [status, setStatus] = useState(initialData?.status || "actif");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onSubmit({ name, email, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom complet"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adresse email"
          required
        />
      </div>

      <div>
        <Label htmlFor="status">Statut</Label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-md bg-zinc-800 text-white px-3 py-2"
        >
          <option value="actif">Actif</option>
          <option value="suspendu">Suspendu</option>
          <option value="en_attente">En attente</option>
        </select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">Enregistrer</Button>
      </div>
    </form>
  );
}