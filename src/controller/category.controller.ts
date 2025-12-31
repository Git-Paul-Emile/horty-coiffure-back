import type { Request, Response, NextFunction } from 'express';
import categoryService from '../services/CategoryService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { CategorieCreate, CategorieUpdate } from '../validators/category.validator.js';

class CategoryController {
  private categoryService = categoryService;

  // Créer une nouvelle catégorie
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.categoryService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Catégorie créée avec succès',
          data: category
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer toutes les catégories
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.categoryService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${categories.length} catégorie(s) trouvée(s)`,
          data: categories
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer une catégorie par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de catégorie invalide', StatusCodes.BAD_REQUEST);
      }

      const category = await this.categoryService.findById(id);
      if (!category) {
        throw new AppError('Catégorie non trouvée', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Catégorie trouvée',
          data: category
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour une catégorie
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de catégorie invalide', StatusCodes.BAD_REQUEST);
      }

      const category = await this.categoryService.update(id, req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Catégorie mise à jour avec succès',
          data: category
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) une catégorie
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new AppError('ID de catégorie invalide', StatusCodes.BAD_REQUEST);
      }

      const category = await this.categoryService.delete(id);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Catégorie archivée avec succès',
          data: category
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();