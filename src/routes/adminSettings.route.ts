import { Router } from 'express';
import adminSettingsController from '../controller/adminSettings.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { ParametresAdminCreateSchema, ParametresAdminUpdateSchema } from '../validators/adminSettings.validator.js';

const router = Router();

// Créer un adminSettings
router.post('/', authenticate, validate(ParametresAdminCreateSchema), adminSettingsController.create);

// Récupérer tous les adminSettings
router.get('/', adminSettingsController.findAll);

// Récupérer un adminSettings par ID
router.get('/:id', adminSettingsController.findById);

// Mettre à jour un adminSettings
router.put('/:id', authenticate, validate(ParametresAdminUpdateSchema), adminSettingsController.update);

// Supprimer (archiver) un adminSettings
router.delete('/:id', authenticate, adminSettingsController.delete);

export default router;