import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation, StatutReservation } from '../../core/models';

@Component({
  selector: 'app-reservations-liste',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservations-liste.component.html',
  styleUrl: './reservations-liste.component.scss',
})
export class ReservationsListeComponent {
  reservations = signal<Reservation[]>([]);
  filtreStatut = signal<StatutReservation | 'toutes'>('toutes');

  reservationsFiltrees = computed(() => {
    const filtre = this.filtreStatut();
    const liste = this.reservations();
    return filtre === 'toutes' ? liste : liste.filter(r => r.statut === filtre);
  });

  constructor(private reservationService: ReservationService) {
    this.reservationService.list().subscribe(res => this.reservations.set(res));
  }

  changerFiltre(statut: StatutReservation | 'toutes') {
    this.filtreStatut.set(statut);
  }
}
