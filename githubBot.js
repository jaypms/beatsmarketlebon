import { Octokit } from "octokit";
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d’environnement depuis .env ou .env.local

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("❌ Erreur : Le token GitHub GITHUB_TOKEN n’est pas défini dans l’environnement.");
  process.exit(1);
}

// Arguments CLI : node githubBot.js "Titre de l’issue" "Description détaillée"
const [,, title, body] = process.argv;

if (!title || !body) {
  console.error("❌ Usage : node githubBot.js \"Titre de l’issue\" \"Description détaillée\"");
  process.exit(1);
}

const octokit = new Octokit({ auth: token });

async function createIssue() {
  try {
    const response = await octokit.rest.issues.create({
      owner: "jaypms",        // Ton compte GitHub
      repo: "beatsmarketlebon", // Le nom du repo
      title,
      body,
    });
    console.log(`✅ Issue créée avec succès : ${response.data.html_url}`);
  } catch (error) {
    console.error("❌ Erreur lors de la création de l’issue :", error.message);
    if (error.status) {
      console.error(`Status: ${error.status}`);
    }
  }
}

createIssue();
