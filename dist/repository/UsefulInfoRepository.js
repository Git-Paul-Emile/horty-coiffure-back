import { prisma } from "../config/database.js";
class UsefulInfoRepository {
    async create(data) {
        try {
            const usefulInfo = await prisma.usefulInfo.create({ data });
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur lors de la création de l\'info utile:', error);
            throw new Error('Impossible de créer l\'info utile');
        }
    }
    async findAll() {
        try {
            const usefulInfos = await prisma.usefulInfo.findMany({
                where: { status: 'PUBLISHED' },
                orderBy: { createdAt: 'desc' }
            });
            return usefulInfos;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des infos utiles:', error);
            throw new Error('Impossible de récupérer les infos utiles');
        }
    }
    async findById(id) {
        try {
            const usefulInfo = await prisma.usefulInfo.findUnique({
                where: { id }
            });
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'info utile:', error);
            throw new Error('Impossible de récupérer l\'info utile');
        }
    }
    async update(id, data) {
        try {
            const usefulInfo = await prisma.usefulInfo.update({
                where: { id },
                data
            });
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour de l\'info utile:', error);
            throw new Error('Impossible de mettre à jour l\'info utile');
        }
    }
    async delete(id) {
        try {
            const usefulInfo = await prisma.usefulInfo.update({
                where: { id },
                data: { status: 'DRAFT' }
            });
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur lors de la suppression de l\'info utile:', error);
            throw new Error('Impossible de supprimer l\'info utile');
        }
    }
}
export default new UsefulInfoRepository();
//# sourceMappingURL=UsefulInfoRepository.js.map