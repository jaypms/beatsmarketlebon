# Composants UI de BeatsMarket

Voici la liste des composants UI disponibles dans ce dossier, avec leur usage.

- **Accordion** : Affiche des sections repliables.
- **ActionMenu** : Menu d’actions déroulant.
- **Badge** : Petit badge pour afficher un statut.
- **Bouton** : Bouton avec variantes.
- **Card** : Carte visuelle contenant des infos.
- **DropDownMenu** : Menu déroulant multi-options.
- **Input** : Champ texte de formulaire.
- **Label** : Étiquette pour champ formulaire.
- **StadCard** : Carte statistique (KPI).
- **StatutBadge** : Badge pour statuts dynamiques.
- **Textarea** : Zone de texte multi-lignes.

---

## Exemple d’utilisation

```tsx
import { Button } from "./button"

export function Exemple() {
  return <Button variant="default">Cliquez-moi</Button>
}
