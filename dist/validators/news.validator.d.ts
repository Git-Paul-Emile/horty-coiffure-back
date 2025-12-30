import { z } from 'zod';
export declare const ActualiteSchema: z.ZodObject<{
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
export declare const ActualiteCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    titre: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    contenu: z.ZodString;
    datePublication: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const ActualiteUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    titre: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    contenu: z.ZodOptional<z.ZodString>;
    datePublication: z.ZodOptional<z.ZodOptional<z.ZodDate>>;
}, z.core.$strip>;
export type Actualite = z.infer<typeof ActualiteSchema>;
export type ActualiteCreate = z.infer<typeof ActualiteCreateSchema>;
export type ActualiteUpdate = z.infer<typeof ActualiteUpdateSchema>;
//# sourceMappingURL=news.validator.d.ts.map