import React, { useState, useEffect } from "react";
import { Button, Input, Textarea } from "../../components/ui";

const ParametersPage: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    // Charger les données existantes via API
    // setLogoUrl(...)
    // setCoverUrl(...)
    // setBiography(...)
  }, []);

  const handleSave = () => {
    // Sauvegarder les paramètres via API
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Paramètres de la boutique</h1>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Logo / Miniature</label>
        <Input
          type="url"
          placeholder="URL du logo"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Photo de la boutique</label>
        <Input
          type="url"
          placeholder="URL de la photo de couverture"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Biographie</label>
        <Textarea
          rows={5}
          placeholder="Écrivez une courte biographie"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
      </div>
      <Button onClick={handleSave}>Sauvegarder</Button>
    </div>
  );
};

export default ParametersPage;