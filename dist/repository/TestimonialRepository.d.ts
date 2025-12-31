import type { Testimonial } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class TestimonialRepository {
    create(data: Prisma.TestimonialCreateInput): Promise<Testimonial>;
    findAll(): Promise<Testimonial[]>;
    findById(id: string): Promise<Testimonial | null>;
    update(id: string, data: Prisma.TestimonialUpdateInput): Promise<Testimonial>;
    delete(id: string): Promise<Testimonial>;
}
declare const _default: TestimonialRepository;
export default _default;
//# sourceMappingURL=TestimonialRepository.d.ts.map