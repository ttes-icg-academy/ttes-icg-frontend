import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SALLES } from './mock-data';
import { Salle } from '../models/salle.model';

@Injectable({ providedIn: 'root' })
export class MockSalleService {
  private salles: Salle[] = SALLES;

  list() {
    return of(this.salles);
  }

  get(id: string) {
    return of(this.salles.find(salle => salle.id === id));
  }

  create(data: Partial<Salle>) {
    const salle = {
      id: crypto.randomUUID(),
      ...data
    } as Salle;

    this.salles.push(salle);

    return of(salle);
  }
}
