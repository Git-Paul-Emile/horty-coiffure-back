import { z } from 'zod';
// Schéma principal
export const TemoignageSchema = z.object({
    id: z.string().optional(),
    nom: z.string()
        .min(1, 'Le nom est requis')
        .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
    texte: z.string()
        .min(10, 'Le texte doit contenir au moins 10 caractères')
        .max(1000, 'Le texte ne peut pas dépasser 1000 caractères'),
    note: z.number().int()
        .min(1, 'La note doit être au moins 1')
        .max(5, 'La note doit être au plus 5'),
    service: z.string(),
    disponible: z.boolean().default(true),
    archive: z.boolean().default(false),
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const TemoignageCreateSchema = TemoignageSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const TemoignageUpdateSchema = TemoignageCreateSchema.partial();
//# sourceMappingURL=testimonial.validator.js.map