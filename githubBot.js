import { Octokit } from "octokit";
import dotenv from "dotenv";

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function test() {
  try {
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log("Connecté avec le compte GitHub :", user.login);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

test();
