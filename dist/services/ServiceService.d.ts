import type { Service } from '@prisma/client';
import type { ServiceCreate, ServiceUpdate } from '../validators/service.validator.js';
declare class ServiceService {
    private serviceRepository;
    create(data: ServiceCreate): Promise<Service>;
    findAll(): Promise<Service[]>;
    findById(id: string): Promise<Service | null>;
    update(id: string, data: ServiceUpdate): Promise<Service>;
    delete(id: string): Promise<Service>;
}
declare const _default: ServiceService;
export default _default;
//# sourceMappingURL=ServiceService.d.ts.map