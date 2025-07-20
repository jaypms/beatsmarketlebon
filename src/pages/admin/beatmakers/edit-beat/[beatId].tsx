import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

type License = {
  id: string;
  name: string;
  description: string;
  basePrice: number; // prix conseillé ou par défaut
};

type LicenseWithPrice = License & {
  price: number | "";
  netGain: number;
};

const LICENSES: License[] = [
  {
    id: "basique_mp3",
    name: "Licence Basique MP3",
    description: "Licence non exclusive, fichiers MP3 inclus",
    basePrice: 20,
  },
  {
    id: "premium_wav",
    name: "Licence Premium WAV",
    description: "Licence non exclusive, fichiers WAV inclus",
    basePrice: 50,
  },
  {
    id: "exclusive",
    name: "Licence Exclusive",
    description: "Licence exclusive, droits totaux cédés",
    basePrice: 200,
  },
  {
    id: "exclusive_stems",
    name: "Licence Exclusive + Stems",
    description: "Licence exclusive avec pistes multipistes (stems)",
    basePrice: 300,
  },
];

const COMMISSION_RATE = 0.15; // 15%
const TVA_RATE = 0.20; // 20%

export default function EditBeat() {
  const router = useRouter();
  const { beatId } = router.query;

  const [licenses, setLicenses] = useState<LicenseWithPrice[]>([]);

  useEffect(() => {
    // Initialiser avec basePrice, prix vide, netGain 0
    const initLicenses = LICENSES.map((lic) => ({
      ...lic,
      price: "",
      netGain: 0,
    }));
    setLicenses(initLicenses);
  }, []);

  const handlePriceChange = (id: string, value: string) => {
    const priceNum = parseFloat(value);
    setLicenses((prev) =>
      prev.map((lic) => {
        if (lic.id === id) {
          const validPrice = !isNaN(priceNum) && priceNum >= 0 ? priceNum : "";
          const netGain =
            typeof validPrice === "number"
              ? validPrice * (1 - COMMISSION_RATE) / (1 + TVA_RATE)
              : 0;
          return { ...lic, price: validPrice, netGain };
        }
        return lic;
      })
    );
  };

  const handleSave = () => {
    // Ici tu peux appeler API pour sauvegarder les prix des licences
    alert("Prix des licences sauvegardés (simulation) !");
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Édition du Beat {beatId}</h1>

      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border border-gray-700">Licence</th>
            <th className="p-3 border border-gray-700">Description</th>
            <th className="p-3 border border-gray-700">Prix (€)</th>
            <th className="p-3 border border-gray-700">Gains nets estimés (€)</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map(({ id, name, description, price, netGain }) => (
            <tr key={id} className="hover:bg-gray-800">
              <td className="p-3 border border-gray-700 font-semibold">{name}</td>
              <td className="p-3 border border-gray-700">{description}</td>
              <td className="p-3 border border-gray-700">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={price === "" ? "" : price}
                  onChange={(e) => handlePriceChange(id, e.target.value)}
                  className="bg-gray-700 text-gray-100 rounded px-2 py-1 w-24"
                />
              </td>
              <td className="p-3 border border-gray-700 text-right">
                {netGain > 0 ? netGain.toFixed(2) : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white font-bold"
        >
          Sauvegarder les prix
        </button>
      </div>
    </div>
  );
}
