import { Router } from 'express';
import usefulInfoController from '../controller/usefulInfo.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { InfoUtileCreateSchema, InfoUtileUpdateSchema } from '../validators/usefulInfo.validator.js';

const router = Router();

// Créer un usefulInfo
router.post('/', authenticate, validate(InfoUtileCreateSchema), usefulInfoController.create);

// Récupérer tous les usefulInfos
router.get('/', usefulInfoController.findAll);

// Récupérer un usefulInfo par ID
router.get('/:id', usefulInfoController.findById);

// Mettre à jour un usefulInfo
router.put('/:id', authenticate, validate(InfoUtileUpdateSchema), usefulInfoController.update);

// Supprimer (archiver) un usefulInfo
router.delete('/:id', authenticate, usefulInfoController.delete);

export default router;