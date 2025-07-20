# Bibliothèque de composants UI - BeatsMarket

Ce dossier contient tous les composants UI réutilisables pour BeatsMarket.

## Liste des composants

- **Accordion** : Section repliable (accordéon).
- **ActionMenu** : Menu d’actions déroulant.
- **Badge** : Petit badge coloré pour statuts ou labels.
- **Button** : Bouton avec variantes (default, destructive, ghost...).
- **Card** : Carte d’affichage avec header, content, footer.
- **DropdownMenu** : Menu déroulant complexe avec sous-menus.
- **Input** : Champ de saisie simple.
- **Label** : Étiquette pour champ formulaire.
- **StatCard** : Carte de statistiques (KPI).
- **StatusBadge** : Badge indiquant un statut (actif, suspendu...).
- **Textarea** : Zone de texte multilignes.
- **Tooltip** : Info-bulle affichée au survol.

## Importer les composants

Grâce au fichier `index.ts`, tu peux importer les composants ainsi :

```tsx
import { Button, Card, Tooltip } from "@/components/ui"
