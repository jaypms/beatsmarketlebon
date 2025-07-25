"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ParametersPage() {
  const [bio, setBio] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    // Charger les paramètres depuis l’API
    setBio("Votre biographie ici...");
    setLogoUrl("/images/default-logo.png");
    setCoverUrl("/images/default-cover.png");
  }, []);

  function handleSave() {
    // Sauvegarder les paramètres via API
    alert("Paramètres sauvegardés !");
  }

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setter(fileUrl);
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded shadow space-y-6">
      <h1 className="text-2xl font-bold">Paramètres de la boutique</h1>

      <div>
        <label className="block mb-2 font-semibold">Biographie</label>
        <textarea
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Présentez-vous et votre musique"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Logo / Miniature</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setLogoUrl)}
        />
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo boutique"
            className="mt-2 w-24 h-24 object-contain rounded"
          />
        )}
      </div>

      <div>
        <label className="block mb-2 font-semibold">Photo de la boutique</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setCoverUrl)}
        />
        {coverUrl && (
          <img
            src={coverUrl}
            alt="Photo boutique"
            className="mt-2 w-full max-w-md h-48 object-cover rounded"
          />
        )}
      </div>

      <Button onClick={handleSave}>Sauvegarder</Button>
    </div>
  );
}