import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  reservation = signal<Reservation | null>(null);

  constructor(route: ActivatedRoute, private reservationService: ReservationService) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.reservationService.get(id.toString()).subscribe(res => this.reservation.set(res));
  }

  referenceFormatee(id: number): string {
    return 'RES-' + String(id).padStart(6, '0');
  }
}
