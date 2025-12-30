import { z } from 'zod';
export declare const ProduitSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    categorie: z.ZodString;
    prix: z.ZodNumber;
    description: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const ProduitCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    description: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    categorie: z.ZodString;
    prix: z.ZodNumber;
}, z.core.$strip>;
export declare const ProduitUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nom: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    categorie: z.ZodOptional<z.ZodString>;
    prix: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Produit = z.infer<typeof ProduitSchema>;
export type ProduitCreate = z.infer<typeof ProduitCreateSchema>;
export type ProduitUpdate = z.infer<typeof ProduitUpdateSchema>;
//# sourceMappingURL=product.validator.d.ts.map