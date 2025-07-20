import React, { useState, useEffect, useRef } from "react";

type Message = {
  id: number;
  sender: "admin" | "assistant";
  text: string;
};

export default function SuperAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "admin",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.statusText}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: Date.now() + 1,
        sender: "assistant",
        text: data.response || "Pas de réponse reçue.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 2,
        sender: "assistant",
        text: `Erreur lors de la communication avec l'API: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-gray-800 transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h1 className="text-xl font-bold">SuperAdmin</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <a
            href="/admin/superadmin"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="/admin/beatmakers"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Beatmakers
          </a>
          <a
            href="/admin/artists"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Artistes
          </a>
          <a
            href="/admin/settings"
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            Paramètres
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-gray-800 px-6 py-4 border-b border-gray-700">
          <h2 className="text-2xl font-semibold">Tableau de bord SuperAdmin</h2>
          <button className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-700">
            Déconnexion
          </button>
        </header>

        {/* Content */}
        <section className="flex-1 p-6 overflow-auto flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.length === 0 && (
              <p className="text-gray-400">Bienvenue dans l’assistant IA.</p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 max-w-xs px-3 py-2 rounded ${
                  msg.sender === "admin"
                    ? "bg-pink-600 self-end text-white"
                    : "bg-gray-700 self-start text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex">
            <textarea
              className="flex-1 resize-none rounded bg-gray-800 p-2 text-white focus:outline-none"
              rows={2}
              placeholder="Tapez un message, puis Entrée..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
              aria-label="Envoyer message"
            >
              Envoyer
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
