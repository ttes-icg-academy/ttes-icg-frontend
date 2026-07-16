
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Reservation } from '../models';
import { MOCK_RESERVATIONS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class MockReservationService {
  private data: Reservation[] = [...MOCK_RESERVATIONS];

  list() {
    return of(this.data).pipe(delay(300));
  }

  get(id: number) {
    const item = this.data.find(r => r.id === id);
    return of(item as Reservation).pipe(delay(300));
  }

  create(data: Partial<Reservation>) {
    const newItem = {
      id: this.data.length + 1,
      montantVerse: 0,
      statut: 'en_attente_validation',
      ...data,
    } as Reservation;
    this.data.push(newItem);
    return of(newItem).pipe(delay(300));
  }

  valider(id: number, montantTotal: number) {
    const item = this.data.find(r => r.id === id)!;
    item.statut = 'confirmee';
    item.montantTotal = montantTotal;
    return of(item).pipe(delay(300));
  }
}
