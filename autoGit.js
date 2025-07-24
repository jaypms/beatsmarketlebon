import 'dotenv/config';
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const OWNER = "jaypms";            // Remplace par ton user GitHub
const REPO = "beatsmarketlebon";   // Remplace par ton repo
const BRANCH = "main";             // Branche cible

/**
 * Crée ou met à jour un fichier sur GitHub
 * @param {string} path Chemin du fichier dans le repo
 * @param {string} content Contenu texte du fichier
 * @param {string} message Message de commit
 */
async function createOrUpdateFile(path, content, message) {
  try {
    let sha;
    try {
      const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: OWNER,
        repo: REPO,
        path,
        ref: BRANCH,
      });
      sha = data.sha;  // fichier existe, on récupère le sha pour mise à jour
    } catch {
      // fichier n'existe pas encore, pas de sha
    }

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: OWNER,
      repo: REPO,
      path,
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
      branch: BRANCH,
    });

    console.log(`✅ Fichier ${path} créé/mis à jour.`);
  } catch (error) {
    console.error(`❌ Erreur GitHub API pour ${path} :`, error.message);
  }
}

async function main() {
  // Liste des fichiers à créer / modifier
  const filesToCreate = [
    {
      path: "src/pages/index.tsx",
      content: `
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur BeatsMarket</h1>
    </div>
  );
}
`.trim(),
      message: "Création / mise à jour page d'accueil"
    },
    {
      path: "src/components/Footer.tsx",
      content: `
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>© 2025 BeatsMarket - Tous droits réservés</p>
    </footer>
  );
}
`.trim(),
      message: "Création / mise à jour Footer"
    },
    // Ajoute ici d'autres fichiers avec leur contenu et message de commit
  ];

  for (const file of filesToCreate) {
    await createOrUpdateFile(file.path, file.content, file.message);
  }
}

main();
