import productRepository from '../repository/ProductRepository.js';
import { Status } from '@prisma/client';
import { ProduitCreateSchema, ProduitUpdateSchema } from '../validators/product.validator.js';
class ProduitService {
    produitRepository = productRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = ProduitCreateSchema.parse(data);
            // Vérifier si un produit avec le même nom existe déjà
            const existingProduit = await this.produitRepository.findAll();
            const duplicate = existingProduit.find(p => p.name.toLowerCase() === validatedData.nom.toLowerCase() && p.status !== 'INACTIVE');
            if (duplicate) {
                throw new Error('Un produit avec ce nom existe déjà');
            }
            const dataToCreate = {
                name: validatedData.nom,
                description: validatedData.description,
                price: validatedData.prix,
                imageUrl: validatedData.image,
                categoryId: validatedData.categorie,
                status: validatedData.archive ? Status.INACTIVE : Status.ACTIVE
            };
            const produit = await this.produitRepository.create(dataToCreate);
            console.log(`Produit créé avec succès: ${produit.name}`);
            return produit;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création du produit:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const produits = await this.produitRepository.findAll();
            console.log(`${produits.length} produits récupérés`);
            return produits;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des produits:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const produit = await this.produitRepository.findById(id);
            if (!produit) {
                console.log(`Produit avec l'ID ${id} non trouvé`);
                return null;
            }
            console.log(`Produit trouvé: ${produit.name}`);
            return produit;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération du produit:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = ProduitUpdateSchema.parse(data);
            // Vérifier si le produit existe
            const existingProduit = await this.produitRepository.findById(id);
            if (!existingProduit) {
                throw new Error('Produit non trouvé');
            }
            // Vérifier si le nouveau nom n'est pas déjà utilisé par un autre produit
            if (validatedData.nom) {
                const allProduits = await this.produitRepository.findAll();
                const duplicate = allProduits.find(p => p.name.toLowerCase() === validatedData.nom.toLowerCase() &&
                    p.id !== id &&
                    p.status !== 'INACTIVE');
                if (duplicate) {
                    throw new Error('Un produit avec ce nom existe déjà');
                }
            }
            const dataToUpdate = {};
            if (validatedData.nom !== undefined)
                dataToUpdate.name = validatedData.nom;
            if (validatedData.description !== undefined)
                dataToUpdate.description = validatedData.description;
            if (validatedData.prix !== undefined)
                dataToUpdate.price = validatedData.prix;
            if (validatedData.image !== undefined)
                dataToUpdate.imageUrl = validatedData.image;
            if (validatedData.categorie !== undefined)
                dataToUpdate.categoryId = validatedData.categorie;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? Status.INACTIVE : Status.ACTIVE;
            const produit = await this.produitRepository.update(id, dataToUpdate);
            console.log(`Produit mis à jour avec succès: ${produit.name}`);
            return produit;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour du produit:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si le produit existe
            const existingProduit = await this.produitRepository.findById(id);
            if (!existingProduit) {
                throw new Error('Produit non trouvé');
            }
            if (existingProduit.status === 'INACTIVE') {
                throw new Error('Le produit est déjà archivé');
            }
            const produit = await this.produitRepository.delete(id);
            console.log(`Produit archivé avec succès: ${produit.name}`);
            return produit;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression du produit:', error);
            throw error;
        }
    }
}
export default new ProduitService();
//# sourceMappingURL=ProduitService.js.map