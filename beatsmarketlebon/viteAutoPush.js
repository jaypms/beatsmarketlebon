import simpleGit from 'simple-git';

const git = simpleGit();

async function updateAndPush(commitMessage) {
  try {
    console.log("➕ Ajout des fichiers modifiés...");
    await git.add('.');

    // On tente de committer, si pas de changement ça ne bloquera pas
    const status = await git.status();
    if (status.staged.length > 0) {
      console.log(`💾 Commit avec message : "${commitMessage}"`);
      await git.commit(commitMessage);
    } else {
      console.log("📝 Aucun changement à committer.");
    }

    console.log("🔄 Pull --rebase en cours...");
    await git.pull('origin', 'main', { '--rebase': 'true' });

    console.log("🚀 Push vers origin/main...");
    await git.push('origin', 'main');

    console.log("✅ Push réussi !");
  } catch (error) {
    console.error("❌ Erreur git :", error.message);
  }
}

const commitMessage = process.argv.slice(2).join(' ') || 'Mise à jour automatique';

updateAndPush(commitMessage);
