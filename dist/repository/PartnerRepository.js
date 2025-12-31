import { prisma } from "../config/database.js";
class PartnerRepository {
    async create(data) {
        try {
            const partner = await prisma.partner.create({ data });
            return partner;
        }
        catch (error) {
            console.error('Erreur lors de la création du partenaire:', error);
            throw new Error('Impossible de créer le partenaire');
        }
    }
    async findAll() {
        try {
            const partners = await prisma.partner.findMany({
                where: { status: 'ACTIVE' },
                orderBy: { createdAt: 'desc' }
            });
            return partners;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des partenaires:', error);
            throw new Error('Impossible de récupérer les partenaires');
        }
    }
    async findById(id) {
        try {
            const partner = await prisma.partner.findUnique({
                where: { id }
            });
            return partner;
        }
        catch (error) {
            console.error('Erreur lors de la récupération du partenaire:', error);
            throw new Error('Impossible de récupérer le partenaire');
        }
    }
    async update(id, data) {
        try {
            const partner = await prisma.partner.update({
                where: { id },
                data
            });
            return partner;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour du partenaire:', error);
            throw new Error('Impossible de mettre à jour le partenaire');
        }
    }
    async delete(id) {
        try {
            const partner = await prisma.partner.update({
                where: { id },
                data: { status: 'INACTIVE' }
            });
            return partner;
        }
        catch (error) {
            console.error('Erreur lors de la suppression du partenaire:', error);
            throw new Error('Impossible de supprimer le partenaire');
        }
    }
}
export default new PartnerRepository();
//# sourceMappingURL=PartnerRepository.js.map