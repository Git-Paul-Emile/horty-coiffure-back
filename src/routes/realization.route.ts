import { Router } from 'express';
import realizationController from '../controller/realization.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { RealisationCreateSchema, RealisationUpdateSchema } from '../validators/realization.validator.js';

const router = Router();

// Créer une realization
router.post('/', authenticate, validate(RealisationCreateSchema), realizationController.create);

// Récupérer toutes les realizations
router.get('/', realizationController.findAll);

// Récupérer une realization par ID
router.get('/:id', realizationController.findById);

// Mettre à jour une realization
router.put('/:id', authenticate, validate(RealisationUpdateSchema), realizationController.update);

// Supprimer (archiver) une realization
router.delete('/:id', authenticate, realizationController.delete);

export default router;