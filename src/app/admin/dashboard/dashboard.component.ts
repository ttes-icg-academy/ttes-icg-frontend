import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  reservations = signal<Reservation[]>([]);

  enAttente = computed(() => this.reservations().filter(r => r.statut === 'en_attente_validation'));
  confirmees = computed(() => this.reservations().filter(r => r.statut === 'confirmee'));
  totalEncaisse = computed(() =>
    this.reservations().reduce((sum, r) => sum + (r.montantVerse ?? 0), 0)
  );
  totalRestant = computed(() =>
    this.reservations().reduce((sum, r) => sum + (r.montantRestant ?? 0), 0)
  );

  constructor(private reservationService: ReservationService) {
    this.reservationService.list().subscribe(res => this.reservations.set(res));
  }
}
