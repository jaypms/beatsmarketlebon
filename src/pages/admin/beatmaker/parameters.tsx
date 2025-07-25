import { useState, useEffect } from "react";

export default function AdminBeatmakerParameters() {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [coverUrl, setCoverUrl] = useState<string>("");
  const [biography, setBiography] = useState<string>("");

  useEffect(() => {
    // TODO: fetch existing parameters from API
  }, []);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // TODO: upload logo and update state with URL
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // TODO: upload cover and update state with URL
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save parameters to API
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Paramètres de la Boutique</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Logo / Miniature</label>
          <input type="file" accept="image/*" onChange={handleLogoChange} />
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo boutique"
              className="mt-2 w-32 h-32 object-contain rounded-md border"
            />
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Photo de la Boutique</label>
          <input type="file" accept="image/*" onChange={handleCoverChange} />
          {coverUrl && (
            <img
              src={coverUrl}
              alt="Photo boutique"
              className="mt-2 w-full max-w-md rounded-md border object-cover"
            />
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Biographie / Description</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows={5}
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
            placeholder="Présentez votre boutique, votre univers, etc."
          />
        </div>
        <button type="submit" className="btn-primary">
          Enregistrer les paramètres
        </button>
      </form>
    </main>
  );
}