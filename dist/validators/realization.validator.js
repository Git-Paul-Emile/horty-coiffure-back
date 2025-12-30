import { z } from 'zod';
// Schéma principal
export const RealisationSchema = z.object({
    id: z.string().optional(),
    image: z.string().optional(),
    service: z.string(),
    legende: z.string()
        .min(1, 'La légende est requise')
        .max(500, 'La légende ne peut pas dépasser 500 caractères'),
    titre: z.string()
        .max(100, 'Le titre ne peut pas dépasser 100 caractères')
        .optional(),
    disponible: z.boolean().default(true),
    archive: z.boolean().default(false),
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const RealisationCreateSchema = RealisationSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const RealisationUpdateSchema = RealisationCreateSchema.partial();
//# sourceMappingURL=realization.validator.js.map