import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Pack } from '../models/pack.model';

@Injectable({ providedIn: 'root' })
export class PackService {
  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Pack[]>('/packs');
  }

  get(id: string) {
    return this.api.get<Pack>(`/packs/${id}`);
  }

  create(data: Partial<Pack>) {
    return this.api.post<Pack>('/packs', data);
  }
}
