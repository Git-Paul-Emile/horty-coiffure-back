import type { Realization as Realisation } from '@prisma/client';
import type { RealisationCreate, RealisationUpdate } from '../validators/realization.validator.js';
declare class RealizationService {
    private realizationRepository;
    create(data: RealisationCreate): Promise<Realisation>;
    findAll(): Promise<Realisation[]>;
    findById(id: string): Promise<Realisation | null>;
    update(id: string, data: RealisationUpdate): Promise<Realisation>;
    delete(id: string): Promise<Realisation>;
}
declare const _default: RealizationService;
export default _default;
//# sourceMappingURL=RealizationService.d.ts.map