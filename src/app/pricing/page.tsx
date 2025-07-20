"use client";

import React from "react";
import { PricingPlans } from "@/components/pricing/Plans";
import { licenses, services } from "@/components/pricing/data";

function Licenses() {
  return (
    <section className="text-white max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Licences proposées</h2>
      <div className="space-y-8">
        {licenses.map((license) => (
          <div
            key={license.name}
            className="bg-white/10 rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-2">{license.name}</h3>
            <p>
              <strong>Cible :</strong> {license.target}
            </p>
            <p>
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

function Services() {
  return (
    <section className="text-white max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Services à la carte</h2>
      <div className="space-y-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white/10 rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {service.prices.map((priceItem, idx) => {
                const label =
                  priceItem.duration ?? priceItem.formula ?? priceItem.type ?? priceItem.fee ?? "";
                return (
                  <li key={idx}>
                    <strong>{label} :</strong> {priceItem.price}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-[#111] min-h-screen pb-16">
      <h1 className="text-center text-5xl font-extrabold text-white pt-12 pb-8">
        Tarifs et Offres
      </h1>

      <PricingPlans />
      <Licenses />
      <Services />
    </main>
  );
}
