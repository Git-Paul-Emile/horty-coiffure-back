import appointmentSettingsRepository from '../repository/AppointmentSettingsRepository.js';
import { ParametresRendezVousCreateSchema, ParametresRendezVousUpdateSchema } from '../validators/appointmentSettings.validator.js';
class AppointmentSettingsService {
    appointmentSettingsRepository = appointmentSettingsRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = ParametresRendezVousCreateSchema.parse(data);
            // Vérifier si les paramètres existent déjà
            const existingSettings = await this.appointmentSettingsRepository.findById('appointment_settings');
            if (existingSettings) {
                throw new Error('Les paramètres de rendez-vous existent déjà');
            }
            const dataToCreate = {
                calendlyUrl: validatedData.urlCalendly,
                urgencyMode: validatedData.modeUrgence,
                urgencyMessage: validatedData.messageUrgence
            };
            const appointmentSettings = await this.appointmentSettingsRepository.create(dataToCreate);
            console.log(`Paramètres de rendez-vous créés avec succès`);
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création des paramètres de rendez-vous:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const appointmentSettings = await this.appointmentSettingsRepository.findAll();
            console.log(`${appointmentSettings.length} paramètres de rendez-vous récupérés`);
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des paramètres de rendez-vous:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const appointmentSettings = await this.appointmentSettingsRepository.findById(id);
            if (!appointmentSettings) {
                console.log(`Paramètres de rendez-vous avec l'ID ${id} non trouvés`);
                return null;
            }
            console.log(`Paramètres de rendez-vous trouvés`);
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des paramètres de rendez-vous:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = ParametresRendezVousUpdateSchema.parse(data);
            // Vérifier si les paramètres existent
            const existingSettings = await this.appointmentSettingsRepository.findById(id);
            if (!existingSettings) {
                throw new Error('Paramètres de rendez-vous non trouvés');
            }
            const dataToUpdate = {};
            if (validatedData.urlCalendly !== undefined)
                dataToUpdate.calendlyUrl = validatedData.urlCalendly;
            if (validatedData.modeUrgence !== undefined)
                dataToUpdate.urgencyMode = validatedData.modeUrgence;
            if (validatedData.messageUrgence !== undefined)
                dataToUpdate.urgencyMessage = validatedData.messageUrgence;
            const appointmentSettings = await this.appointmentSettingsRepository.update(id, dataToUpdate);
            console.log(`Paramètres de rendez-vous mis à jour avec succès`);
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour des paramètres de rendez-vous:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si les paramètres existent
            const existingSettings = await this.appointmentSettingsRepository.findById(id);
            if (!existingSettings) {
                throw new Error('Paramètres de rendez-vous non trouvés');
            }
            const appointmentSettings = await this.appointmentSettingsRepository.delete(id);
            console.log(`Paramètres de rendez-vous supprimés avec succès`);
            return appointmentSettings;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression des paramètres de rendez-vous:', error);
            throw error;
        }
    }
}
export default new AppointmentSettingsService();
//# sourceMappingURL=AppointmentSettingsService.js.map