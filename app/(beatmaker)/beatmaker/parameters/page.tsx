"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ParametersPage() {
  const [logoUrl, setLogoUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    // Ici on pourrait charger les données utilisateur via API
    setLogoUrl("https://example.com/logo.png");
    setBannerUrl("https://example.com/banner.png");
    setBiography("Biographie du beatmaker...");
  }, []);

  const handleSave = () => {
    // Appeler l'API pour sauvegarder les paramètres
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Paramètres de la boutique</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="mb-4">
          <Label htmlFor="logo" className="block mb-1 font-semibold">
            URL du logo
          </Label>
          <Input
            id="logo"
            type="url"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            placeholder="https://example.com/logo.png"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="banner" className="block mb-1 font-semibold">
            URL de la photo de la boutique
          </Label>
          <Input
            id="banner"
            type="url"
            value={bannerUrl}
            onChange={(e) => setBannerUrl(e.target.value)}
            placeholder="https://example.com/banner.png"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="biography" className="block mb-1 font-semibold">
            Biographie
          </Label>
          <Textarea
            id="biography"
            rows={5}
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            placeholder="Présentez-vous..."
          />
        </div>

        <Button type="submit">Sauvegarder</Button>
      </form>
    </div>
  );
}