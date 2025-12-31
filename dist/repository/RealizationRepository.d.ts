import type { Realization } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class RealizationRepository {
    create(data: Prisma.RealizationCreateInput): Promise<Realization>;
    findAll(): Promise<Realization[]>;
    findById(id: string): Promise<Realization | null>;
    update(id: string, data: Prisma.RealizationUpdateInput): Promise<Realization>;
    delete(id: string): Promise<Realization>;
}
declare const _default: RealizationRepository;
export default _default;
//# sourceMappingURL=RealizationRepository.d.ts.map