import { z } from 'zod';
export declare const CategorieSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    categorieParent: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const CategorieCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    categorieParent: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CategorieUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nom: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    categorieParent: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export type Categorie = z.infer<typeof CategorieSchema>;
export type CategorieCreate = z.infer<typeof CategorieCreateSchema>;
export type CategorieUpdate = z.infer<typeof CategorieUpdateSchema>;
//# sourceMappingURL=category.validator.d.ts.map