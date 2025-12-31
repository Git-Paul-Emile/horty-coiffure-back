import type { Request, Response, NextFunction } from 'express';
import feedbackService from '../services/FeedbackService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { CommentaireCreate, CommentaireUpdate } from '../validators/feedback.validator.js';

class FeedbackController {
  private feedbackService = feedbackService;

  // Créer un nouveau commentaire
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const feedback = await this.feedbackService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Commentaire créé avec succès',
          data: feedback
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les commentaires
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const feedbacks = await this.feedbackService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${feedbacks.length} commentaire(s) trouvé(s)`,
          data: feedbacks
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer un commentaire par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de commentaire invalide', StatusCodes.BAD_REQUEST);
      }

      const feedback = await this.feedbackService.findById(id);
      if (!feedback) {
        throw new AppError('Commentaire non trouvé', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Commentaire trouvé',
          data: feedback
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour un commentaire
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de commentaire invalide', StatusCodes.BAD_REQUEST);
      }

      const feedback = await this.feedbackService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Commentaire mis à jour avec succès',
          data: feedback
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) un commentaire
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de commentaire invalide', StatusCodes.BAD_REQUEST);
      }

      const feedback = await this.feedbackService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Commentaire archivé avec succès',
          data: feedback
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new FeedbackController();