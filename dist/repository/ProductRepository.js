import { prisma } from "../config/database.js";
class ProductRepository {
    async create(data) {
        try {
            const product = await prisma.product.create({ data });
            return product;
        }
        catch (error) {
            console.error('Erreur lors de la création du produit:', error);
            throw new Error('Impossible de créer le produit');
        }
    }
    async findAll() {
        try {
            const products = await prisma.product.findMany({
                where: { status: 'ACTIVE' },
                orderBy: { createdAt: 'desc' }
            });
            return products;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
            throw new Error('Impossible de récupérer les produits');
        }
    }
    async findById(id) {
        try {
            const product = await prisma.product.findUnique({
                where: { id }
            });
            return product;
        }
        catch (error) {
            console.error('Erreur lors de la récupération du produit:', error);
            throw new Error('Impossible de récupérer le produit');
        }
    }
    async update(id, data) {
        try {
            const product = await prisma.product.update({
                where: { id },
                data
            });
            return product;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour du produit:', error);
            throw new Error('Impossible de mettre à jour le produit');
        }
    }
    async delete(id) {
        try {
            const product = await prisma.product.update({
                where: { id },
                data: { status: 'INACTIVE' }
            });
            return product;
        }
        catch (error) {
            console.error('Erreur lors de la suppression du produit:', error);
            throw new Error('Impossible de supprimer le produit');
        }
    }
}
export default new ProductRepository();
//# sourceMappingURL=ProductRepository.js.map