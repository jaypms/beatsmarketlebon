"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Comment acheter un beat ?",
    answer:
      "Pour acheter un beat, créez un compte, choisissez une licence et procédez au paiement sécurisé.",
  },
  {
    question: "Quels types de licences proposez-vous ?",
    answer:
      "Nous proposons des licences basique, premium, exclusive, et exclusive + stems.",
  },
  {
    question: "Comment fonctionne le mastering IA ?",
    answer:
      "Le mastering IA améliore automatiquement la qualité sonore de vos beats via notre outil intégré.",
  },
  {
    question: "Puis-je obtenir un remboursement ?",
    answer:
      "Les remboursements sont soumis à conditions spécifiques. Contactez le support pour plus d’infos.",
  },
];

export default function HelpPage() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    // Simuler réponse IA
    setChatMessages((prev) => [...prev, `Vous : ${chatInput}`, `Monsieur Aide : Voici une réponse simulée à "${chatInput}"`]);
    setChatInput("");
  };

  return (
    <main className="bg-[#121212] min-h-screen text-white font-poppins px-6 max-w-4xl mx-auto pt-20 space-y-12">
      <h1 className="text-4xl font-extrabold text-pink-500 text-center mb-8">Aide & FAQ</h1>

      {/* Chatbot IA */}
      <section className="bg-gray-900 rounded-lg p-6 flex flex-col max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Monsieur Aide</h2>
        <div
          className="flex-1 overflow-auto max-h-60 mb-4 bg-gray-800 p-4 rounded-md space-y-2"
          aria-live="polite"
        >
          {chatMessages.length === 0 && <p className="text-gray-400 italic">Posez votre question ci-dessous.</p>}
          {chatMessages.map((msg, idx) => (
            <p key={idx} className={msg.startsWith("Vous") ? "text-pink-400" : "text-gray-300"}>
              {msg}
            </p>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
            placeholder="Tapez votre question..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-pink-600 hover:bg-pink-500 px-4 rounded-md font-semibold"
          >
            Envoyer
          </button>
        </div>
      </section>

      {/* FAQ dynamique */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">Foire aux Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, idx) => (
            <details key={idx} className="bg-gray-900 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-lg text-pink-500">{question}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
