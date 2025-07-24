import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../contexts/AuthContext";

export default function BeatmakerProfile() {
  const { userRole } = useAuth();

  return (
    <ProtectedRoute allowedRoles={["admin-beatmaker", "superadmin"]}>
      <main className="bg-[#1A1B1F] text-white min-h-screen px-8 py-12 max-w-5xl mx-auto font-['PT_Sans', 'Poppins']">
        <h1 className="text-3xl font-bold mb-8">Profil Beatmaker</h1>

        {/* Infos principales */}
        <section className="bg-[#27282D] rounded-lg p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Informations personnelles</h2>
          <p><strong>Nom :</strong> Jay Jay</p>
          <p><strong>Email :</strong> jayjay@example.com</p>
          <p><strong>Statut :</strong> Actif</p>
        </section>

        {/* Gestion des beats */}
        <section className="bg-[#27282D] rounded-lg p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mes beats</h2>
          <p>Liste des beats uploadés, statistiques de vente, options de modification.</p>
          {/* TODO: Table dynamique des beats */}
        </section>

        {/* Services IA */}
        <section className="bg-[#27282D] rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Services additionnels IA</h2>
          <p>Mastering IA, création de covers, distribution digitale.</p>
          {/* TODO: Intégrer formulaires et états */}
        </section>
      </main>
    </ProtectedRoute>
  );
}