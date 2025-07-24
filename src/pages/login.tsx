import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const [role, setRole] = useState<string>("superadmin");
  const [error, setError] = useState<string>("");

  if (isAuthenticated) {
    router.replace("/admin/dashboard");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simule une connexion simple par rôle
    if (["superadmin", "admin-beatmaker", "admin-artiste"].includes(role)) {
      login(role as any);
      router.push("/admin/dashboard");
    } else {
      setError("Rôle invalide");
    }
  };

  return (
    <main className="min-h-screen bg-[#1A1B1F] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#27282D] p-8 rounded-lg max-w-sm w-full text-white font-['PT_Sans']"
      >
        <h1 className="text-3xl font-bold mb-6 font-['Poppins'] text-center">
          Connexion Admin
        </h1>

        <label htmlFor="role" className="block mb-2 font-semibold">
          Sélectionnez votre rôle
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 rounded-md bg-[#1A1B1F] border border-gray-600 px-3 py-2"
        >
          <option value="superadmin">SuperAdmin</option>
          <option value="admin-beatmaker">Admin Beatmaker</option>
          <option value="admin-artiste">Admin Artiste</option>
        </select>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 py-3 rounded font-semibold transition-colors"
        >
          Se connecter
        </button>
      </form>
    </main>
  );
}