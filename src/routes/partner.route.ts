import { Router } from 'express';
import partnerController from '../controller/partner.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { PartenaireCreateSchema, PartenaireUpdateSchema } from '../validators/partner.validator.js';

const router = Router();

// Créer un partner
router.post('/', authenticate, validate(PartenaireCreateSchema), partnerController.create);

// Récupérer tous les partners
router.get('/', partnerController.findAll);

// Récupérer un partner par ID
router.get('/:id', partnerController.findById);

// Mettre à jour un partner
router.put('/:id', authenticate, validate(PartenaireUpdateSchema), partnerController.update);

// Supprimer (archiver) un partner
router.delete('/:id', authenticate, partnerController.delete);

export default router;