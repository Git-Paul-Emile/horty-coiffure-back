import type { Feedback } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class FeedbackRepository {
    create(data: Prisma.FeedbackCreateInput): Promise<Feedback>;
    findAll(): Promise<Feedback[]>;
    findById(id: string): Promise<Feedback | null>;
    update(id: string, data: Prisma.FeedbackUpdateInput): Promise<Feedback>;
    delete(id: string): Promise<Feedback>;
}
declare const _default: FeedbackRepository;
export default _default;
//# sourceMappingURL=FeedbackRepository.d.ts.map