"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ParametersPage() {
  const [logoUrl, setLogoUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    // Fetch current user settings (stub)
    setLogoUrl("/default-logo.png");
    setCoverUrl("/default-cover.png");
    setBiography("Votre biographie ici...");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save parameters API call here
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Paramètres de la Boutique</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="logo" className="block mb-2 font-semibold">
            URL du Logo
          </label>
          <Input
            id="logo"
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            placeholder="https://exemple.com/logo.png"
          />
        </div>
        <div>
          <label htmlFor="cover" className="block mb-2 font-semibold">
            URL de la Photo de Couverture
          </label>
          <Input
            id="cover"
            type="text"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            placeholder="https://exemple.com/cover.png"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block mb-2 font-semibold">
            Biographie
          </label>
          <Textarea
            id="bio"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            rows={5}
            placeholder="Parlez de vous..."
          />
        </div>
        <Button type="submit">Sauvegarder</Button>
      </form>
    </div>
  );
}