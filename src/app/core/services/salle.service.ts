import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Creneau, Salle } from '../models';

@Injectable({ providedIn: 'root' })
export class SalleService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Salle[]>('/salles');
  }

  get(id: string | number) {
    return this.api.get<Salle>(`/salles/${id}`);
  }

  disponibilites(id: string | number) {
    return this.api.get<Creneau[]>(`/salles/${id}/disponibilites`);
  }

  create(data: Partial<Salle>) {
    return this.api.post<Salle>('/salles', data);
  }
}
