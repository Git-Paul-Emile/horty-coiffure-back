import type { AppointmentSettings as ParametresRendezVous } from '@prisma/client';
import type { ParametresRendezVousCreate, ParametresRendezVousUpdate } from '../validators/appointmentSettings.validator.js';
declare class AppointmentSettingsService {
    private appointmentSettingsRepository;
    create(data: ParametresRendezVousCreate): Promise<ParametresRendezVous>;
    findAll(): Promise<ParametresRendezVous[]>;
    findById(id: string): Promise<ParametresRendezVous | null>;
    update(id: string, data: ParametresRendezVousUpdate): Promise<ParametresRendezVous>;
    delete(id: string): Promise<ParametresRendezVous>;
}
declare const _default: AppointmentSettingsService;
export default _default;
//# sourceMappingURL=AppointmentSettingsService.d.ts.map