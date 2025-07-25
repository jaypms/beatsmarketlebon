import React, { useState, useEffect } from "react";
import { Button, Input, Textarea } from "../../components/ui";

const ParametersPage: React.FC = () => {
  const [bio, setBio] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  useEffect(() => {
    // Fetch current parameters from API or local storage
    // setBio(...);
    // setLogo(...);
    // setCoverImage(...);
  }, []);

  const handleSave = () => {
    // Handle saving parameters (bio, logo, coverImage)
    // API call or local storage update
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Paramètres de la boutique</h1>

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Biographie</span>
        <Textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Présentez-vous et votre musique"
          rows={5}
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Logo / Miniature</span>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)}
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Photo de la boutique</span>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setCoverImage(e.target.files ? e.target.files[0] : null)
          }
        />
      </label>

      <Button onClick={handleSave}>Sauvegarder</Button>
    </div>
  );
};

export default ParametersPage;