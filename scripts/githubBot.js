// scripts/githubBot.js
import "dotenv/config";
import fetch from "node-fetch";

// 🔐 Token stocké dans .env.local
const token = process.env.GITHUB_TOKEN;
const owner = "jaypms";
const repo = "beatsmarketlebon";

/**
 * Crée une issue sur GitHub
 * @param {string} title - Titre de l'issue
 * @param {string} body - Corps de l'issue
 */
const createIssue = async (title, body) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Erreur :", data);
      throw new Error(`GitHub API error: ${res.status} - ${JSON.stringify(data)}`);
    }

    console.log(`✅ Issue créée avec succès : ${data.html_url}`);
  } catch (err) {
    console.error("❌ Erreur : ", err.message);
  }
};

// 🧪 Test automatique
createIssue(
  "🎯 Test automatique via githubBot.js",
  "Ceci est un test d'issue générée automatiquement via Node.js + GitHub API."
);
