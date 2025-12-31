import type { Request, Response, NextFunction } from 'express';
import realizationService from '../services/RealizationService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { RealisationCreate, RealisationUpdate } from '../validators/realization.validator.js';

class RealizationController {
  private realizationService = realizationService;

  // Créer une nouvelle réalisation
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const realization = await this.realizationService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Réalisation créée avec succès',
          data: realization
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer toutes les réalisations
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const realizations = await this.realizationService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${realizations.length} réalisation(s) trouvée(s)`,
          data: realizations
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer une réalisation par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de réalisation invalide', StatusCodes.BAD_REQUEST);
      }

      const realization = await this.realizationService.findById(id);
      if (!realization) {
        throw new AppError('Réalisation non trouvée', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Réalisation trouvée',
          data: realization
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour une réalisation
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de réalisation invalide', StatusCodes.BAD_REQUEST);
      }

      const realization = await this.realizationService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Réalisation mise à jour avec succès',
          data: realization
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) une réalisation
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de réalisation invalide', StatusCodes.BAD_REQUEST);
      }

      const realization = await this.realizationService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Réalisation archivée avec succès',
          data: realization
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new RealizationController();