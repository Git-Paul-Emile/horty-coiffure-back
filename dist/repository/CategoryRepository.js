import { prisma } from "../config/database.js";
class CategoryRepository {
    async create(data) {
        try {
            const category = await prisma.category.create({ data });
            return category;
        }
        catch (error) {
            console.error('Erreur lors de la création de la catégorie:', error);
            throw new Error('Impossible de créer la catégorie');
        }
    }
    async findAll() {
        try {
            const categories = await prisma.category.findMany({
                where: { status: 'ACTIVE' },
                orderBy: { createdAt: 'desc' }
            });
            return categories;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
            throw new Error('Impossible de récupérer les catégories');
        }
    }
    async findById(id) {
        try {
            const category = await prisma.category.findUnique({
                where: { id }
            });
            return category;
        }
        catch (error) {
            console.error('Erreur lors de la récupération de la catégorie:', error);
            throw new Error('Impossible de récupérer la catégorie');
        }
    }
    async update(id, data) {
        try {
            const category = await prisma.category.update({
                where: { id },
                data
            });
            return category;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour de la catégorie:', error);
            throw new Error('Impossible de mettre à jour la catégorie');
        }
    }
    async delete(id) {
        try {
            const category = await prisma.category.update({
                where: { id },
                data: { status: 'INACTIVE' }
            });
            return category;
        }
        catch (error) {
            console.error('Erreur lors de la suppression de la catégorie:', error);
            throw new Error('Impossible de supprimer la catégorie');
        }
    }
}
export default new CategoryRepository();
//# sourceMappingURL=CategoryRepository.js.map