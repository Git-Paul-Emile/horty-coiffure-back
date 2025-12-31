import { z } from 'zod';
export declare const PartenaireSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    logo: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    siteWeb: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const PartenaireCreateSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    logo: z.ZodOptional<z.ZodString>;
    siteWeb: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PartenaireUpdateSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nom: z.ZodOptional<z.ZodString>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    logo: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    siteWeb: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type Partenaire = z.infer<typeof PartenaireSchema>;
export type PartenaireCreate = z.infer<typeof PartenaireCreateSchema>;
export type PartenaireUpdate = z.infer<typeof PartenaireUpdateSchema>;
//# sourceMappingURL=partner.validator.d.ts.map