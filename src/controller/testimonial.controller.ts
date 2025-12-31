import type { Request, Response, NextFunction } from 'express';
import testimonialService from '../services/TestimonialService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { TemoignageCreate, TemoignageUpdate } from '../validators/testimonial.validator.js';

class TestimonialController {
  private testimonialService = testimonialService;

  // Créer un nouveau témoignage
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const testimonial = await this.testimonialService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Témoignage créé avec succès',
          data: testimonial
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les témoignages
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const testimonials = await this.testimonialService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${testimonials.length} témoignage(s) trouvé(s)`,
          data: testimonials
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer un témoignage par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de témoignage invalide', StatusCodes.BAD_REQUEST);
      }

      const testimonial = await this.testimonialService.findById(id);
      if (!testimonial) {
        throw new AppError('Témoignage non trouvé', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Témoignage trouvé',
          data: testimonial
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour un témoignage
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de témoignage invalide', StatusCodes.BAD_REQUEST);
      }

      const testimonial = await this.testimonialService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Témoignage mis à jour avec succès',
          data: testimonial
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (rejeter) un témoignage
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de témoignage invalide', StatusCodes.BAD_REQUEST);
      }

      const testimonial = await this.testimonialService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Témoignage rejeté avec succès',
          data: testimonial
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new TestimonialController();