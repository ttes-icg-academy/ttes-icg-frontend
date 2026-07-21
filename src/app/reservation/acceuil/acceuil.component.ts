import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GrilleMotifComponent } from '../../../shared/grille-motif/grille-motif.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [GrilleMotifComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  constructor(private router: Router) {}

  demarrerDemande() {
    this.router.navigate(['/demande']);
  }
}
