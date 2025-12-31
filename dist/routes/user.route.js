import { Router } from 'express';
import userController from '../controller/user.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { UtilisateurCreateSchema, UtilisateurUpdateSchema } from '../validators/user.validator.js';
const router = Router();
// Créer un user
router.post('/', authenticate, validate(UtilisateurCreateSchema), userController.create);
// Récupérer tous les users
router.get('/', userController.findAll);
// Récupérer un user par ID
router.get('/:id', userController.findById);
// Mettre à jour un user
router.put('/:id', authenticate, validate(UtilisateurUpdateSchema), userController.update);
// Supprimer (archiver) un user
router.delete('/:id', authenticate, userController.delete);
export default router;
//# sourceMappingURL=user.route.js.map