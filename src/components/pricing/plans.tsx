export const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    commission: "35%",
    beatLimit: "Jusqu'à 10 beats",
    features: [
      "Vente de toutes les licences (Basique, Premium, Exclusive, Exclusive + Stems)",
      "Support de base",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Bronze",
    price: "10 €",
    commission: "20%",
    beatLimit: "Jusqu'à 30 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Or",
    price: "15 €",
    commission: "15%",
    beatLimit: "Jusqu'à 50 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
  {
    name: "Diamant",
    price: "20 €",
    commission: "10%",
    beatLimit: "Jusqu'à 100 beats",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "1 mise en avant de beat par semaine (1 fois par mois)",
      "1 mise en avant de boutique par semaine (1 fois par mois)",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: true,
  },
  {
    name: "Diamant Plus",
    price: "29,90 €",
    commission: "0%",
    beatLimit: "Beats illimités",
    features: [
      "Vente de toutes les licences",
      "Support plus développé",
      "Statistiques avancées",
      "2 mises en avant de beat par semaine (1 fois par mois)",
      "2 mises en avant de boutique par semaine (1 fois par mois)",
      "Accès complet au Mastering IA",
      "Accès complet au Cover IA",
    ],
    highlighted: false,
  },
];

export const licenses = [
  {
    name: "Licence Basique (MP3)",
    target: "Artistes débutants, maquettes",
    files: "1 fichier MP3 (avec tag vocal)",
    rights:
      "Usage non-commercial, streams et ventes limités à 5 000 streams et 100 ventes maximum",
  },
  {
    name: "Licence Premium (WAV)",
    target: "Artistes indépendants pour plateformes de streaming",
    files: "1 MP3 + 1 WAV (haute qualité, sans tag)",
    rights:
      "Usage commercial avec limites élevées : jusqu'à 100 000 streams et 5 000 ventes",
  },
  {
    name: "Licence Exclusive",
    target: "Artistes signés, projets majeurs",
    files: "MP3 + WAV",
    rights:
      "Droits illimités, le beat est retiré de la vente après achat. Usage commercial complet.",
  },
  {
    name: "Licence Exclusive + Pistes (Stems)",
    target: "Pack ultime, contrôle total",
    files: "MP3 + WAV + pistes séparées",
    rights:
      "Même droits qu'Exclusive, avec accès aux pistes multipistes (stems) pour remix, mastering, etc.",
  },
];

export const services = [
  {
    name: "Mises en avant (Beat ou Boutique)",
    description: "Augmente la visibilité sur le site",
    prices: [
      { duration: "1 Jour", price: "1 €" },
      { duration: "1 Semaine", price: "3 €" },
      { duration: "2 Semaines", price: "5 €" },
      { duration: "1 Mois", price: "8 €" },
    ],
  },
  {
    name: "Mastering IA",
    description: "Améliore le son d'un morceau",
    prices: [
      { formula: "Essentiel (2 retouches)", price: "12 €" },
      { formula: "Pro (5 retouches)", price: "22 €" },
    ],
  },
  {
    name: "Cover IA",
    description: "Génère une pochette unique",
    prices: [
      { formula: "Essentiel (2 retouches)", price: "12 €" },
      { formula: "Pro (5 retouches)", price: "22 €" },
    ],
  },
  {
    name: "Distribution Digitale",
    description: "Publie la musique sur les plateformes de streaming",
    prices: [
      { type: "Single", price: "14,90 €" },
      { type: "Album / EP", price: "38,90 €" },
    ],
  },
  {
    name: "Gestion des Droits Musicaux",
    description: "Collecte les royalties pour les créateurs",
    prices: [
      { fee: "Frais d'inscription", price: "0 €" },
      { fee: "Commission", price: "25% sur les droits perçus" },
    ],
  },
];
