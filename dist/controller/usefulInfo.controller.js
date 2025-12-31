import usefulInfoService from '../services/UsefulInfoService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
class UsefulInfoController {
    usefulInfoService = usefulInfoService;
    // Créer une nouvelle info utile
    async create(req, res, next) {
        try {
            const usefulInfo = await this.usefulInfoService.create(req.body);
            res.status(StatusCodes.CREATED).json(jsonResponse({
                status: 'success',
                message: 'Info utile créée avec succès',
                data: usefulInfo
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer toutes les infos utiles
    async findAll(req, res, next) {
        try {
            const usefulInfos = await this.usefulInfoService.findAll();
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: `${usefulInfos.length} info(s) utile(s) trouvée(s)`,
                data: usefulInfos
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer une info utile par ID
    async findById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'info utile invalide', StatusCodes.BAD_REQUEST);
            }
            const usefulInfo = await this.usefulInfoService.findById(id);
            if (!usefulInfo) {
                throw new AppError('Info utile non trouvée', StatusCodes.NOT_FOUND);
            }
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Info utile trouvée',
                data: usefulInfo
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Mettre à jour une info utile
    async update(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'info utile invalide', StatusCodes.BAD_REQUEST);
            }
            const usefulInfo = await this.usefulInfoService.update(id, req.body);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Info utile mise à jour avec succès',
                data: usefulInfo
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Supprimer (mettre en brouillon) une info utile
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID d\'info utile invalide', StatusCodes.BAD_REQUEST);
            }
            const usefulInfo = await this.usefulInfoService.delete(id);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Info utile mise en brouillon avec succès',
                data: usefulInfo
            }));
        }
        catch (error) {
            next(error);
        }
    }
}
export default new UsefulInfoController();
//# sourceMappingURL=usefulInfo.controller.js.map