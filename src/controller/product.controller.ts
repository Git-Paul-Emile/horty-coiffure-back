import type { Request, Response, NextFunction } from 'express';
import produitService from '../services/ProduitService.js';
import { jsonResponse, AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
import type { ProduitCreate, ProduitUpdate } from '../validators/product.validator.js';

class ProductController {
  private produitService = produitService;

  // Créer un nouveau produit
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const produit = await this.produitService.create(req.body);

      res.status(StatusCodes.CREATED).json(
        jsonResponse({
          status: 'success',
          message: 'Produit créé avec succès',
          data: produit
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer tous les produits
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const produits = await this.produitService.findAll();

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: `${produits.length} produit(s) trouvé(s)`,
          data: produits
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Récupérer un produit par ID
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id!);
      if (isNaN(id)) {
        throw new AppError('ID de produit invalide', StatusCodes.BAD_REQUEST);
      }

      const produit = await this.produitService.findById(id.toString());
      if (!produit) {
        throw new AppError('Produit non trouvé', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Produit trouvé',
          data: produit
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Mettre à jour un produit
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id!);
      if (isNaN(id)) {
        throw new AppError('ID de produit invalide', StatusCodes.BAD_REQUEST);
      }

      const produit = await this.produitService.update(id.toString(), req.body);

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Produit mis à jour avec succès',
          data: produit
        })
      );
    } catch (error) {
      next(error);
    }
  }

  // Supprimer (archiver) un produit
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id!);
      if (isNaN(id)) {
        throw new AppError('ID de produit invalide', StatusCodes.BAD_REQUEST);
      }

      const produit = await this.produitService.delete(id.toString());

      res.status(StatusCodes.OK).json(
        jsonResponse({
          status: 'success',
          message: 'Produit archivé avec succès',
          data: produit
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();