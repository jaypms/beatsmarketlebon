import 'dotenv/config';
import { Octokit } from "@octokit/rest";
import simpleGit from "simple-git";
import fs from "fs/promises";
import path from "path";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const git = simpleGit();

const OWNER = "jaypms";
const REPO = "beatsmarketlebon";

async function modifyFile(filePath, newContent, commitMessage) {
  try {
    await fs.writeFile(path.resolve(filePath), newContent, "utf-8");
    console.log(`Fichier modifié localement: ${filePath}`);

    await git.add(filePath);
    await git.commit(commitMessage);
    await git.push("origin", "main");
    console.log(`Commit & push effectués: ${commitMessage}`);
  } catch (error) {
    console.error("Erreur modification + push:", error);
  }
}

async function createIssue(title, body) {
  try {
    const response = await octokit.issues.create({
      owner: OWNER,
      repo: REPO,
      title,
      body,
    });
    console.log("Issue créée:", response.data.html_url);
  } catch (error) {
    console.error("Erreur création issue:", error);
  }
}

async function main() {
  await modifyFile("src/components/Footer.tsx", "<!-- Contenu modifié par script -->", "Mise à jour Footer automatique");
  await createIssue("Mise à jour Footer", "Le footer a été mis à jour automatiquement par le script.");
}

main();
