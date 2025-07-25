"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Beat = {
  id: string;
  title: string;
  priceBasic: number;
  pricePremium: number;
  priceExclusive: number;
  status: "active" | "inactive" | "draft";
  createdAt: string;
};

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // Fetch beats from API
    const fetchBeats = async () => {
      // Stub data for demo
      const data: Beat[] = [
        {
          id: "1",
          title: "Trap Beat 2025",
          priceBasic: 30,
          pricePremium: 50,
          priceExclusive: 200,
          status: "active",
          createdAt: "2025-07-20",
        },
        {
          id: "2",
          title: "Lo-fi Chill Vibes",
          priceBasic: 15,
          pricePremium: 25,
          priceExclusive: 150,
          status: "draft",
          createdAt: "2025-07-21",
        },
      ];
      setBeats(data);
    };
    fetchBeats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes Beats</h1>
        <Link href="/beatmaker/beats/add">
          <Button>Ajouter un Beat</Button>
        </Link>
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th>Titre</Th>
            <Th>Prix Basic (€)</Th>
            <Th>Prix Premium (€)</Th>
            <Th>Prix Exclusive (€)</Th>
            <Th>Statut</Th>
            <Th>Créé le</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {beats.map((beat) => (
            <Tr key={beat.id}>
              <Td>{beat.title}</Td>
              <Td>{beat.priceBasic}</Td>
              <Td>{beat.pricePremium}</Td>
              <Td>{beat.priceExclusive}</Td>
              <Td>
                <Badge
                  variant={
                    beat.status === "active"
                      ? "success"
                      : beat.status === "draft"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {beat.status === "active"
                    ? "Actif"
                    : beat.status === "draft"
                    ? "Brouillon"
                    : "Inactif"}
                </Badge>
              </Td>
              <Td>{new Date(beat.createdAt).toLocaleDateString("fr-FR")}</Td>
              <Td>
                <Link href={`/beatmaker/beats/edit/${beat.id}`}>
                  <Button size="sm" variant="outline" className="mr-2">
                    Modifier
                  </Button>
                </Link>
                <Button size="sm" variant="destructive">
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