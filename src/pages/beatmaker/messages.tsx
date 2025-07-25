import React, { useState, useEffect } from "react";
import { Button, Input, Textarea } from "../../components/ui";

interface Message {
  id: string;
  sender: string;
  content: string;
  date: string;
  read: boolean;
}

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    // Charger les messages reçus via API
    // Exemple statique pour démo
    setMessages([
      {
        id: "1",
        sender: "Artiste123",
        content: "Salut, j'aimerais discuter d'une instru.",
        date: "2025-07-24 14:23",
        read: false,
      },
      {
        id: "2",
        sender: "Artiste456",
        content: "Peux-tu faire un cover personnalisé ?",
        date: "2025-07-23 11:10",
        read: true,
      },
    ]);
  }, []);

  const selectMessage = (msg: Message) => {
    setSelectedMessage(msg);
    // Marquer comme lu via API
  };

  const sendReply = () => {
    if (!selectedMessage) return;
    // Envoyer la réponse via API
    alert(`Réponse envoyée à ${selectedMessage.sender}: ${replyContent}`);
    setReplyContent("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex gap-6">
      <aside className="w-1/3 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Messages reçus</h2>
        <ul>
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`p-3 cursor-pointer border-b ${
                selectedMessage?.id === msg.id ? "bg-gray-100" : ""
              }`}
              onClick={() => selectMessage(msg)}
            >
              <p className="font-semibold">{msg.sender}</p>
              <p className="truncate">{msg.content}</p>
              <small>{msg.date}</small>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1">
        {selectedMessage ? (
          <>
            <h2 className="text-xl font-bold mb-2">Message de {selectedMessage.sender}</h2>
            <div className="mb-4 p-4 border rounded bg-gray-50">
              <p>{selectedMessage.content}</p>
              <small className="text-gray-500">{selectedMessage.date}</small>
            </div>
            <Textarea
              rows={4}
              placeholder="Écrire une réponse..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="mb-4"
            />
            <Button onClick={sendReply} disabled={!replyContent.trim()}>
              Envoyer la réponse
            </Button>
          </>
        ) : (
          <p>Sélectionnez un message pour voir et répondre.</p>
        )}
      </main>
    </div>
  );
};

export default MessagesPage;