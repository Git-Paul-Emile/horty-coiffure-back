import { z } from 'zod';
export declare const ParametresAdminSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    horairesOuverture: z.ZodArray<z.ZodObject<{
        jour: z.ZodString;
        ouverture: z.ZodNullable<z.ZodString>;
        fermeture: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    infoContact: z.ZodObject<{
        telephone: z.ZodString;
        email: z.ZodString;
        adresse: z.ZodString;
    }, z.core.$strip>;
    parametresHero: z.ZodObject<{
        titre: z.ZodString;
        sousTitre: z.ZodString;
        imageUrl: z.ZodString;
    }, z.core.$strip>;
    liensSociaux: z.ZodObject<{
        facebook: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        twitter: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const ParametresAdminCreateSchema: z.ZodObject<{
    infoContact: z.ZodObject<{
        telephone: z.ZodString;
        email: z.ZodString;
        adresse: z.ZodString;
    }, z.core.$strip>;
    parametresHero: z.ZodObject<{
        titre: z.ZodString;
        sousTitre: z.ZodString;
        imageUrl: z.ZodString;
    }, z.core.$strip>;
    liensSociaux: z.ZodObject<{
        facebook: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        twitter: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    horairesOuverture: z.ZodArray<z.ZodObject<{
        jour: z.ZodString;
        ouverture: z.ZodNullable<z.ZodString>;
        fermeture: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ParametresAdminUpdateSchema: z.ZodObject<{
    infoContact: z.ZodOptional<z.ZodObject<{
        telephone: z.ZodString;
        email: z.ZodString;
        adresse: z.ZodString;
    }, z.core.$strip>>;
    parametresHero: z.ZodOptional<z.ZodObject<{
        titre: z.ZodString;
        sousTitre: z.ZodString;
        imageUrl: z.ZodString;
    }, z.core.$strip>>;
    liensSociaux: z.ZodOptional<z.ZodObject<{
        facebook: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        twitter: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    horairesOuverture: z.ZodOptional<z.ZodArray<z.ZodObject<{
        jour: z.ZodString;
        ouverture: z.ZodNullable<z.ZodString>;
        fermeture: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ParametresAdmin = z.infer<typeof ParametresAdminSchema>;
export type ParametresAdminCreate = z.infer<typeof ParametresAdminCreateSchema>;
export type ParametresAdminUpdate = z.infer<typeof ParametresAdminUpdateSchema>;
//# sourceMappingURL=adminSettings.validator.d.ts.map