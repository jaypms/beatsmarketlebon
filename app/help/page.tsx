"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  const [form, setForm] = useState({ email: "", message: "" })

  return (
    <main className="min-h-screen bg-darkbg text-white px-4 py-12 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Besoin d'aide ?</h1>

        {/* Chatbot IA */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">👋 Monsieur Aide (IA)</h2>
          <div className="bg-[#1f1f1f] rounded-xl p-4 text-sm text-gray-300">
            <p>Bonjour ! Je suis Monsieur Aide. Pose-moi une question sur BeatsMarket et je te réponds tout de suite.</p>
            <p className="mt-2 italic text-xs text-gray-500">Bientôt disponible en version complète (Genkit AI).</p>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📨 Formulaire de contact</h2>
          <div className="bg-[#1f1f1f] rounded-xl p-6 space-y-4">
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-[#2c2c2c] text-white border-none"
            />
            <Textarea
              placeholder="Votre message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-[#2c2c2c] text-white border-none min-h-[120px]"
            />
            <Button className="bg-primary hover:bg-primary/80 transition-colors">Envoyer</Button>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">❓ Questions fréquentes (FAQ)</h2>
          <Accordion type="multiple" className="bg-[#1f1f1f] rounded-xl">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left px-4 py-3 text-white hover:bg-[#2a2a2a]">
                Comment vendre mes beats sur BeatsMarket ?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                Crée un compte beatmaker, uploade tes beats, choisis tes licences, ton prix, et publie-les dans ta boutique. BeatsMarket s’occupe du reste !
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left px-4 py-3 text-white hover:bg-[#2a2a2a]">
                Quels sont les frais de BeatsMarket ?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                Nous prenons une commission de 15% sur les ventes. Les frais Stripe s’ajoutent selon le pays de l’utilisateur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left px-4 py-3 text-white hover:bg-[#2a2a2a]">
                Comment contacter l’équipe ?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                Utilisez le formulaire ci-dessus ou écrivez-nous à support@beatsmarket.fr. Nous répondons sous 48h maximum.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  )
}
