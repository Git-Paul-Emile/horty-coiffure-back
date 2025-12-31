import adminSettingsService from '../services/AdminSettingsService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
class AdminSettingsController {
    adminSettingsService = adminSettingsService;
    // Créer les paramètres admin
    async create(req, res, next) {
        try {
            const adminSettings = await this.adminSettingsService.create(req.body);
            res.status(StatusCodes.CREATED).json(jsonResponse({
                status: 'success',
                message: 'Paramètres admin créés avec succès',
                data: adminSettings
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer tous les paramètres admin
    async findAll(req, res, next) {
        try {
            const adminSettings = await this.adminSettingsService.findAll();
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: `${adminSettings.length} paramètre(s) admin trouvé(s)`,
                data: adminSettings
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer les paramètres admin par ID
    async findById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
            }
            const adminSettings = await this.adminSettingsService.findById(id);
            if (!adminSettings) {
                throw new AppError('Paramètres admin non trouvés', StatusCodes.NOT_FOUND);
            }
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Paramètres admin trouvés',
                data: adminSettings
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Mettre à jour les paramètres admin
    async update(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
            }
            const adminSettings = await this.adminSettingsService.update(id, req.body);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Paramètres admin mis à jour avec succès',
                data: adminSettings
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Supprimer les paramètres admin
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
            }
            const adminSettings = await this.adminSettingsService.delete(id);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Paramètres admin supprimés avec succès',
                data: adminSettings
            }));
        }
        catch (error) {
            next(error);
        }
    }
}
export default new AdminSettingsController();
//# sourceMappingURL=adminSettings.controller.js.map