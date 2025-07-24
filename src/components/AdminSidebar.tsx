import React from "react";
import Link from "next/link";
import {
  Grid,
  Users,
  Music,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="bg-[#121217] text-gray-300 w-64 min-h-screen flex flex-col p-6">
      <h2 className="text-white text-2xl font-bold mb-8 font-['Poppins']">Admin Panel</h2>

      <nav className="flex flex-col space-y-4">
        <Link href="/admin/dashboard">
          <a className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
            <Grid className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </Link>

        <Link href="/admin/artists">
          <a className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
            <Users className="w-5 h-5" />
            <span>Artistes</span>
          </a>
        </Link>

        <Link href="/admin/beatmakers">
          <a className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
            <Music className="w-5 h-5" />
            <span>Beatmakers</span>
          </a>
        </Link>

        <Link href="/admin/settings">
          <a className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Paramètres</span>
          </a>
        </Link>

        <button
          type="button"
          className="flex items-center space-x-3 mt-auto text-gray-400 hover:text-pink-500 transition-colors"
          onClick={() => {
            /* fonction déconnexion */
          }}
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </nav>
    </aside>
  );
}