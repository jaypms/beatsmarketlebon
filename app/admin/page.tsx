"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BotIcon, Settings2Icon, LayoutDashboardIcon, WrenchIcon } from "lucide-react"

export default function AdminPage() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">SuperAdmin – Configuration du Site</h1>

      <Tabs defaultValue="contenu" className="space-y-4">
        <TabsList className="w-full grid grid-cols-4 gap-2">
          <TabsTrigger value="contenu">
            <LayoutDashboardIcon className="mr-2 h-4 w-4" /> Contenu du site
          </TabsTrigger>
          <TabsTrigger value="services">
            <WrenchIcon className="mr-2 h-4 w-4" /> Services IA
          </TabsTrigger>
          <TabsTrigger value="assistant">
            <BotIcon className="mr-2 h-4 w-4" /> Assistant IA
          </TabsTrigger>
          <TabsTrigger value="systeme">
            <Settings2Icon className="mr-2 h-4 w-4" /> Paramètres
          </TabsTrigger>
        </TabsList>

        {/* Contenu du site */}
        <TabsContent value="contenu">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="text-xl font-semibold">Textes et sections</h2>

              <div className="space-y-2">
                <label className="font-medium">Titre de la page d'accueil</label>
                <Input defaultValue="Bienvenue sur BeatsMarket" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Description “Pourquoi nous ?”</label>
                <Textarea defaultValue="La plateforme numéro 1 pour acheter et vendre des beats dans le monde." />
              </div>

              <Button className="mt-4">Enregistrer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services IA */}
        <TabsContent value="services">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="text-xl font-semibold">Activer/Désactiver les services IA</h2>
              <div className="space-y-2">
                <Toggle defaultPressed>Mastering IA</Toggle>
                <Toggle defaultPressed>Cover Art IA</Toggle>
                <Toggle defaultPressed>Recherche IA</Toggle>
              </div>
              <Button className="mt-4">Sauvegarder les services</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assistant IA */}
        <TabsContent value="assistant">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="text-xl font-semibold">Assistant intégré</h2>
              <p className="text-muted-foreground">
                Cet assistant peut vous aider à coder, générer du texte, corriger du contenu ou proposer des
                améliorations.
              </p>
              <Textarea placeholder="Posez une question (ex: modifie la section footer en anglais)..." />
              <Button className="mt-2">Lancer l'assistant</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres système */}
        <TabsContent value="systeme">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="text-xl font-semibold">Paramètres du système</h2>

              <div className="space-y-2">
                <label className="font-medium">Email support</label>
                <Input defaultValue="support@beatsmarket.fr" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Nom du site</label>
                <Input defaultValue="BeatsMarket" />
              </div>

              <Separator />

              <Button>Mettre à jour</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
