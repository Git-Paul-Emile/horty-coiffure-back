import { prisma } from "../config/database.js";
class FeedbackRepository {
    async create(data) {
        try {
            const feedback = await prisma.feedback.create({ data });
            return feedback;
        }
        catch (error) {
            console.error('Erreur lors de la création du feedback:', error);
            throw new Error('Impossible de créer le feedback');
        }
    }
    async findAll() {
        try {
            const feedbacks = await prisma.feedback.findMany({
                where: { status: { not: 'ARCHIVED' } },
                orderBy: { createdAt: 'desc' }
            });
            return feedbacks;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des feedbacks:', error);
            throw new Error('Impossible de récupérer les feedbacks');
        }
    }
    async findById(id) {
        try {
            const feedback = await prisma.feedback.findUnique({
                where: { id }
            });
            return feedback;
        }
        catch (error) {
            console.error('Erreur lors de la récupération du feedback:', error);
            throw new Error('Impossible de récupérer le feedback');
        }
    }
    async update(id, data) {
        try {
            const feedback = await prisma.feedback.update({
                where: { id },
                data
            });
            return feedback;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour du feedback:', error);
            throw new Error('Impossible de mettre à jour du feedback');
        }
    }
    async delete(id) {
        try {
            const feedback = await prisma.feedback.update({
                where: { id },
                data: { status: 'ARCHIVED' }
            });
            return feedback;
        }
        catch (error) {
            console.error('Erreur lors de la suppression du feedback:', error);
            throw new Error('Impossible de supprimer le feedback');
        }
    }
}
export default new FeedbackRepository();
//# sourceMappingURL=FeedbackRepository.js.map