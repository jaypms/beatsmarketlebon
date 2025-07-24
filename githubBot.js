import fetch from "node-fetch";

const GITHUB_API_URL = "https://api.github.com";
const REPO_OWNER = "jaypms";
const REPO_NAME = "beatsmarketlebon";
const TOKEN = process.env.GITHUB_TOKEN;

async function createIssue(title, body) {
  const res = await fetch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
    method: "POST",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub API error: ${res.status} - ${error}`);
  }

  const data = await res.json();
  console.log(`✅ Issue créée : ${data.html_url}`);
}

// Exemple d'utilisation :
createIssue("Test auto via script", "Cette issue a été créée depuis Node.js via API GitHub.")
  .catch(err => console.error("❌ Erreur :", err));
