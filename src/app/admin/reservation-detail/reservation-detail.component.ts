import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../../core/services/reservation.service';
import { Reservation } from '../../core/models';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.scss',
})
export class ReservationDetailComponent {
  private fb = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private route = inject(ActivatedRoute);

  reservation = signal<Reservation | null>(null);

  formValidation = this.fb.group({
    montantTotal: [0, [Validators.required, Validators.min(0)]],
  });

  formPaiement = this.fb.group({
    montant: [0, [Validators.required, Validators.min(1)]],
    datePaiement: [''],
    modePaiement: [''],
  });

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.charger(id);
  }

  private charger(id: number) {
    this.reservationService.get(id).subscribe(res => {
      this.reservation.set(res);
      this.formValidation.patchValue({ montantTotal: res.montantTotal ?? 0 });
    });
  }

  valider() {
    const r = this.reservation();
    if (!r || this.formValidation.invalid) return;

    this.reservationService
      .valider(r.id, this.formValidation.value.montantTotal!)
      .subscribe(res => this.reservation.set(res));
  }

  annuler() {
    const r = this.reservation();
    if (!r) return;
    this.reservationService.annuler(r.id).subscribe(res => this.reservation.set(res));
  }

  ajouterPaiement() {
    const r = this.reservation();
    if (!r || this.formPaiement.invalid) return;

    this.reservationService
      .ajouterPaiement(r.id, this.formPaiement.value as any)
      .subscribe(res => {
        this.reservation.set(res);
        this.formPaiement.reset({ montant: 0, datePaiement: '', modePaiement: '' });
      });
  }
}
