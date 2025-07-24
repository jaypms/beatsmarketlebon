import React, { useState, useEffect } from "react";

interface Beatmaker {
  id?: number;
  name: string;
  email: string;
  status: "actif" | "suspendu" | "en attente";
  beatsCount?: number;
}

interface BeatmakerFormProps {
  initialData?: Beatmaker;
  onSubmit: (data: Beatmaker) => void;
  onCancel: () => void;
}

const statusOptions = ["actif", "suspendu", "en attente"] as const;

export default function BeatmakerForm({ initialData, onSubmit, onCancel }: BeatmakerFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [status, setStatus] = useState<Beatmaker["status"]>(initialData?.status || "actif");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setStatus(initialData.status);
    }
  }, [initialData]);

  function validateEmail(email: string) {
    // Simple regex email validation
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Tous les champs sont requis.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Adresse email invalide.");
      return;
    }
    setError("");
    onSubmit({ id: initialData?.id, name: name.trim(), email: email.trim(), status });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white font-['PT_Sans']">
      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label htmlFor="name" className="block mb-1 font-semibold">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 focus:border-pink-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 focus:border-pink-500"
          required
        />
      </div>

      <div>
        <label htmlFor="status" className="block mb-1 font-semibold">
          Statut
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Beatmaker["status"])}
          className="w-full px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 focus:border-pink-500"
        >
          {statusOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white transition-colors"
        >
          {initialData ? "Modifier" : "Ajouter"}
        </button>
      </div>
    </form>
  );
}