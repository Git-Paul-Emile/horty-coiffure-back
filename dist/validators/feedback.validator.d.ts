import { z } from 'zod';
export declare const CommentaireSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    note: z.ZodNumber;
    commentaire: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const CommentaireCreateSchema: z.ZodObject<{
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    note: z.ZodNumber;
    commentaire: z.ZodString;
}, z.core.$strip>;
export declare const CommentaireUpdateSchema: z.ZodObject<{
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    note: z.ZodOptional<z.ZodNumber>;
    commentaire: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Commentaire = z.infer<typeof CommentaireSchema>;
export type CommentaireCreate = z.infer<typeof CommentaireCreateSchema>;
export type CommentaireUpdate = z.infer<typeof CommentaireUpdateSchema>;
//# sourceMappingURL=feedback.validator.d.ts.map