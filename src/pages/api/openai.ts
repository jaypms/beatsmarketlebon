import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ta clé stockée dans .env ou variables Vercel
});

const openai = new OpenAIApi(configuration);

type Data = {
  response?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Le prompt est requis" });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini", // Ou gpt-4o, gpt-3.5-turbo selon ce que tu as
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    const aiResponse = completion.data.choices[0].message?.content || "";

    res.status(200).json({ response: aiResponse });
  } catch (error: any) {
    res.status(500).json({
      error:
        error?.response?.data?.error?.message ||
        error.message ||
        "Erreur inconnue",
    });
  }
}
