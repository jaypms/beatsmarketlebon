import React, { useState, useEffect } from "react";
import { Button, Input, Textarea } from "../../components/ui";

interface Message {
  id: string;
  from: string;
  content: string;
  date: string;
  read: boolean;
}

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    // Fetch messages from API
    // setMessages(...)
  }, []);

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    // Optionally mark message as read in backend
  };

  const handleSendReply = () => {
    if (!replyContent.trim()) return;
    // Send reply to backend
    alert("Réponse envoyée !");
    setReplyContent("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <aside className="md:w-1/3 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Messages reçus</h2>
        <ul className="space-y-2 max-h-[500px] overflow-auto">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => handleSelectMessage(msg)}
              className={`cursor-pointer p-2 rounded ${
                selectedMessage?.id === msg.id
                  ? "bg-blue-100"
                  : msg.read
                  ? "bg-gray-100"
                  : "bg-white font-semibold"
              }`}
            >
              <div>
                <span>{msg.from}</span>
                <span className="text-sm text-gray-500 float-right">{msg.date}</span>
              </div>
              <p className="truncate">{msg.content}</p>
            </li>
          ))}
        </ul>
      </aside>

      <section className="md:w-2/3 flex flex-col">
        {selectedMessage ? (
          <>
            <h3 className="text-lg font-bold mb-2">Conversation avec {selectedMessage.from}</h3>
            <div className="flex-1 overflow-auto border p-4 mb-4 rounded bg-gray-50 max-h-[400px]">
              <p>{selectedMessage.content}</p>
            </div>
            <Textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Écrire une réponse..."
              rows={4}
              className="mb-4"
            />
            <Button onClick={handleSendReply}>Envoyer</Button>
          </>
        ) : (
          <p>Sélectionnez un message pour lire et répondre.</p>
        )}
      </section>
    </div>
  );
};

export default MessagesPage;