"use client";

import React from "react";
import { licenses } from "./data";

export function Licenses() {
  return (
    <section className="text-white max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Licences proposées</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {licenses.map((license) => (
          <div
            key={license.name}
            className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{license.name}</h3>
            <p className="mb-2">
              <strong>Cible :</strong> {license.target}
            </p>
            <p className="mb-2">
              <strong>Fichiers fournis :</strong> {license.files}
            </p>
            <p>
              <strong>Droits :</strong> {license.rights}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
