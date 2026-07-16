
import { environment } from '../environments/environment';
import { MockReservationService } from './core/services/mock-Reservation.service';

export const appConfig = {
  providers: [
    ...(environment.useMock ? [MockReservationService] : []),
    // répétez le même schéma pour SalleService, PackService, CreneauService
  ],
};
