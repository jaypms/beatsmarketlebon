"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TextEditor from "@/components/admin/TextEditor"
import AssistantIA from "@/components/admin/AssistantIA"

export default function AdminPage() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">SuperAdmin – Configuration du Site</h1>

      <Tabs defaultValue="contenu" className="space-y-4">
        <TabsList className="w-full grid grid-cols-4 gap-2">
          <TabsTrigger value="contenu">Contenu du site</TabsTrigger>
          <TabsTrigger value="services">Services IA</TabsTrigger>
          <TabsTrigger value="assistant">Assistant IA</TabsTrigger>
          <TabsTrigger value="systeme">Paramètres</TabsTrigger>
        </TabsList>

        {/* Contenu du site */}
        <TabsContent value="contenu">
          <TextEditor
            initialContent="<h2>Bienvenue sur BeatsMarket</h2><p>Le meilleur site pour les beats.</p>"
            onSave={(html) => {
              // Sauvegarde côté backend ou state global
              console.log("Contenu sauvegardé :", html)
            }}
          />
        </TabsContent>

        {/* Services IA */}
        <TabsContent value="services">
          <p>Gestion des services IA à venir...</p>
        </TabsContent>

        {/* Assistant IA */}
        <TabsContent value="assistant">
          <AssistantIA />
        </TabsContent>

        {/* Paramètres système */}
        <TabsContent value="systeme">
          <p>Paramètres du système à venir...</p>
        </TabsContent>
      </Tabs>
    </main>
  )
}
