import type { Request, Response, NextFunction } from 'express';
import partnerService from '../services/PartnerService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { PartenaireCreate, PartenaireUpdate } from '../validators/partner.validator.js';

class PartnerController {
  private partnerService = partnerService;

  // Créer un nouveau partenaire
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const partner = await this.partnerService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Partenaire créé avec succès',
          data: partner
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les partenaires
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const partners = await this.partnerService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${partners.length} partenaire(s) trouvé(s)`,
          data: partners
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer un partenaire par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
      }

      const partner = await this.partnerService.findById(id);
      if (!partner) {
        throw new AppError('Partenaire non trouvé', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Partenaire trouvé',
          data: partner
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour un partenaire
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
      }

      const partner = await this.partnerService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Partenaire mis à jour avec succès',
          data: partner
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) un partenaire
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de partenaire invalide', StatusCodes.BAD_REQUEST);
      }

      const partner = await this.partnerService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Partenaire archivé avec succès',
          data: partner
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new PartnerController();