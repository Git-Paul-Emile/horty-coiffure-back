import { Router } from 'express';
import feedbackController from '../controller/feedback.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { CommentaireCreateSchema, CommentaireUpdateSchema } from '../validators/feedback.validator.js';

const router = Router();

// Créer un feedback
router.post('/', authenticate, validate(CommentaireCreateSchema), feedbackController.create);

// Récupérer tous les feedbacks
router.get('/', feedbackController.findAll);

// Récupérer un feedback par ID
router.get('/:id', feedbackController.findById);

// Mettre à jour un feedback
router.put('/:id', authenticate, validate(CommentaireUpdateSchema), feedbackController.update);

// Supprimer (archiver) un feedback
router.delete('/:id', authenticate, feedbackController.delete);

export default router;