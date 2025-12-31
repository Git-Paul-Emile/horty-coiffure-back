import userService from '../services/UserService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
class UserController {
    userService = userService;
    // Créer un nouvel utilisateur
    async create(req, res, next) {
        try {
            const user = await this.userService.create(req.body);
            res.status(StatusCodes.CREATED).json(jsonResponse({
                status: 'success',
                message: 'Utilisateur créé avec succès',
                data: user
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer tous les utilisateurs
    async findAll(req, res, next) {
        try {
            const users = await this.userService.findAll();
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: `${users.length} utilisateur(s) trouvé(s)`,
                data: users
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer un utilisateur par ID
    async findById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'utilisateur invalide', StatusCodes.BAD_REQUEST);
            }
            const user = await this.userService.findById(id);
            if (!user) {
                throw new AppError('Utilisateur non trouvé', StatusCodes.NOT_FOUND);
            }
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Utilisateur trouvé',
                data: user
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Mettre à jour un utilisateur
    async update(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'utilisateur invalide', StatusCodes.BAD_REQUEST);
            }
            const user = await this.userService.update(id, req.body);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Utilisateur mis à jour avec succès',
                data: user
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Supprimer un utilisateur
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'utilisateur invalide', StatusCodes.BAD_REQUEST);
            }
            const user = await this.userService.delete(id);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Utilisateur supprimé avec succès',
                data: user
            }));
        }
        catch (error) {
            next(error);
        }
    }
}
export default new UserController();
//# sourceMappingURL=user.controller.js.map