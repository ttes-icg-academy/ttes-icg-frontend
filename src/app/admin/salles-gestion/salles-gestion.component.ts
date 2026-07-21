import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SalleService } from '../../core/services/salle.service';
import { Salle } from '../../core/models';

@Component({
  selector: 'app-salles-gestion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './salles-gestion.component.html',
  styleUrl: './salles-gestion.component.scss',
})
export class SallesGestionComponent {
  private fb = inject(FormBuilder);
  private salleService = inject(SalleService);

  salles = signal<Salle[]>([]);

  form = this.fb.group({
    nom: ['', Validators.required],
    capacite: [10, [Validators.required, Validators.min(1)]],
  });

  constructor() {
    this.charger();
  }

  private charger() {
    this.salleService.list().subscribe(res => this.salles.set(res));
  }

  ajouter() {
    if (this.form.invalid) return;
    this.salleService.create(this.form.value as any).subscribe(() => {
      this.form.reset({ nom: '', capacite: 10 });
      this.charger();
    });
  }
}
