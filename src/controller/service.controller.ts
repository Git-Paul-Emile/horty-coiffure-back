import type { Request, Response, NextFunction } from 'express';
import serviceService from '../services/ServiceService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { ServiceCreate, ServiceUpdate } from '../validators/service.validator.js';

class ServiceController {
  private serviceService = serviceService;

  // Créer un nouveau service
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const service = await this.serviceService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Service créé avec succès',
          data: service
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les services
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await this.serviceService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${services.length} service(s) trouvé(s)`,
          data: services
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer un service par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de service invalide', StatusCodes.BAD_REQUEST);
      }

      const service = await this.serviceService.findById(id);
      if (!service) {
        throw new AppError('Service non trouvé', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Service trouvé',
          data: service
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour un service
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de service invalide', StatusCodes.BAD_REQUEST);
      }

      const service = await this.serviceService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Service mis à jour avec succès',
          data: service
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) un service
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de service invalide', StatusCodes.BAD_REQUEST);
      }

      const service = await this.serviceService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Service archivé avec succès',
          data: service
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new ServiceController();