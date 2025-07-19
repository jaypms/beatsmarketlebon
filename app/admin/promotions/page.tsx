"use client"

import React, { useState } from "react"

type Promotion = {
  id: string
  name: string
  description: string
  active: boolean
  startDate: string
  endDate: string
  discountPercent: number
}

const initialPromotions: Promotion[] = [
  {
    id: "promo1",
    name: "Promo Été",
    description: "10% de réduction sur tous les beats premium",
    active: true,
    startDate: "2025-07-01",
    endDate: "2025-07-31",
    discountPercent: 10,
  },
  {
    id: "promo2",
    name: "Black Friday",
    description: "50% de réduction sur la boutique entière",
    active: false,
    startDate: "2024-11-25",
    endDate: "2024-11-30",
    discountPercent: 50,
  },
]

export default function AdminPromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions)
  const [form, setForm] = useState<Omit<Promotion, "id">>({
    name: "",
    description: "",
    active: false,
    startDate: "",
    endDate: "",
    discountPercent: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleAddPromotion = () => {
    const newPromotion: Promotion = {
      ...form,
      id: `promo${Date.now()}`,
    }
    setPromotions((prev) => [...prev, newPromotion])
    setForm({
      name: "",
      description: "",
      active: false,
      startDate: "",
      endDate: "",
      discountPercent: 0,
    })
  }

  return (
    <section className="min-h-screen bg-darkbg px-6 py-12 text-white font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">Gestion des Promotions</h1>

      {/* Formulaire de création */}
      <div className="bg-darkbg2 p-6 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Créer une nouvelle promotion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <input
            type="text"
            name="name"
            placeholder="Nom de la promotion"
            value={form.name}
            onChange={handleChange}
            className="bg-darkbg3 text-white p-2 rounded border border-gray-600"
          />
          <input
            type="number"
            name="discountPercent"
            placeholder="Pourcentage de réduction"
            value={form.discountPercent}
            onChange={handleChange}
            className="bg-darkbg3 text-white p-2 rounded border border-gray-600"
          />
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="bg-darkbg3 text-white p-2 rounded border border-gray-600"
          />
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="bg-darkbg3 text-white p-2 rounded border border-gray-600"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="bg-darkbg3 text-white p-2 rounded border border-gray-600 col-span-1 md:col-span-2"
          />
          <label className="flex items-center gap-2 col-span-1 md:col-span-2 text-white">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-primary"
            />
            Activer cette promotion
          </label>
        </div>
        <button
          onClick={handleAddPromotion}
          className="mt-4 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded"
        >
          Ajouter la promotion
        </button>
      </div>

      {/* Tableau des promotions */}
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-darkbg2 text-gray-300">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Début</th>
              <th className="px-4 py-3">Fin</th>
              <th className="px-4 py-3">Réduction</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo) => (
              <tr key={promo.id} className="border-t border-gray-700 hover:bg-darkbg2/50">
                <td className="px-4 py-3">{promo.name}</td>
                <td className="px-4 py-3">{promo.description}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      promo.active ? "bg-green-600" : "bg-gray-600"
                    }`}
                  >
                    {promo.active ? "Active" : "Inactif"}
                  </span>
                </td>
                <td className="px-4 py-3">{promo.startDate}</td>
                <td className="px-4 py-3">{promo.endDate}</td>
                <td className="px-4 py-3">{promo.discountPercent}%</td>
                <td className="px-4 py-3">
                  <button className="bg-primary px-3 py-1 rounded hover:bg-primary/80 text-sm font-semibold mr-2">
                    Éditer
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm font-semibold">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
