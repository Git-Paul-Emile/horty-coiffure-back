import { z } from 'zod';
export declare const ServiceSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    categorie: z.ZodString;
    duree: z.ZodNumber;
    prix: z.ZodNumber;
    description: z.ZodString;
    inclus: z.ZodString;
    exclus: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    variantes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const ServiceCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    nom: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    categorie: z.ZodString;
    prix: z.ZodNumber;
    duree: z.ZodNumber;
    inclus: z.ZodString;
    exclus: z.ZodString;
    variantes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const ServiceUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    nom: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    categorie: z.ZodOptional<z.ZodString>;
    prix: z.ZodOptional<z.ZodNumber>;
    duree: z.ZodOptional<z.ZodNumber>;
    inclus: z.ZodOptional<z.ZodString>;
    exclus: z.ZodOptional<z.ZodString>;
    variantes: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export type Service = z.infer<typeof ServiceSchema>;
export type ServiceCreate = z.infer<typeof ServiceCreateSchema>;
export type ServiceUpdate = z.infer<typeof ServiceUpdateSchema>;
//# sourceMappingURL=service.validator.d.ts.map