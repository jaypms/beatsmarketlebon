import React, { useState, useEffect } from "react";

type Status = "actif" | "suspendu" | "en attente";

interface UserFormProps {
  initialData?: {
    name: string;
    email: string;
    status: Status;
  };
  onSubmit: (data: { name: string; email: string; status: Status }) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function UserForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Enregistrer",
}: UserFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [status, setStatus] = useState<Status>(initialData?.status || "en attente");

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    setName(initialData?.name || "");
    setEmail(initialData?.email || "");
    setStatus(initialData?.status || "en attente");
  }, [initialData]);

  function validate() {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Le nom est requis.";
    if (!email.trim()) newErrors.email = "L’email est requis.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email invalide.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name: name.trim(), email: email.trim(), status });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white font-['PT_Sans', 'Poppins']">
      <div>
        <label htmlFor="name" className="block mb-1 font-semibold">
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full rounded px-3 py-2 bg-[#1A1B1F] border ${
            errors.name ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:border-pink-500 transition-colors`}
          autoFocus
          required
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
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
          className={`w-full rounded px-3 py-2 bg-[#1A1B1F] border ${
            errors.email ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:border-pink-500 transition-colors`}
          required
        />
        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="status" className="block mb-1 font-semibold">
          Statut
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
          className="w-full rounded px-3 py-2 bg-[#1A1B1F] border border-gray-600 focus:outline-none focus:border-pink-500 transition-colors"
          required
        >
          <option value="actif">Actif</option>
          <option value="en attente">En attente</option>
          <option value="suspendu">Suspendu</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white font-semibold transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}