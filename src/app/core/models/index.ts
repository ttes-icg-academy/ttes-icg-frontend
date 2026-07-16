export type RoleUtilisateur = 'client' | 'admin';

export interface User {
  id: number;
  name: string;
  email: string;
  telephone: string | null;
  role: RoleUtilisateur;
}

export interface Salle {
  id: number;
  nom: string;
  capacite: number;
}

export interface Pack {
  id: number;
  nom: string; // Pack10, Pack20, Pack30, Pack40, Autre
  nbPlaces: number | null;
  prixTotalIndicatif: number | null;
}

export type StatutReservation = 'en_attente_validation' | 'confirmee' | 'annulee';

export interface Reservation {
  id: number;
  clientId: number; // référence un User avec role = 'client'
  salleId: number;
  packId: number | null;
  utilisateurId: number | null; // référence un User avec role = 'admin'
  themeEvenement: string;
  nbPlacesDemandees: number;
  statut: StatutReservation;

  // Paiement (un seul paiement total, pas de versements multiples en base)
  montantTotal: number | null;
  montantVerse: number;
  datePaiement: string | null; // ISO date
  modePaiement: string | null;

  // Calculés côté backend (attributs Eloquent), présents uniquement en lecture
  montantRestant?: number;
  nbJours?: number;
}

export type TrancheHoraire = '8-12' | '12-16' | '16-20';

export interface Creneau {
  id: number;
  reservationId: number;
  jour: string; // ISO date
  trancheHoraire: TrancheHoraire;
}
