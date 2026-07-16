export interface Reservation {
  id: string;
  clientNom: string;
  salleId: string;
  creneauId: string;
  packId?: string;
  statut: 'en_attente' | 'confirmee' | 'annulee';
}
