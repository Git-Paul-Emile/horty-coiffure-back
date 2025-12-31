import { Router } from 'express';
import productController from '../controller/product.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { ProduitCreateSchema, ProduitUpdateSchema } from '../validators/product.validator.js';
const router = Router();
// Créer un produit
router.post('/', authenticate, validate(ProduitCreateSchema), productController.create);
// Récupérer tous les produits
router.get('/', productController.findAll);
// Récupérer un produit par ID
router.get('/:id', productController.findById);
// Mettre à jour un produit
router.put('/:id', authenticate, validate(ProduitUpdateSchema), productController.update);
// Supprimer (archiver) un produit
router.delete('/:id', authenticate, productController.delete);
export default router;
//# sourceMappingURL=product.route.js.map