import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt.js';
import { AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Token manquant ou invalide', StatusCodes.UNAUTHORIZED);
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token) as any;

    // Ajouter les infos utilisateur à req
    (req as any).user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};