import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  useEffect(() => {
    // Fetch messages for the beatmaker, example stub
    const fetchMessages = async () => {
      // Replace with real API call
      const fetchedMessages: Message[] = [
        {
          id: "1",
          from: "artist1",
          to: "beatmaker",
          content: "Bonjour, intéressé par ton beat.",
          timestamp: "2025-07-25T10:00:00Z",
          read: false,
        },
        {
          id: "2",
          from: "beatmaker",
          to: "artist1",
          content: "Merci pour ton message, je t'envoie un lien bientôt.",
          timestamp: "2025-07-25T10:05:00Z",
          read: true,
        },
      ];
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    // Implement API send message logic here
    const sentMessage: Message = {
      id: Date.now().toString(),
      from: "beatmaker",
      to: selectedConversation,
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
      read: false,
    };
    setMessages((prev) => [...prev, sentMessage]);
    setNewMessage("");
  };

  const conversations = Array.from(new Set(messages.map((m) => (m.from === "beatmaker" ? m.to : m.from))));

  return (
    <div className="flex h-full space-x-4 p-4">
      <aside className="w-1/4 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Conversations</h2>
        <ul>
          {conversations.map((conv) => (
            <li
              key={conv}
              className={`cursor-pointer px-2 py-1 rounded ${
                conv === selectedConversation ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
              onClick={() => setSelectedConversation(conv)}
            >
              {conv}
            </li>
          ))}
          {conversations.length === 0 && <li>Aucune conversation</li>}
        </ul>
      </aside>
      <main className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Messages</h2>
        {selectedConversation ? (
          <>
            <div className="flex-1 overflow-y-auto border rounded p-4 bg-white dark:bg-gray-900">
              {messages
                .filter(
                  (m) =>
                    (m.from === selectedConversation && m.to === "beatmaker") ||
                    (m.to === selectedConversation && m.from === "beatmaker")
                )
                .map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 p-2 rounded ${
                      msg.from === "beatmaker" ? "bg-blue-100 dark:bg-blue-800 self-end" : "bg-gray-200 dark:bg-gray-700"
                    } max-w-xs`}
                  >
                    <p>{msg.content}</p>
                    <small className="block text-right text-xs text-gray-600 dark:text-gray-400">
                      {new Date(msg.timestamp).toLocaleString()}
                    </small>
                  </div>
                ))}
            </div>
            <form
              className="mt-4 flex"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <Input
                placeholder="Écrire un message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit" className="ml-2">
                Envoyer
              </Button>
            </form>
          </>
        ) : (
          <p>Sélectionnez une conversation pour voir les messages.</p>
        )}
      </main>
    </div>
  );
}