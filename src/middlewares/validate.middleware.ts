import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';

export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message
        }));
        throw new AppError(`Erreurs de validation: ${errors.map((e: any) => `${e.field}: ${e.message}`).join(', ')}`, StatusCodes.BAD_REQUEST);
      }
      next(error);
    }
  };
};