import type { Partner } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class PartnerRepository {
    create(data: Prisma.PartnerCreateInput): Promise<Partner>;
    findAll(): Promise<Partner[]>;
    findById(id: string): Promise<Partner | null>;
    update(id: string, data: Prisma.PartnerUpdateInput): Promise<Partner>;
    delete(id: string): Promise<Partner>;
}
declare const _default: PartnerRepository;
export default _default;
//# sourceMappingURL=PartnerRepository.d.ts.map