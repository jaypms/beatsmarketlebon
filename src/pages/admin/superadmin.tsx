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

  // Scroll automatique vers le bas quand un nouveau message arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fonction pour envoyer un message
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Ajoute le message de l’admin
    const newMessage: Message = {
      id: Date.now(),
      sender: "admin",
      text: input.trim(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simuler une réponse IA (à remplacer par appel API OpenAI)
    setTimeout(() => {
      const responseMessage: Message = {
        id: Date.now() + 1,
        sender: "assistant",
        text: `Réponse IA simulée pour : "${newMessage.text}"`,
      };
      setMessages((prev) => [...prev, responseMessage]);
    }, 1000);
  };

  // Gestion Enter dans textarea
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
        <div className="flex items-center justify-between px-4 py
