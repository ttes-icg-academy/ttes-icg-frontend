# Interfaces TypeScript partagées — à définir en Semaine 1

À déduire du contrat API backend, à placer ensuite dans `src/app/shared/models/`.

```typescript
export interface Salle {
  id: number;
  nom: string;
  capacite: number;
}

export interface Reservation {
  id: number;
  salleId: number;
  clientNom: string;
  themeEvenement: string;
  statut: 'en_attente' | 'confirmee' | 'annulee';
}

export interface Creneau {
  date: string; // ISO
  tranche: '8-12' | '12-16' | '16-20';
}

export interface Pack {
  id: number;
  nom: string;
  nbSeances: number;
  prix: number;
}
```

> À mettre à jour ensemble (Étudiants A, B, C, D) dès que le contrat API est stabilisé.
