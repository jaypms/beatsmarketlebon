import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface UserFormProps {
  initialValues?: {
    name: string;
    email: string;
    status: "actif" | "suspendu" | "en_attente";
  };
  onSubmit: (data: { name: string; email: string; status: string }) => void;
  onCancel: () => void;
}

export default function UserForm({
  initialValues,
  onSubmit,
  onCancel,
}: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("actif");

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name);
      setEmail(initialValues.email);
      setStatus(initialValues.status);
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Nom</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Statut</Label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full bg-zinc-800 text-white p-2 rounded-lg"
        >
          <option value="actif">Actif</option>
          <option value="suspendu">Suspendu</option>
          <option value="en_attente">En attente</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">Enregistrer</Button>
      </div>
    </form>
  );
}