import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { SalleService } from '../../core/services/salle.service';
import { PackService } from '../../core/services/pack.service';
import { ReservationService } from '../../core/services/reservation.service';
import { Salle, Pack, TrancheHoraire } from '../../core/models';

@Component({
  selector: 'app-formulaire-demande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-demande.component.html',
  styleUrl: './formulaire-demande.component.scss',
})
export class FormulaireDemandeComponent {

  private fb = inject(FormBuilder);
  private salleService = inject(SalleService);
  private packService = inject(PackService);
  private reservationService = inject(ReservationService);
  private router = inject(Router);

  salles = signal<Salle[]>([]);
  packs = signal<Pack[]>([]);
  envoiEnCours = signal(false);
  erreur = signal<string | null>(null);

  tranches: TrancheHoraire[] = ['8-12', '12-16', '16-20'];

  form = this.fb.group({
    clientNom: ['', Validators.required],
    clientEmail: ['', [Validators.required, Validators.email]],
    clientTelephone: [''],
    nbPlacesDemandees: [10, [Validators.required, Validators.min(1)]],
    salleId: [null as number | null, Validators.required],
    packId: [null as number | null],
    themeEvenement: ['', Validators.required],
    creneaux: this.fb.array([]),
  });

  sallesCompatibles = computed(() => {
    const nb = this.form.get('nbPlacesDemandees')?.value ?? 0;
    return this.salles().filter(s => s.capacite >= nb);
  });

  constructor() {
    this.salleService.list().subscribe(res => {
      console.log('Réponse salles:', res);
      this.salles.set(res);
    });
    this.packService.list().subscribe(res => this.packs.set(res));
  }

  get creneauxArray(): FormArray {
    return this.form.get('creneaux') as FormArray;
  }

  ajouterCreneau() {
    this.creneauxArray.push(
      this.fb.group({
        jour: ['', Validators.required],
        trancheHoraire: ['8-12', Validators.required],
      })
    );
  }

  retirerCreneau(index: number) {
    this.creneauxArray.removeAt(index);
  }

  envoyer() {
    if (this.form.invalid || this.creneauxArray.length === 0) {
      this.form.markAllAsTouched();
      this.erreur.set(
        'Merci de remplir tous les champs et d\'ajouter au moins un créneau.'
      );
      return;
    }

    this.envoiEnCours.set(true);
    this.erreur.set(null);

    this.reservationService.create(this.form.value as any).subscribe({
      next: (res) => {
        this.envoiEnCours.set(false);
        this.router.navigate(['/confirmation', res.id]);
      },
      error: () => {
        this.envoiEnCours.set(false);
        this.erreur.set(
          'Une erreur est survenue. Vérifiez vos informations et réessayez.'
        );
      },
    });
  }
}
