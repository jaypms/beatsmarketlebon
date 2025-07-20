// src/lib/utils.ts

/**
 * Fonction utilitaire pour concaténer des classes conditionnelles en CSS
 * Exemple : cn('btn', isActive && 'btn-active') => 'btn btn-active' ou 'btn'
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
