import { Router } from 'express';
import newsController from '../controller/news.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { ActualiteCreateSchema, ActualiteUpdateSchema } from '../validators/news.validator.js';
const router = Router();
// Créer une news
router.post('/', authenticate, validate(ActualiteCreateSchema), newsController.create);
// Récupérer toutes les news
router.get('/', newsController.findAll);
// Récupérer une news par ID
router.get('/:id', newsController.findById);
// Mettre à jour une news
router.put('/:id', authenticate, validate(ActualiteUpdateSchema), newsController.update);
// Supprimer (archiver) une news
router.delete('/:id', authenticate, newsController.delete);
export default router;
//# sourceMappingURL=news.route.js.map