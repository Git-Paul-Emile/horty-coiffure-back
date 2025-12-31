import { prisma } from "../config/database.js";
class AppointmentSettingsRepository {
    async create(data) {
        try {
            const appointmentSettings = await prisma.appointmentSettings.create({ data });
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur lors de la création des paramètres de rendez-vous:', error);
            throw new Error('Impossible de créer les paramètres de rendez-vous');
        }
    }
    async findAll() {
        try {
            const appointmentSettings = await prisma.appointmentSettings.findMany({
                orderBy: { createdAt: 'desc' }
            });
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des paramètres de rendez-vous:', error);
            throw new Error('Impossible de récupérer les paramètres de rendez-vous');
        }
    }
    async findById(id) {
        try {
            const appointmentSettings = await prisma.appointmentSettings.findUnique({
                where: { id }
            });
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des paramètres de rendez-vous:', error);
            throw new Error('Impossible de récupérer les paramètres de rendez-vous');
        }
    }
    async update(id, data) {
        try {
            const appointmentSettings = await prisma.appointmentSettings.update({
                where: { id },
                data
            });
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour des paramètres de rendez-vous:', error);
            throw new Error('Impossible de mettre à jour les paramètres de rendez-vous');
        }
    }
    async delete(id) {
        try {
            const appointmentSettings = await prisma.appointmentSettings.delete({
                where: { id }
            });
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur lors de la suppression des paramètres de rendez-vous:', error);
            throw new Error('Impossible de supprimer les paramètres de rendez-vous');
        }
    }
}
export default new AppointmentSettingsRepository();
//# sourceMappingURL=AppointmentSettingsRepository.js.map