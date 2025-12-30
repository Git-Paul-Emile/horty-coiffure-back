import { z } from 'zod';
export declare const UtilisateurSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    motDePasse: z.ZodString;
    nom: z.ZodOptional<z.ZodString>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const UtilisateurCreateSchema: z.ZodObject<{
    email: z.ZodString;
    nom: z.ZodOptional<z.ZodString>;
    motDePasse: z.ZodString;
}, z.core.$strip>;
export declare const UtilisateurUpdateSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    nom: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    motDePasse: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Utilisateur = z.infer<typeof UtilisateurSchema>;
export type UtilisateurCreate = z.infer<typeof UtilisateurCreateSchema>;
export type UtilisateurUpdate = z.infer<typeof UtilisateurUpdateSchema>;
//# sourceMappingURL=user.validator.d.ts.map