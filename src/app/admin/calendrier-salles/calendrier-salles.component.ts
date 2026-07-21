import { Component, signal } from '@angular/core';
import { SalleService } from '../../core/services/salle.service';
import { Salle, Creneau, TrancheHoraire } from '../../core/models';
 
@Component({
  selector: 'app-calendrier-salles',
  standalone: true,
  templateUrl: './calendrier-salles.component.html',
  styleUrl: './calendrier-salles.component.scss',
})
export class CalendrierSallesComponent {
  salles = signal<Salle[]>([]);
  salleSelectionnee = signal<number | null>(null);
  creneauxOccupes = signal<Creneau[]>([]);
 
  tranches: TrancheHoraire[] = ['8-12', '12-16', '16-20'];
  joursDuMois = Array.from({ length: 28 }, (_, i) => i + 1);
 
  constructor(private salleService: SalleService) {
    this.salleService.list().subscribe(res => {
      this.salles.set(res);
      if (res.length) this.selectionner(res[0].id);
    });
  }
 
  selectionner(salleId: number) {
    this.salleSelectionnee.set(salleId);
    this.salleService.disponibilites(salleId).subscribe(res => this.creneauxOccupes.set(res));
  }
 
  estOccupe(jour: number, tranche: TrancheHoraire): boolean {
    return this.creneauxOccupes().some(c => new Date(c.jour).getDate() === jour && c.trancheHoraire === tranche);
  }
}
