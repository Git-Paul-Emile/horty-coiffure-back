import type { Partner as Partenaire } from '@prisma/client';
import type { PartenaireCreate, PartenaireUpdate } from '../validators/partner.validator.js';
declare class PartnerService {
    private partnerRepository;
    create(data: PartenaireCreate): Promise<Partenaire>;
    findAll(): Promise<Partenaire[]>;
    findById(id: string): Promise<Partenaire | null>;
    update(id: string, data: PartenaireUpdate): Promise<Partenaire>;
    delete(id: string): Promise<Partenaire>;
}
declare const _default: PartnerService;
export default _default;
//# sourceMappingURL=PartnerService.d.ts.map