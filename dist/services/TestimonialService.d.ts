import type { Testimonial as Temoignage } from '@prisma/client';
import type { TemoignageCreate, TemoignageUpdate } from '../validators/testimonial.validator.js';
declare class TestimonialService {
    private testimonialRepository;
    create(data: TemoignageCreate): Promise<Temoignage>;
    findAll(): Promise<Temoignage[]>;
    findById(id: string): Promise<Temoignage | null>;
    update(id: string, data: TemoignageUpdate): Promise<Temoignage>;
    delete(id: string): Promise<Temoignage>;
}
declare const _default: TestimonialService;
export default _default;
//# sourceMappingURL=TestimonialService.d.ts.map