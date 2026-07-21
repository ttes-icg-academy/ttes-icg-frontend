import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(path: string) {
    return this.http
      .get<{ data: T }>(`${this.baseUrl}${path}`)
      .pipe(
        map(response => response.data)
      );
  }

  post<T>(path: string, body: unknown) {
    return this.http
      .post<{ data: T }>(`${this.baseUrl}${path}`, body)
      .pipe(
        map(response => response.data)
      );
  }

  patch<T>(path: string, body: unknown) {
    return this.http
      .patch<{ data: T }>(`${this.baseUrl}${path}`, body)
      .pipe(
        map(response => response.data)
      );
  }

  delete<T>(path: string) {
    return this.http
      .delete<{ data: T }>(`${this.baseUrl}${path}`)
      .pipe(
        map(response => response.data)
      );
  }
}
