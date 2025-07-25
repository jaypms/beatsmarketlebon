"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  const [logoUrl, setLogoUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    // Fetch current settings from API or context
    const fetchSettings = async () => {
      // Stub data, replace with real fetch
      const settings = {
        logoUrl: "/images/default-logo.png",
        coverUrl: "/images/default-cover.jpg",
        biography: "Beatmaker passionné depuis 2010, spécialisé en trap et hip-hop.",
      };
      setLogoUrl(settings.logoUrl);
      setCoverUrl(settings.coverUrl);
      setBiography(settings.biography);
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    // Save settings via API call
    // Example stub
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Paramètres de la boutique</h1>

      <div className="mb-4">
        <label htmlFor="logo" className="block mb-2 font-semibold">
          URL du logo
        </label>
        <Input
          id="logo"
          type="text"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
          placeholder="Entrez l'URL de votre logo"
        />
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo preview"
            className="mt-2 h-20 w-auto object-contain rounded border"
          />
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="cover" className="block mb-2 font-semibold">
          URL de la photo de couverture
        </label>
        <Input
          id="cover"
          type="text"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
          placeholder="Entrez l'URL de votre photo de couverture"
        />
        {coverUrl && (
          <img
            src={coverUrl}
            alt="Couverture preview"
            className="mt-2 h-32 w-full object-cover rounded border"
          />
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="biography" className="block mb-2 font-semibold">
          Biographie
        </label>
        <Textarea
          id="biography"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          rows={5}
          placeholder="Parlez un peu de vous..."
        />
      </div>

      <Button onClick={handleSave}>Sauvegarder</Button>
    </div>
  );
}