import { Router } from 'express';
import serviceController from '../controller/service.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { ServiceCreateSchema, ServiceUpdateSchema } from '../validators/service.validator.js';
const router = Router();
// Créer un service
router.post('/', authenticate, validate(ServiceCreateSchema), serviceController.create);
// Récupérer tous les services
router.get('/', serviceController.findAll);
// Récupérer un service par ID
router.get('/:id', serviceController.findById);
// Mettre à jour un service
router.put('/:id', authenticate, validate(ServiceUpdateSchema), serviceController.update);
// Supprimer (archiver) un service
router.delete('/:id', authenticate, serviceController.delete);
export default router;
//# sourceMappingURL=service.route.js.map