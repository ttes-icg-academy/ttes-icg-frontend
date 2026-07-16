import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Reservation } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class MockReservationService {
  private reservations: Reservation[] = [];

  list() {
    return of(this.reservations);
  }

  get(id: string) {
    return of(this.reservations.find(reservation => reservation.id === id));
  }

  create(data: Partial<Reservation>) {
    const reservation = {
      id: crypto.randomUUID(),
      statut: 'en_attente',
      ...data
    } as Reservation;

    this.reservations.push(reservation);

    return of(reservation);
  }
}
