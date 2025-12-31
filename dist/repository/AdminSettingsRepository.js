import { prisma } from "../config/database.js";
class AdminSettingsRepository {
    async create(data) {
        try {
            const adminSettings = await prisma.adminSettings.create({ data });
            return adminSettings;
        }
        catch (error) {
            console.error('Erreur lors de la création des paramètres admin:', error);
            throw new Error('Impossible de créer les paramètres admin');
        }
    }
    async findAll() {
        try {
            const adminSettings = await prisma.adminSettings.findMany({
                orderBy: { createdAt: 'desc' }
            });
            return adminSettings;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des paramètres admin:', error);
            throw new Error('Impossible de récupérer les paramètres admin');
        }
    }
    async findById(id) {
        try {
            const adminSettings = await prisma.adminSettings.findUnique({
                where: { id }
            });
            return adminSettings;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des paramètres admin:', error);
            throw new Error('Impossible de récupérer les paramètres admin');
        }
    }
    async update(id, data) {
        try {
            const adminSettings = await prisma.adminSettings.update({
                where: { id },
                data
            });
            return adminSettings;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour des paramètres admin:', error);
            throw new Error('Impossible de mettre à jour les paramètres admin');
        }
    }
    async delete(id) {
        try {
            const adminSettings = await prisma.adminSettings.delete({
                where: { id }
            });
            return adminSettings;
        }
        catch (error) {
            console.error('Erreur lors de la suppression des paramètres admin:', error);
            throw new Error('Impossible de supprimer les paramètres admin');
        }
    }
}
export default new AdminSettingsRepository();
//# sourceMappingURL=AdminSettingsRepository.js.map