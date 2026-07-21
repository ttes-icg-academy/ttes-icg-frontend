import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Pack } from '../models/pack.model';

@Injectable({ providedIn: 'root' })
export class MockPackService {
  private packs: Pack[] = [];

  list() {
    return of(this.packs);
  }

  get(id: number) {
    return of(this.packs.find(pack => pack.id === id));
  }

  create(data: Partial<Pack>) {
    const pack = {
      id: crypto.randomUUID(),
      ...data
    } as Pack;

    this.packs.push(pack);

    return of(pack);
  }
}
