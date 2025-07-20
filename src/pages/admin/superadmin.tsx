import React, { useState } from "react";

export default function SuperAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-gray-800 transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h1 className="text-xl font-bold">SuperAdmin</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <a
            href="/admin/superadmin"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="/admin/beatmakers"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Beatmakers
          </a>
          <a
            href="/admin/artists"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Artistes
          </a>
          <a
            href="/admin/settings"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Paramètres
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-gray-800 px-6 py-4 border-b border-gray-700">
          <h2 className="text-2xl font-semibold">Tableau de bord SuperAdmin</h2>
          <button className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-700">
            Déconnexion
          </button>
        </header>

        {/* Content */}
        <section className="flex-1 p-6 overflow-auto">
          <p>Bienvenue dans l’interface SuperAdmin de BeatsMarket.</p>
          {/* Ici on intégrera plus tard l’assistant IA et les widgets */}
        </section>
      </main>
    </div>
  );
}
