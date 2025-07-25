"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type LicenseType = "basique" | "premium" | "exclusive" | "exclusive_stems";

interface Beat {
  id: string;
  title: string;
  bpm: number;
  key: string;
  licenses: LicenseType[];
  status: "visible" | "masqué" | "brouillon";
  priceBasique?: number;
  pricePremium?: number;
  priceExclusive?: number;
  priceExclusiveStems?: number;
}

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // Fetch beats from API or mock data
    const fetchedBeats: Beat[] = [
      {
        id: "1",
        title: "Summer Vibes",
        bpm: 90,
        key: "Am",
        licenses: ["basique", "premium", "exclusive"],
        status: "visible",
        priceBasique: 29,
        pricePremium: 49,
        priceExclusive: 199,
      },
      {
        id: "2",
        title: "Night Drive",
        bpm: 75,
        key: "Cm",
        licenses: ["basique", "premium"],
        status: "brouillon",
        priceBasique: 19,
        pricePremium: 39,
      },
    ];
    setBeats(fetchedBeats);
  }, []);

  const statusColor = (status: string) => {
    switch (status) {
      case "visible":
        return "bg-green-100 text-green-800";
      case "masqué":
        return "bg-gray-100 text-gray-800";
      case "brouillon":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Gestion des Instrumentales</h1>
      <Button className="mb-4">Ajouter une Instrumentale</Button>
      <Table>
        <Thead>
          <Tr>
            <Th>Titre</Th>
            <Th>BPM</Th>
            <Th>Ton</Th>
            <Th>Licences</Th>
            <Th>Statut</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {beats.map((beat) => (
            <Tr key={beat.id}>
              <Td>{beat.title}</Td>
              <Td>{beat.bpm}</Td>
              <Td>{beat.key}</Td>
              <Td>
                {beat.licenses.map((lic) => (
                  <Badge
                    key={lic}
                    className="mr-1"
                    variant="outline"
                  >
                    {lic.charAt(0).toUpperCase() + lic.slice(1)}
                  </Badge>
                ))}
              </Td>
              <Td>
                <span className={`px-2 py-1 rounded ${statusColor(beat.status)}`}>
                  {beat.status.charAt(0).toUpperCase() + beat.status.slice(1)}
                </span>
              </Td>
              <Td>
                <Button variant="ghost" size="sm" className="mr-2">
                  Modifier
                </Button>
                <Button variant="destructive" size="sm">
                  Supprimer
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}