import type { NextApiRequest, NextApiResponse } from "next"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { prompt } = req.body
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Invalid prompt" })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Tu es un assistant SuperAdmin BeatsMarket." },
        { role: "user", content: prompt },
      ],
    })

    const reply = completion.choices[0]?.message?.content ?? "Pas de réponse."

    res.status(200).json({ reply })
  } catch (error) {
    console.error("OpenAI error:", error)
    res.status(500).json({ error: "Erreur serveur OpenAI" })
  }
}
