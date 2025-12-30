import { z } from 'zod';
export declare const InfoUtileSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    titre: z.ZodString;
    contenu: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    datePublication: z.ZodOptional<z.ZodDate>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const InfoUtileCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    titre: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    contenu: z.ZodString;
    datePublication: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const InfoUtileUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    titre: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    contenu: z.ZodOptional<z.ZodString>;
    datePublication: z.ZodOptional<z.ZodOptional<z.ZodDate>>;
}, z.core.$strip>;
export type InfoUtile = z.infer<typeof InfoUtileSchema>;
export type InfoUtileCreate = z.infer<typeof InfoUtileCreateSchema>;
export type InfoUtileUpdate = z.infer<typeof InfoUtileUpdateSchema>;
//# sourceMappingURL=usefulInfo.validator.d.ts.map