import { Router } from 'express';
import categoryController from '../controller/category.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { CategorieCreateSchema, CategorieUpdateSchema } from '../validators/category.validator.js';
const router = Router();
// Créer une catégorie
router.post('/', authenticate, validate(CategorieCreateSchema), categoryController.create);
// Récupérer toutes les catégories
router.get('/', categoryController.findAll);
// Récupérer une catégorie par ID
router.get('/:id', categoryController.findById);
// Mettre à jour une catégorie
router.put('/:id', authenticate, validate(CategorieUpdateSchema), categoryController.update);
// Supprimer (archiver) une catégorie
router.delete('/:id', authenticate, categoryController.delete);
export default router;
//# sourceMappingURL=category.route.js.map