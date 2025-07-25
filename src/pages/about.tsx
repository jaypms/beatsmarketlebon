import { BadgeCheck, LayoutDashboard, Music, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">À propos de BeatsMarket</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            BeatsMarket est bien plus qu’une simple marketplace. C’est un écosystème complet, conçu pour donner aux beatmakers et aux artistes indépendants les outils les plus modernes pour vendre, collaborer et évoluer.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Notre manifeste</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nous croyons en une musique libre, équitable, indépendante et innovante. Les beatmakers méritent une plateforme qui leur ressemble, avec des outils puissants, une transparence totale sur leurs revenus, et une autonomie complète.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            BeatsMarket est né de ce besoin : un lieu où chaque vente compte, chaque création est protégée, chaque utilisateur est respecté.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Nos outils pour les créateurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-3 text-center">
                <LayoutDashboard className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Boutique Pro</h3>
                <p className="text-sm text-muted-foreground">
                  Crée ta boutique de beats personnalisée et professionnelle.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-3 text-center">
                <BadgeCheck className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Mastering IA</h3>
                <p className="text-sm text-muted-foreground">
                  Donne un son pro à tes beats en un clic grâce à notre intelligence artificielle.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-3 text-center">
                <Music className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Covers IA</h3>
                <p className="text-sm text-muted-foreground">
                  Génére des visuels pro pour tes beats, EPs ou albums automatiquement.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-3 text-center">
                <Share2 className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Distribution digitale</h3>
                <p className="text-sm text-muted-foreground">
                  Distribue ta musique sur toutes les plateformes sans commission.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-3 text-center">
                <Music className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Gestion des droits</h3>
                <p className="text-sm text-muted-foreground">
                  Déclare tes œuvres et protège tes revenus facilement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center pt-10">
          <p className="text-muted-foreground text-sm">
            Ensemble, construisons la plateforme musicale de demain.
          </p>
        </section>
      </div>
    </div>
  );
}