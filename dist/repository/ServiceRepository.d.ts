import type { Service } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class ServiceRepository {
    create(data: Prisma.ServiceCreateInput): Promise<Service>;
    findAll(): Promise<Service[]>;
    findById(id: string): Promise<Service | null>;
    update(id: string, data: Prisma.ServiceUpdateInput): Promise<Service>;
    delete(id: string): Promise<Service>;
}
declare const _default: ServiceRepository;
export default _default;
//# sourceMappingURL=ServiceRepository.d.ts.map