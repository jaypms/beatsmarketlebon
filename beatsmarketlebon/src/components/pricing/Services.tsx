"use client";

import React from "react";
import { services } from "./data";

export function Services() {
  return (
    <section className="text-white max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Services à la carte</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {service.prices.map((priceItem, idx) => {
                const label =
                  priceItem.duration ??
                  priceItem.formula ??
                  priceItem.type ??
                  priceItem.fee ??
                  "";
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
