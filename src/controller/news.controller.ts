import type { Request, Response, NextFunction } from 'express';
import newsService from '../services/NewsService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { ActualiteCreate, ActualiteUpdate } from '../validators/news.validator.js';

class NewsController {
  private newsService = newsService;

  // Créer une nouvelle actualité
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const news = await this.newsService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Actualité créée avec succès',
          data: news
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer toutes les actualités
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const news = await this.newsService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${news.length} actualité(s) trouvée(s)`,
          data: news
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer une actualité par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID d\'actualité invalide', StatusCodes.BAD_REQUEST);
      }

      const news = await this.newsService.findById(id);
      if (!news) {
        throw new AppError('Actualité non trouvée', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Actualité trouvée',
          data: news
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour une actualité
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID d\'actualité invalide', StatusCodes.BAD_REQUEST);
      }

      const news = await this.newsService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Actualité mise à jour avec succès',
          data: news
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) une actualité
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID d\'actualité invalide', StatusCodes.BAD_REQUEST);
      }

      const news = await this.newsService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Actualité archivée avec succès',
          data: news
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new NewsController();