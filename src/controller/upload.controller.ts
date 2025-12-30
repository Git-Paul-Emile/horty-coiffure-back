import type  { Request, Response } from 'express';
import multer from 'multer';
import { uploadImage } from '../services/upload.service.js';

// Étendre le type Request pour inclure file de Multer
declare global {
  namespace Express {
    interface Request {
      file?: any;
    }
  }
}

const storage = (multer as any).memoryStorage(); // Stocke en mémoire pour Cloudinary
const upload = (multer as any)({ storage });

export const uploadImageHandler = [
  (upload as any).single('image'), // 'image' est le nom du champ dans le formulaire
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'Aucun fichier fourni' });
      }
      const url = await uploadImage(req.file.buffer, req.body.folder || 'default');
      res.json({ url });
    } catch (error) {
      res.status(500).json({ error: 'Erreur d\'upload' });
    }
  },
];
