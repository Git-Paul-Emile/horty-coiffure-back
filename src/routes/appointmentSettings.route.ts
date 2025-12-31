import { Router } from 'express';
import appointmentSettingsController from '../controller/appointmentSettings.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { ParametresRendezVousCreateSchema, ParametresRendezVousUpdateSchema } from '../validators/appointmentSettings.validator.js';

const router = Router();

// Créer un appointmentSettings
router.post('/', authenticate, validate(ParametresRendezVousCreateSchema), appointmentSettingsController.create);

// Récupérer tous les appointmentSettings
router.get('/', appointmentSettingsController.findAll);

// Récupérer un appointmentSettings par ID
router.get('/:id', appointmentSettingsController.findById);

// Mettre à jour un appointmentSettings
router.put('/:id', authenticate, validate(ParametresRendezVousUpdateSchema), appointmentSettingsController.update);

// Supprimer (archiver) un appointmentSettings
router.delete('/:id', authenticate, appointmentSettingsController.delete);

export default router;