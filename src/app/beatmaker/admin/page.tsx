"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type SocialLinks = {
  facebook?: string
  instagram?: string
  twitter?: string
  youtube?: string
}

type Beat = {
  id: string
  title: string
  price: number
  published: boolean
}

type Message = {
  id: string
  from: string
  content: string
  replied: boolean
  reply?: string
}

export default function AdminBeatmakerPage() {
  const [activeTab, setActiveTab] = useState<"boutique" | "beats" | "messages">("boutique")

  // Boutique state
  const [miniatureUrl, setMiniatureUrl] = useState("")
  const [bannerUrl, setBannerUrl] = useState("")
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({})

  // Beats state (exemple statique)
  const [beats, setBeats] = useState<Beat[]>([
    { id: "1", title: "Beat 1", price: 29.99, published: true },
    { id: "2", title: "Beat 2", price: 19.99, published: false },
  ])

  // Messages state (exemple statique)
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", from: "ArtisteX", content: "Salut, peux-tu me faire un prix ?", replied: false },
    { id: "m2", from: "ArtisteY", content: "Quand sortira ton prochain beat ?", replied: true, reply: "Bientôt, stay tuned !" },
  ])

  // Handlers Boutique
  function handleSocialChange(key: keyof SocialLinks, value: string) {
    setSocialLinks((prev) => ({ ...prev, [key]: value }))
  }

  function handleSaveBoutique() {
    // TODO: Appeler API sauvegarde boutique (miniature, bannière, réseaux)
    alert("Boutique sauvegardée !")
  }

  // Handlers Messages
  function handleReplyChange(id: string, value: string) {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, reply: value } : msg
      )
    )
  }
  function handleSendReply(id: string) {
    // TODO: API envoi réponse message
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, replied: true } : msg
      )
    )
    alert("Réponse envoyée !")
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Beatmaker</h1>

      <nav className="flex gap-4 mb-8">
        {["boutique", "beats", "messages"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === tab
                ? "bg-pink-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {activeTab === "boutique" && (
        <Card>
          <CardHeader>
            <CardTitle>Paramètres Boutique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Miniature (URL)</label>
              <Input
                type="url"
                value={miniatureUrl}
                onChange={(e) => setMiniatureUrl(e.target.value)}
                placeholder="https://example.com/miniature.jpg"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Bannière (URL)</label>
              <Input
                type="url"
                value={bannerUrl}
                onChange={(e) => setBannerUrl(e.target.value)}
                placeholder="https://example.com/banner.jpg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Facebook</label>
              <Input
                type="url"
                value={socialLinks.facebook || ""}
                onChange={(e) => handleSocialChange("facebook", e.target.value)}
                placeholder="https://facebook.com/yourpage"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Instagram</label>
              <Input
                type="url"
                value={socialLinks.instagram || ""}
                onChange={(e) => handleSocialChange("instagram", e.target.value)}
                placeholder="https://instagram.com/yourprofile"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Twitter</label>
              <Input
                type="url"
                value={socialLinks.twitter || ""}
                onChange={(e) => handleSocialChange("twitter", e.target.value)}
                placeholder="https://twitter.com/yourhandle"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">YouTube</label>
              <Input
                type="url"
                value={socialLinks.youtube || ""}
                onChange={(e) => handleSocialChange("youtube", e.target.value)}
                placeholder="https://youtube.com/channel/yourchannel"
              />
            </div>

            <Button onClick={handleSaveBoutique} className="mt-4">
              Sauvegarder
            </Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "beats" && (
        <Card>
          <CardHeader>
            <CardTitle>Mes Beats</CardTitle>
          </CardHeader>
          <CardContent>
            {beats.length === 0 && <p>Aucun beat trouvé.</p>}
            {beats.map((beat) => (
              <div
                key={beat.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <strong>{beat.title}</strong>{" "}
                  {beat.published ? (
                    <span className="text-green-600 font-semibold">Publié</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Non publié</span>
                  )}
                </div>
                <div>{beat.price.toFixed(2)} €</div>
                <div>
                  {/* TODO: Boutons édition, suppression, publication */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert("Edition non implémentée")}
                  >
                    Éditer
                  </Button>{" "}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => alert("Suppression non implémentée")}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {activeTab === "messages" && (
        <Card>
          <CardHeader>
            <CardTitle>Messages clients</CardTitle>
          </CardHeader>
          <CardContent>
            {messages.length === 0 && <p>Aucun message.</p>}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border-b py-3 space-y-2"
              >
                <p>
                  <strong>{msg.from}</strong> : {msg.content}
                </p>
                {msg.replied ? (
                  <p className="text-green-600 font-semibold">
                    Répondu : {msg.reply}
                  </p>
                ) : (
                  <>
                    <Textarea
                      placeholder="Votre réponse..."
                      value={msg.reply || ""}
                      onChange={(e) => handleReplyChange(msg.id, e.target.value)}
                    />
                    <Button
                      size="sm"
                      onClick={() => handleSendReply(msg.id)}
                    >
                      Envoyer
                    </Button>
                  </>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
