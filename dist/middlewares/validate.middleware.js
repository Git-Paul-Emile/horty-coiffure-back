import { z } from 'zod';
import { AppError } from '../config/utils/index.js';
import { StatusCodes } from 'http-status-codes';
export const validate = (schema) => {
    return (req, res, next) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            next();
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message
                }));
                throw new AppError(`Erreurs de validation: ${errors.map((e) => `${e.field}: ${e.message}`).join(', ')}`, StatusCodes.BAD_REQUEST);
            }
            next(error);
        }
    };
};
//# sourceMappingURL=validate.middleware.js.map