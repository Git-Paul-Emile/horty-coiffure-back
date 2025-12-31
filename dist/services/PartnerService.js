import partnerRepository from '../repository/PartnerRepository.js';
import { Status } from '@prisma/client';
import { PartenaireCreateSchema, PartenaireUpdateSchema } from '../validators/partner.validator.js';
class PartnerService {
    partnerRepository = partnerRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = PartenaireCreateSchema.parse(data);
            // Vérifier si un partenaire avec le même nom existe déjà
            const existingPartners = await this.partnerRepository.findAll();
            const duplicate = existingPartners.find(p => p.name.toLowerCase() === validatedData.nom.toLowerCase() && p.status !== 'INACTIVE');
            if (duplicate) {
                throw new Error('Un partenaire avec ce nom existe déjà');
            }
            const dataToCreate = {
                name: validatedData.nom,
                logo: validatedData.logo,
                description: validatedData.description,
                website: validatedData.siteWeb,
                status: validatedData.archive ? Status.INACTIVE : Status.ACTIVE
            };
            const partner = await this.partnerRepository.create(dataToCreate);
            console.log(`Partenaire créé avec succès: ${partner.name}`);
            return partner;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création du partenaire:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const partners = await this.partnerRepository.findAll();
            console.log(`${partners.length} partenaires récupérés`);
            return partners;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des partenaires:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const partner = await this.partnerRepository.findById(id);
            if (!partner) {
                console.log(`Partenaire avec l'ID ${id} non trouvé`);
                return null;
            }
            console.log(`Partenaire trouvé: ${partner.name}`);
            return partner;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération du partenaire:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = PartenaireUpdateSchema.parse(data);
            // Vérifier si le partenaire existe
            const existingPartner = await this.partnerRepository.findById(id);
            if (!existingPartner) {
                throw new Error('Partenaire non trouvé');
            }
            // Vérifier si le nouveau nom n'est pas déjà utilisé par un autre partenaire
            if (validatedData.nom) {
                const allPartners = await this.partnerRepository.findAll();
                const duplicate = allPartners.find(p => p.name.toLowerCase() === validatedData.nom.toLowerCase() &&
                    p.id !== id &&
                    p.status !== 'INACTIVE');
                if (duplicate) {
                    throw new Error('Un partenaire avec ce nom existe déjà');
                }
            }
            const dataToUpdate = {};
            if (validatedData.nom !== undefined)
                dataToUpdate.name = validatedData.nom;
            if (validatedData.logo !== undefined)
                dataToUpdate.logo = validatedData.logo;
            if (validatedData.description !== undefined)
                dataToUpdate.description = validatedData.description;
            if (validatedData.siteWeb !== undefined)
                dataToUpdate.website = validatedData.siteWeb;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? Status.INACTIVE : Status.ACTIVE;
            const partner = await this.partnerRepository.update(id, dataToUpdate);
            console.log(`Partenaire mis à jour avec succès: ${partner.name}`);
            return partner;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour du partenaire:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si le partenaire existe
            const existingPartner = await this.partnerRepository.findById(id);
            if (!existingPartner) {
                throw new Error('Partenaire non trouvé');
            }
            if (existingPartner.status === 'INACTIVE') {
                throw new Error('Le partenaire est déjà archivé');
            }
            const partner = await this.partnerRepository.delete(id);
            console.log(`Partenaire archivé avec succès: ${partner.name}`);
            return partner;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression du partenaire:', error);
            throw error;
        }
    }
}
export default new PartnerService();
//# sourceMappingURL=PartnerService.js.map