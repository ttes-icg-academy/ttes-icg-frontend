import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Creneau } from '../models/creneau.model';

@Injectable({ providedIn: 'root' })
export class MockCreneauService {
  private creneaux: Creneau[] = [];

  list() {
    return of(this.creneaux);
  }

  get(id: string) {
    return of(this.creneaux.find(creneau => creneau.id === id));
  }

  create(data: Partial<Creneau>) {
    const creneau = {
      id: crypto.randomUUID(),
      ...data
    } as Creneau;

    this.creneaux.push(creneau);

    return of(creneau);
  }
}
