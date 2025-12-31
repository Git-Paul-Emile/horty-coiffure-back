import { prisma } from "../config/database.js";
class UserRepository {
    async create(data) {
        try {
            const user = await prisma.user.create({ data });
            return user;
        }
        catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            throw new Error('Impossible de créer l\'utilisateur');
        }
    }
    async findAll() {
        try {
            const users = await prisma.user.findMany({
                orderBy: { createdAt: 'desc' }
            });
            return users;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            throw new Error('Impossible de récupérer les utilisateurs');
        }
    }
    async findById(id) {
        try {
            const user = await prisma.user.findUnique({
                where: { id }
            });
            return user;
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur:', error);
            throw new Error('Impossible de récupérer l\'utilisateur');
        }
    }
    async update(id, data) {
        try {
            const user = await prisma.user.update({
                where: { id },
                data
            });
            return user;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
            throw new Error('Impossible de mettre à jour l\'utilisateur');
        }
    }
    async delete(id) {
        try {
            const user = await prisma.user.delete({
                where: { id }
            });
            return user;
        }
        catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
            throw new Error('Impossible de supprimer l\'utilisateur');
        }
    }
}
export default new UserRepository();
//# sourceMappingURL=UserRepository.js.map