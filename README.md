## Déploiement automatique avec GitHub Actions et Vercel

Ce projet utilise un workflow GitHub Actions pour construire et déployer automatiquement l’application sur Vercel à chaque push sur la branche `main`.

### Configuration requise

Avant de pouvoir déployer, il faut configurer les **secrets GitHub** dans les paramètres du dépôt (`Settings > Secrets and variables > Actions`) :

- `VERCEL_ORG_ID` : L’ID de l’organisation Vercel
- `VERCEL_PROJECT_ID` : L’ID du projet Vercel
- `VERCEL_TOKEN` : Le token d’accès personnel Vercel (à générer dans [https://vercel.com/account/tokens](https://vercel.com/account/tokens))

### Workflow CI/CD

Le fichier de workflow `.github/workflows/deploy-vercel.yml` contient les étapes suivantes :

1. Checkout du code source
2. Installation de Node.js
3. Installation des dépendances (`npm ci`)
4. Génération automatique de l’index des composants UI (`npm run generate-ui-index`)
5. Build du projet Next.js (`npm run build`)
6. Installation du CLI Vercel
7. Déploiement sur Vercel en production

### Déclenchement

Le workflow se lance automatiquement à chaque push sur la branche `main`.

---

**Astuce** : Pour tester le déploiement, faites une modification et poussez-la sur `main`.  
Les logs sont visibles dans l’onglet **Actions** de GitHub.

---

*Merci de garder les tokens secrets et de ne pas les exposer publiquement.*
