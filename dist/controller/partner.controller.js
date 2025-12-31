import partnerService from '../services/PartnerService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
class PartnerController {
    partnerService = partnerService;
    // Créer un nouveau partenaire
    async create(req, res, next) {
        try {
            const partner = await this.partnerService.create(req.body);
            res.status(StatusCodes.CREATED).json(jsonResponse({
                status: 'success',
                message: 'Partenaire créé avec succès',
                data: partner
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer tous les partenaires
    async findAll(req, res, next) {
        try {
            const partners = await this.partnerService.findAll();
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: `${partners.length} partenaire(s) trouvé(s)`,
                data: partners
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Récupérer un partenaire par ID
    async findById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
            }
            const partner = await this.partnerService.findById(id);
            if (!partner) {
                throw new AppError('Partenaire non trouvé', StatusCodes.NOT_FOUND);
            }
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Partenaire trouvé',
                data: partner
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Mettre à jour un partenaire
    async update(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
            }
            const partner = await this.partnerService.update(id, req.body);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Partenaire mis à jour avec succès',
                data: partner
            }));
        }
        catch (error) {
            next(error);
        }
    }
    // Supprimer (archiver) un partenaire
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
            }
            const partner = await this.partnerService.delete(id);
            res.status(StatusCodes.OK).json(jsonResponse({
                status: 'success',
                message: 'Partenaire archivé avec succès',
                data: partner
            }));
        }
        catch (error) {
            next(error);
        }
    }
}
export default new PartnerController();
//# sourceMappingURL=partner.controller.js.map