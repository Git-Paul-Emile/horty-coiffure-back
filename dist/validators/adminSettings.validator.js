import { z } from 'zod';
// Sous-schémas pour les champs Json
const horaireOuvertureSchema = z.object({
    jour: z.string(),
    ouverture: z.string().nullable(),
    fermeture: z.string().nullable(),
});
const infoContactSchema = z.object({
    telephone: z.string(),
    email: z.string().email(),
    adresse: z.string(),
});
const parametresHeroSchema = z.object({
    titre: z.string(),
    sousTitre: z.string(),
    imageUrl: z.string(),
});
const liensSociauxSchema = z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    twitter: z.string().url().optional(),
});
// Schéma principal
export const ParametresAdminSchema = z.object({
    id: z.string().optional(),
    horairesOuverture: z.array(horaireOuvertureSchema),
    infoContact: infoContactSchema,
    parametresHero: parametresHeroSchema,
    liensSociaux: liensSociauxSchema,
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const ParametresAdminCreateSchema = ParametresAdminSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const ParametresAdminUpdateSchema = ParametresAdminCreateSchema.partial();
//# sourceMappingURL=adminSettings.validator.js.map