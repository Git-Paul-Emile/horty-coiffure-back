import { Router } from 'express';
import { uploadImageHandler } from '../controller/upload.controller.js';

const router = Router();
router.post('/upload', uploadImageHandler);

export default router;
