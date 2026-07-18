export type RoleUtilisateur = 'client' | 'admin';
export interface user {
    id: number;
    name: string;
    email: string;
    telephone: string | null;
    role: RoleUtilisateur;   
}

export interface sale {
    id: number;
    nom: string;
    capacite: number;
}

export interface pack{
    id: number;
    nom: string; // pack10, pack20, pack30, pack40, Autre
    nbplaces: number | null;
    prixTotalIdicatif: number | null;
}

export type statuReservation = 'en attentevalidation' |'confirmee' |'anullee'

export interface Reservation {
    id: number;
    clientId: number; // reference un user avec role ='client'
    salleId: number;
    packId: number | null;
    utilisateurId :number | null; // reference un user avec role = 'admin'
    themeEvenement: string;
    nbplaceDemandees: number;
    statu: statuReservation;


// paiement(un seul paiement total, pas de versements multiples en base)
montantTotal: number;
montantverse: number;
datepaiement: string | null; // ISO date
modepaiement: string | null;


// calculer cote backend (attributs Eloquent), presents uniquement en lecture
montantRestant: number;
nbJours?: number;

}

export type TrancheHoraire = '8-12' | '12-16' | '16-20';


export interface Creneau {
  id: number;
  reservationId: number;
  jour: string; // ISO date
  trancheHoraire: TrancheHoraire;
 }