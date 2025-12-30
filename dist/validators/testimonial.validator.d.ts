import { z } from 'zod';
export declare const TemoignageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    texte: z.ZodString;
    note: z.ZodNumber;
    service: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const TemoignageCreateSchema: z.ZodObject<{
    nom: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    note: z.ZodNumber;
    service: z.ZodString;
    texte: z.ZodString;
}, z.core.$strip>;
export declare const TemoignageUpdateSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    note: z.ZodOptional<z.ZodNumber>;
    service: z.ZodOptional<z.ZodString>;
    texte: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Temoignage = z.infer<typeof TemoignageSchema>;
export type TemoignageCreate = z.infer<typeof TemoignageCreateSchema>;
export type TemoignageUpdate = z.infer<typeof TemoignageUpdateSchema>;
//# sourceMappingURL=testimonial.validator.d.ts.map