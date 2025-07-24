import 'dotenv/config';
import fetch from "node-fetch";

const GITHUB_API_URL = "https://api.github.com";
const REPO_OWNER = "jaypms";          // Remplace par ton pseudo GitHub
const REPO_NAME = "beatsmarketlebon"; // Remplace par le nom de ton repo
const TOKEN = process.env.GITHUB_TOKEN;

async function createIssue(title, body) {
  const res = await fetch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
    method: "POST",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`GitHub API error: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  console.log("Issue créée :", data.html_url);
}

// Récupère les arguments passés dans la console
const [title, body] = process.argv.slice(2);

if (!title || !body) {
  console.log('Usage : node githubBot.js "Titre de l\'issue" "Description de l\'issue"');
  process.exit(1);
}

createIssue(title, body);
