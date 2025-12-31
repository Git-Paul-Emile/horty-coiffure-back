import type { Feedback as Commentaire } from '@prisma/client';
import type { CommentaireCreate, CommentaireUpdate } from '../validators/feedback.validator.js';
declare class FeedbackService {
    private feedbackRepository;
    create(data: CommentaireCreate): Promise<Commentaire>;
    findAll(): Promise<Commentaire[]>;
    findById(id: string): Promise<Commentaire | null>;
    update(id: string, data: CommentaireUpdate): Promise<Commentaire>;
    delete(id: string): Promise<Commentaire>;
}
declare const _default: FeedbackService;
export default _default;
//# sourceMappingURL=FeedbackService.d.ts.map