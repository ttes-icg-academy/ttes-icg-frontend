# TTES-ICG — Frontend (Angular)

Interface web de l'application de gestion et d'allocation des salles de TTES-ICG Academy.

## Stack
- Angular
- TypeScript / RxJS
- Chart.js ou ngx-charts (dashboard admin)

## Prérequis
- Node.js LTS, npm
- Angular CLI (`npm install -g @angular/cli`)

## Démarrage rapide (via Docker, recommandé)
Ce dépôt est conçu pour être cloné **à côté** des dépôts `ttes-icg-backend` et `ttes-icg-infra` :

```
mon-dossier-projet/
├── ttes-icg-backend/
├── ttes-icg-frontend/
└── ttes-icg-infra/
```

Suivez ensuite les instructions du README du dépôt `ttes-icg-infra`.

## Démarrage sans Docker (dev local)
```bash
npm install
ng serve
```

## Convention de branches
- `main` : code stable
- `develop` : intégration
- `feature/nom-de-la-tache` : une branche par tâche, PR vers `develop`

## Répartition des modules (équipe frontend)
| Module | Responsable |
|---|---|
| Réservation & calendrier (côté client) | Étudiant C |
| Administration & paiements (dashboard) | Étudiant D |

## Structure prévue
```
src/app/
├── core/            # services partagés, guards, interceptors
├── shared/           # composants et models (interfaces TS) partagés
├── reservation/       # module Étudiant C (lazy-loaded)
└── admin/             # module Étudiant D (lazy-loaded)
```

## Règle importante
Tant que le contrat API (voir `ttes-icg-backend/docs/api-contract.md`) n'est pas encore branché en réel, développez contre des données mockées (fichiers JSON locaux ou intercepteur HTTP) pour ne jamais attendre le backend.
