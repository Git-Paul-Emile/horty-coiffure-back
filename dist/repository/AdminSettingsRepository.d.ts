import type { AdminSettings } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class AdminSettingsRepository {
    create(data: Prisma.AdminSettingsCreateInput): Promise<AdminSettings>;
    findAll(): Promise<AdminSettings[]>;
    findById(id: string): Promise<AdminSettings | null>;
    update(id: string, data: Prisma.AdminSettingsUpdateInput): Promise<AdminSettings>;
    delete(id: string): Promise<AdminSettings>;
}
declare const _default: AdminSettingsRepository;
export default _default;
//# sourceMappingURL=AdminSettingsRepository.d.ts.map