import { Router } from 'express';
import testimonialController from '../controller/testimonial.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { TemoignageCreateSchema, TemoignageUpdateSchema } from '../validators/testimonial.validator.js';
const router = Router();
// Créer un testimonial
router.post('/', authenticate, validate(TemoignageCreateSchema), testimonialController.create);
// Récupérer tous les testimonials
router.get('/', testimonialController.findAll);
// Récupérer un testimonial par ID
router.get('/:id', testimonialController.findById);
// Mettre à jour un testimonial
router.put('/:id', authenticate, validate(TemoignageUpdateSchema), testimonialController.update);
// Supprimer (archiver) un testimonial
router.delete('/:id', authenticate, testimonialController.delete);
export default router;
//# sourceMappingURL=testimonial.route.js.map