import type { Request, Response, NextFunction } from 'express';
import appointmentSettingsService from '../services/AppointmentSettingsService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { ParametresRendezVousCreate, ParametresRendezVousUpdate } from '../validators/appointmentSettings.validator.js';

class AppointmentSettingsController {
  private appointmentSettingsService = appointmentSettingsService;

  // Créer les paramètres de rendez-vous
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const appointmentSettings = await this.appointmentSettingsService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Paramètres de rendez-vous créés avec succès',
          data: appointmentSettings
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les paramètres de rendez-vous
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const appointmentSettings = await this.appointmentSettingsService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${appointmentSettings.length} paramètre(s) de rendez-vous trouvé(s)`,
          data: appointmentSettings
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer les paramètres de rendez-vous par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
      }

      const appointmentSettings = await this.appointmentSettingsService.findById(id);
      if (!appointmentSettings) {
        throw new AppError('Paramètres de rendez-vous non trouvés', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Paramètres de rendez-vous trouvés',
          data: appointmentSettings
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour les paramètres de rendez-vous
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
      }

      const appointmentSettings = await this.appointmentSettingsService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Paramètres de rendez-vous mis à jour avec succès',
          data: appointmentSettings
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer les paramètres de rendez-vous
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID requis', StatusCodes.BAD_REQUEST);
      }

      const appointmentSettings = await this.appointmentSettingsService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Paramètres de rendez-vous supprimés avec succès',
          data: appointmentSettings
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new AppointmentSettingsController();