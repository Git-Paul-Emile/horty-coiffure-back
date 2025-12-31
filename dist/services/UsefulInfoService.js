import usefulInfoRepository from '../repository/UsefulInfoRepository.js';
import { UsefulInfoStatus } from '@prisma/client';
import { InfoUtileCreateSchema, InfoUtileUpdateSchema } from '../validators/usefulInfo.validator.js';
class UsefulInfoService {
    usefulInfoRepository = usefulInfoRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = InfoUtileCreateSchema.parse(data);
            // Vérifier si une info utile avec le même titre existe déjà
            const existingUsefulInfos = await this.usefulInfoRepository.findAll();
            const duplicate = existingUsefulInfos.find(u => u.title.toLowerCase() === validatedData.titre.toLowerCase() && u.status !== 'DRAFT');
            if (duplicate) {
                throw new Error('Une info utile avec ce titre existe déjà');
            }
            const dataToCreate = {
                title: validatedData.titre,
                content: validatedData.contenu,
                imageUrl: validatedData.image,
                publishedAt: validatedData.datePublication,
                status: validatedData.archive ? UsefulInfoStatus.DRAFT : UsefulInfoStatus.PUBLISHED
            };
            const usefulInfo = await this.usefulInfoRepository.create(dataToCreate);
            console.log(`Info utile créée avec succès: ${usefulInfo.title}`);
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création de l\'info utile:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const usefulInfos = await this.usefulInfoRepository.findAll();
            console.log(`${usefulInfos.length} infos utiles récupérées`);
            return usefulInfos;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des infos utiles:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const usefulInfo = await this.usefulInfoRepository.findById(id);
            if (!usefulInfo) {
                console.log(`Info utile avec l'ID ${id} non trouvée`);
                return null;
            }
            console.log(`Info utile trouvée: ${usefulInfo.title}`);
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération de l\'info utile:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = InfoUtileUpdateSchema.parse(data);
            // Vérifier si l'info utile existe
            const existingUsefulInfo = await this.usefulInfoRepository.findById(id);
            if (!existingUsefulInfo) {
                throw new Error('Info utile non trouvée');
            }
            // Vérifier si le nouveau titre n'est pas déjà utilisé par une autre info utile
            if (validatedData.titre) {
                const allUsefulInfos = await this.usefulInfoRepository.findAll();
                const duplicate = allUsefulInfos.find(u => u.title.toLowerCase() === validatedData.titre.toLowerCase() &&
                    u.id !== id &&
                    u.status !== 'DRAFT');
                if (duplicate) {
                    throw new Error('Une info utile avec ce titre existe déjà');
                }
            }
            const dataToUpdate = {};
            if (validatedData.titre !== undefined)
                dataToUpdate.title = validatedData.titre;
            if (validatedData.contenu !== undefined)
                dataToUpdate.content = validatedData.contenu;
            if (validatedData.image !== undefined)
                dataToUpdate.imageUrl = validatedData.image;
            if (validatedData.datePublication !== undefined)
                dataToUpdate.publishedAt = validatedData.datePublication;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? UsefulInfoStatus.DRAFT : UsefulInfoStatus.PUBLISHED;
            const usefulInfo = await this.usefulInfoRepository.update(id, dataToUpdate);
            console.log(`Info utile mise à jour avec succès: ${usefulInfo.title}`);
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour de l\'info utile:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si l'info utile existe
            const existingUsefulInfo = await this.usefulInfoRepository.findById(id);
            if (!existingUsefulInfo) {
                throw new Error('Info utile non trouvée');
            }
            if (existingUsefulInfo.status === 'DRAFT') {
                throw new Error('L\'info utile est déjà en brouillon');
            }
            const usefulInfo = await this.usefulInfoRepository.delete(id);
            console.log(`Info utile mise en brouillon avec succès: ${usefulInfo.title}`);
            return usefulInfo;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression de l\'info utile:', error);
            throw error;
        }
    }
}
export default new UsefulInfoService();
//# sourceMappingURL=UsefulInfoService.js.map