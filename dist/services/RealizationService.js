import realizationRepository from '../repository/RealizationRepository.js';
import { Status } from '@prisma/client';
import { RealisationCreateSchema, RealisationUpdateSchema } from '../validators/realization.validator.js';
class RealizationService {
    realizationRepository = realizationRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = RealisationCreateSchema.parse(data);
            const dataToCreate = {
                imageUrl: validatedData.image,
                service: { connect: { id: validatedData.service } },
                caption: validatedData.legende,
                title: validatedData.titre,
                status: validatedData.archive ? Status.INACTIVE : Status.ACTIVE
            };
            const realization = await this.realizationRepository.create(dataToCreate);
            console.log(`Réalisation créée avec succès`);
            return realization;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création de la réalisation:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const realizations = await this.realizationRepository.findAll();
            console.log(`${realizations.length} réalisations récupérées`);
            return realizations;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des réalisations:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const realization = await this.realizationRepository.findById(id);
            if (!realization) {
                console.log(`Réalisation avec l'ID ${id} non trouvée`);
                return null;
            }
            console.log(`Réalisation trouvée`);
            return realization;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération de la réalisation:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = RealisationUpdateSchema.parse(data);
            // Vérifier si la réalisation existe
            const existingRealization = await this.realizationRepository.findById(id);
            if (!existingRealization) {
                throw new Error('Réalisation non trouvée');
            }
            const dataToUpdate = {};
            if (validatedData.image !== undefined)
                dataToUpdate.imageUrl = validatedData.image;
            if (validatedData.service !== undefined)
                dataToUpdate.serviceId = validatedData.service;
            if (validatedData.legende !== undefined)
                dataToUpdate.caption = validatedData.legende;
            if (validatedData.titre !== undefined)
                dataToUpdate.title = validatedData.titre;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? Status.INACTIVE : Status.ACTIVE;
            const realization = await this.realizationRepository.update(id, dataToUpdate);
            console.log(`Réalisation mise à jour avec succès`);
            return realization;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour de la réalisation:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si la réalisation existe
            const existingRealization = await this.realizationRepository.findById(id);
            if (!existingRealization) {
                throw new Error('Réalisation non trouvée');
            }
            if (existingRealization.status === 'INACTIVE') {
                throw new Error('La réalisation est déjà archivée');
            }
            const realization = await this.realizationRepository.delete(id);
            console.log(`Réalisation archivée avec succès`);
            return realization;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression de la réalisation:', error);
            throw error;
        }
    }
}
export default new RealizationService();
//# sourceMappingURL=RealizationService.js.map