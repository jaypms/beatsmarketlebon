import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bot, Settings, FileText, Users, Store } from "lucide-react"

export default function SuperAdminPage() {
  return (
    <div className="min-h-screen bg-background p-6 text-foreground">
      <h1 className="text-3xl font-bold mb-6">Panneau SuperAdmin BeatsMarket</h1>

      <Tabs defaultValue="site" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-4">
          <TabsTrigger value="site">
            <Settings className="mr-2 h-4 w-4" /> Paramètres site
          </TabsTrigger>
          <TabsTrigger value="contenu">
            <FileText className="mr-2 h-4 w-4" /> Pages & textes
          </TabsTrigger>
          <TabsTrigger value="comptes">
            <Users className="mr-2 h-4 w-4" /> Comptes
          </TabsTrigger>
          <TabsTrigger value="services">
            <Store className="mr-2 h-4 w-4" /> Services IA & Offres
          </TabsTrigger>
          <TabsTrigger value="assistant">
            <Bot className="mr-2 h-4 w-4" /> Assistant IA
          </TabsTrigger>
        </TabsList>

        <TabsContent value="site">
          <p className="text-muted-foreground mb-4">Contrôle global du site : dark mode, langues, sécurité, backups, etc.</p>
          {/* ⏳ Ici viendront les composants de configuration globale */}
        </TabsContent>

        <TabsContent value="contenu">
          <p className="text-muted-foreground mb-4">Modifier les textes, sections, titres, etc. (avec éditeur visuel).</p>
          {/* ⏳ Ici viendront les éditeurs WYSIWYG ou markdown pour toutes les pages publiques */}
        </TabsContent>

        <TabsContent value="comptes">
          <p className="text-muted-foreground mb-4">Gérer les administrateurs, beatmakers et artistes.</p>
          {/* ⏳ Tables dynamiques pour tous les utilisateurs, avec filtres et actions */}
        </TabsContent>

        <TabsContent value="services">
          <p className="text-muted-foreground mb-4">Activer/désactiver les services IA, plans d’abonnement, promotions, etc.</p>
          {/* ⏳ Cases à cocher, tableaux de prix, sliders de mise en avant */}
        </TabsContent>

        <TabsContent value="assistant">
          <p className="text-muted-foreground mb-4">Assistant IA intégré pour t’aider à coder, modifier ou créer.</p>
          <div className="border p-4 rounded-xl bg-muted">
            <p className="mb-2 font-medium">Tu veux créer quelque chose ? Parle à ton assistant 👇</p>
            <input
              type="text"
              placeholder="Ex: Ajoute un composant de galerie responsive"
              className="w-full p-2 rounded-md border bg-background"
            />
            <Button className="mt-2">Envoyer</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
