import feedbackRepository from '../repository/FeedbackRepository.js';
import { FeedbackStatus } from '@prisma/client';
import { CommentaireCreateSchema, CommentaireUpdateSchema } from '../validators/feedback.validator.js';
class FeedbackService {
    feedbackRepository = feedbackRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = CommentaireCreateSchema.parse(data);
            const dataToCreate = {
                rating: validatedData.note,
                comment: validatedData.commentaire,
                status: validatedData.archive ? FeedbackStatus.ARCHIVED : FeedbackStatus.READ
            };
            const feedback = await this.feedbackRepository.create(dataToCreate);
            console.log(`Commentaire créé avec succès`);
            return feedback;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création du commentaire:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const feedbacks = await this.feedbackRepository.findAll();
            console.log(`${feedbacks.length} commentaires récupérés`);
            return feedbacks;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des commentaires:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const feedback = await this.feedbackRepository.findById(id);
            if (!feedback) {
                console.log(`Commentaire avec l'ID ${id} non trouvé`);
                return null;
            }
            console.log(`Commentaire trouvé`);
            return feedback;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération du commentaire:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = CommentaireUpdateSchema.parse(data);
            // Vérifier si le commentaire existe
            const existingFeedback = await this.feedbackRepository.findById(id);
            if (!existingFeedback) {
                throw new Error('Commentaire non trouvé');
            }
            const dataToUpdate = {};
            if (validatedData.note !== undefined)
                dataToUpdate.rating = validatedData.note;
            if (validatedData.commentaire !== undefined)
                dataToUpdate.comment = validatedData.commentaire;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? FeedbackStatus.ARCHIVED : FeedbackStatus.READ;
            const feedback = await this.feedbackRepository.update(id, dataToUpdate);
            console.log(`Commentaire mis à jour avec succès`);
            return feedback;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour du commentaire:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si le commentaire existe
            const existingFeedback = await this.feedbackRepository.findById(id);
            if (!existingFeedback) {
                throw new Error('Commentaire non trouvé');
            }
            if (existingFeedback.status === 'ARCHIVED') {
                throw new Error('Le commentaire est déjà archivé');
            }
            const feedback = await this.feedbackRepository.delete(id);
            console.log(`Commentaire archivé avec succès`);
            return feedback;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression du commentaire:', error);
            throw error;
        }
    }
}
export default new FeedbackService();
//# sourceMappingURL=FeedbackService.js.map