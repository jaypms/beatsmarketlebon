import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../contexts/AuthContext";

export default function ArtistProfile() {
  const { userRole } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["admin-artiste", "superadmin"]}>
      <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-5xl mx-auto font-['PT_Sans', 'Poppins']">
        <h1 className="text-3xl font-bold mb-8">Profil Artiste</h1>

        {/* Infos principales */}
        <section className="bg-[#27282D] rounded-lg p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Informations personnelles</h2>
          <p><strong>Nom :</strong> Alice Dupont</p>
          <p><strong>Email :</strong> alice@example.com</p>
          <p><strong>Statut :</strong> Actif</p>
        </section>

        {/* Mes licences */}
        <section className="bg-[#27282D] rounded-lg p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mes licences de beats</h2>
          <p>Liste des licences achetées avec détails et accès aux fichiers.</p>
          {/* TODO: Table des licences */}
        </section>

        {/* Historique des achats */}
        <section className="bg-[#27282D] rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Historique des achats</h2>
          <p>Affichage des achats réalisés avec dates, prix, et détails.</p>
          {/* TODO: Liste ou tableau */}
        </section>
      </main>
    </ProtectedRoute>
  );
}