import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  MOCK_RESERVATIONS,
  MOCK_SALLES,
  MOCK_PACKS,
  MOCK_CRENEAUX
} from './mock-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      reservations: MOCK_RESERVATIONS,
      salles: MOCK_SALLES,
      packs: MOCK_PACKS,
      creneaux: MOCK_CRENEAUX,
    };
  }
}
