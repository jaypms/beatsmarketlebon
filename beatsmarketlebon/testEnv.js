import dotenv from 'dotenv';

dotenv.config(); // Charge le fichier .env

console.log("Token :", process.env.GITHUB_TOKEN || "Aucun token détecté");
