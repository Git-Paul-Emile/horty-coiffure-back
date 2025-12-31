import type { AdminSettings as ParametresAdmin } from '@prisma/client';
import type { ParametresAdminCreate, ParametresAdminUpdate } from '../validators/adminSettings.validator.js';
declare class AdminSettingsService {
    private adminSettingsRepository;
    create(data: ParametresAdminCreate): Promise<ParametresAdmin>;
    findAll(): Promise<ParametresAdmin[]>;
    findById(id: string): Promise<ParametresAdmin | null>;
    update(id: string, data: ParametresAdminUpdate): Promise<ParametresAdmin>;
    delete(id: string): Promise<ParametresAdmin>;
}
declare const _default: AdminSettingsService;
export default _default;
//# sourceMappingURL=AdminSettingsService.d.ts.map