import { user, salle, pack, Reservation, creneau } from '../models';
export const MOCK_USERS: user[] = [
  { id: 1, name: 'Jean Client', email: 'jean@mail.com', telephone: '699000001', role: 'client' },
  { id: 2, name: 'Admin TTES', email: 'admin@ttes.com', telephone: '699000002', role: 'admin' },
];

export const MOCK_SALLES: salle[] = [
  { id: 1, nom: 'Salle A', capacite: 30 },
  { id: 2, nom: 'Salle B', capacite: 50 },
];

export const MOCK_PACKS: pack[] = [
  { id: 1, nom: 'Pack10', nbPlaces: 10, prixTotalIndicatif: 30000 },
  { id: 2, nom: 'Pack20', nbPlaces: 20, prixTotalIndicatif: 28000 },
  { id: 3, nom: 'Pack30', nbPlaces: 30, prixTotalIndicatif: 25000 },
  { id: 4, nom: 'Pack40', nbPlaces: 40, prixTotalIndicatif: 23000 },
  { id: 5, nom: 'Autre', nbPlaces: 0, prixTotalIndicatif: 0 },
];

export const MOCK_RESERVATIONS: reservation[] = [
  {
    id: 1,
    clientId: 1,
    salleId: 1,
    packId: 1,
    utilisateurId: null,
    themeEvenement: 'Formation Excel',
    nbPlacesDemandees: 10,
    statut: 'en_attente_validation',
    montantTotal: null,
    montantVerse: 0,
    datePaiement: null,
    modePaiement: null,
  },
];

export const MOCK_CRENEAUX: creneau[] = [
  { id: 1, reservationId: 1, jour: '2026-08-01', trancheHoraire: '8-12' },
];

