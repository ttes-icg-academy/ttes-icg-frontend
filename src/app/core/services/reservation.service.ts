import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Reservation[]>('/reservations');
  }

  get(id: string) {
    return this.api.get<Reservation>(`/reservations/${id}`);
  }

  create(data: Partial<Reservation>) {
    return this.api.post<Reservation>('/reservations', data);
  }
}
