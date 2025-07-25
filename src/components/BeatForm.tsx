import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface BeatFormProps {
  beat?: {
    id: string;
    title: string;
    price: number;
    licenses: string[];
    coverUrl?: string;
    status: "actif" | "suspendu";
  };
  onSave: (beat: any) => void;
  onCancel: () => void;
}

export function BeatForm({ beat, onSave, onCancel }: BeatFormProps) {
  const [title, setTitle] = useState(beat?.title || "");
  const [price, setPrice] = useState(beat?.price || 0);
  const [licenses, setLicenses] = useState<string[]>(beat?.licenses || []);
  const [status, setStatus] = useState<"actif" | "suspendu">(beat?.status || "actif");

  const toggleLicense = (license: string) => {
    setLicenses((prev) =>
      prev.includes(license) ? prev.filter((l) => l !== license) : [...prev, license]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = beat?.id || Math.random().toString(36).substring(2, 9);
    onSave({ id, title, price, licenses, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block font-semibold mb-1">Titre du beat</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Prix (€)</label>
        <input
          type="number"
          min={0}
          step={0.01}
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Licences disponibles</label>
        <div className="flex flex-wrap gap-2">
          {["Basique MP3", "Premium WAV", "Exclusive", "Exclusive + Stems"].map((license) => (
            <label key={license} className="inline-flex items-center space-x-1">
              <input
                type="checkbox"
                checked={licenses.includes(license)}
                onChange={() => toggleLicense(license)}
              />
              <span>{license}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-1">Statut</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "actif" | "suspendu")}
          className="w-full border rounded px-2 py-1"
        >
          <option value="actif">Actif</option>
          <option value="suspendu">Suspendu</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">Enregistrer</Button>
      </div>
    </form>
  );
}