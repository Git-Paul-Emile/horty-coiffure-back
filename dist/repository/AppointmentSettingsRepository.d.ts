import type { AppointmentSettings } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class AppointmentSettingsRepository {
    create(data: Prisma.AppointmentSettingsCreateInput): Promise<AppointmentSettings>;
    findAll(): Promise<AppointmentSettings[]>;
    findById(id: string): Promise<AppointmentSettings | null>;
    update(id: string, data: Prisma.AppointmentSettingsUpdateInput): Promise<AppointmentSettings>;
    delete(id: string): Promise<AppointmentSettings>;
}
declare const _default: AppointmentSettingsRepository;
export default _default;
//# sourceMappingURL=AppointmentSettingsRepository.d.ts.map