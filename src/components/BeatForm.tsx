import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectItem } from "./ui/select";

interface BeatFormProps {
  beat: {
    id?: string;
    title: string;
    price: number;
    licenses: string[];
    status: string;
  } | null;
  onSave: (beat: {
    id?: string;
    title: string;
    price: number;
    licenses: string[];
    status: string;
  }) => void;
  onCancel: () => void;
}

const licenseOptions = [
  "Basique MP3",
  "Premium WAV",
  "Exclusive",
  "Exclusive Multipistes",
];

export const BeatForm: React.FC<BeatFormProps> = ({ beat, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [licenses, setLicenses] = useState<string[]>([]);
  const [status, setStatus] = useState("actif");

  useEffect(() => {
    if (beat) {
      setTitle(beat.title);
      setPrice(beat.price);
      setLicenses(beat.licenses);
      setStatus(beat.status);
    } else {
      setTitle("");
      setPrice(0);
      setLicenses([]);
      setStatus("actif");
    }
  }, [beat]);

  function toggleLicense(license: string) {
    setLicenses((prev) =>
      prev.includes(license)
        ? prev.filter((l) => l !== license)
        : [...prev, license]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (title.trim() === "" || price <= 0) {
      alert("Veuillez remplir le titre et le prix correctement.");
      return;
    }
    onSave({ id: beat?.id, title, price, licenses, status });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label htmlFor="title" className="block font-medium mb-1">
          Titre du Beat
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de votre beat"
          required
        />
      </div>
      <div>
        <label htmlFor="price" className="block font-medium mb-1">
          Prix (€)
        </label>
        <Input
          id="price"
          type="number"
          min={1}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Licences à vendre</label>
        <div className="flex flex-wrap gap-2">
          {licenseOptions.map((license) => (
            <label
              key={license}
              className={`cursor-pointer rounded border px-3 py-1 ${
                licenses.includes(license)
                  ? "bg-pink-600 text-white border-pink-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={licenses.includes(license)}
                onChange={() => toggleLicense(license)}
              />
              {license}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="status" className="block font-medium mb-1">
          Statut
        </label>
        <Select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <SelectItem value="actif">Actif</SelectItem>
          <SelectItem value="suspendu">Suspendu</SelectItem>
          <SelectItem value="en_attente">En attente</SelectItem>
        </Select>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">Enregistrer</Button>
      </div>
    </form>
  );
};