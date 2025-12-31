import categoryRepository from '../repository/CategoryRepository.js';
import { Status } from '@prisma/client';
import { CategorieCreateSchema, CategorieUpdateSchema } from '../validators/category.validator.js';
class CategoryService {
    categoryRepository = categoryRepository; //on réutilise l'instance
    async create(data) {
        try {
            // Validation des données
            const validatedData = CategorieCreateSchema.parse(data);
            // Vérifier si une catégorie avec le même nom existe déjà
            const existingCategories = await this.categoryRepository.findAll();
            const duplicate = existingCategories.find(c => c.name.toLowerCase() === validatedData.nom.toLowerCase() && c.status !== 'INACTIVE');
            if (duplicate) {
                throw new Error('Une catégorie avec ce nom existe déjà');
            }
            const dataToCreate = {
                name: validatedData.nom,
                description: validatedData.description,
                parentId: validatedData.categorieParent,
                imageUrl: validatedData.image,
                status: validatedData.archive ? Status.INACTIVE : Status.ACTIVE
            };
            const category = await this.categoryRepository.create(dataToCreate);
            console.log(`Catégorie créée avec succès: ${category.name}`);
            return category;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la création de la catégorie:', error);
            throw error;
        }
    }
    async findAll() {
        try {
            const categories = await this.categoryRepository.findAll();
            console.log(`${categories.length} catégories récupérées`);
            return categories;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération des catégories:', error);
            throw error;
        }
    }
    async findById(id) {
        try {
            const category = await this.categoryRepository.findById(id);
            if (!category) {
                console.log(`Catégorie avec l'ID ${id} non trouvée`);
                return null;
            }
            console.log(`Catégorie trouvée: ${category.name}`);
            return category;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la récupération de la catégorie:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            // Validation des données
            const validatedData = CategorieUpdateSchema.parse(data);
            // Vérifier si la catégorie existe
            const existingCategory = await this.categoryRepository.findById(id);
            if (!existingCategory) {
                throw new Error('Catégorie non trouvée');
            }
            // Vérifier si le nouveau nom n'est pas déjà utilisé par une autre catégorie
            if (validatedData.nom) {
                const allCategories = await this.categoryRepository.findAll();
                const duplicate = allCategories.find(c => c.name.toLowerCase() === validatedData.nom.toLowerCase() &&
                    c.id !== id &&
                    c.status !== 'INACTIVE');
                if (duplicate) {
                    throw new Error('Une catégorie avec ce nom existe déjà');
                }
            }
            const dataToUpdate = {};
            if (validatedData.nom !== undefined)
                dataToUpdate.name = validatedData.nom;
            if (validatedData.description !== undefined)
                dataToUpdate.description = validatedData.description;
            if (validatedData.categorieParent !== undefined)
                dataToUpdate.parentId = validatedData.categorieParent;
            if (validatedData.image !== undefined)
                dataToUpdate.imageUrl = validatedData.image;
            if (validatedData.archive !== undefined)
                dataToUpdate.status = validatedData.archive ? Status.INACTIVE : Status.ACTIVE;
            const category = await this.categoryRepository.update(id, dataToUpdate);
            console.log(`Catégorie mise à jour avec succès: ${category.name}`);
            return category;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la mise à jour de la catégorie:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            // Vérifier si la catégorie existe
            const existingCategory = await this.categoryRepository.findById(id);
            if (!existingCategory) {
                throw new Error('Catégorie non trouvée');
            }
            if (existingCategory.status === 'INACTIVE') {
                throw new Error('La catégorie est déjà archivée');
            }
            const category = await this.categoryRepository.delete(id);
            console.log(`Catégorie archivée avec succès: ${category.name}`);
            return category;
        }
        catch (error) {
            console.error('Erreur dans le service lors de la suppression de la catégorie:', error);
            throw error;
        }
    }
}
export default new CategoryService();
//# sourceMappingURL=CategoryService.js.map