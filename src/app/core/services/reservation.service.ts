import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../models';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Reservation[]>('/reservations');
  }

  get(id: string | number) {
    return this.api.get<Reservation>(`/reservations/${id}`);
  }

  valider(id: number, montantTotal: number) {
    return this.api.patch<Reservation>(`/reservations/${id}`, {
      statut: 'confirmee',
      montantTotal,
    });
  }

  annuler(id: number) {
    return this.api.patch<Reservation>(`/reservations/${id}`, {
      statut: 'annulee',
    });
  }

  ajouterPaiement(id: number, paiement: { montant: number; datePaiement: string; modePaiement: string }) {
    return this.api.patch<Reservation>(`/reservations/${id}`, paiement);
  }

  create(data: Partial<Reservation>) {
    return this.api.post<Reservation>('/reservations', data);
  }
}
