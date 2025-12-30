import { z } from 'zod';
// Schéma principal
export const ActualiteSchema = z.object({
    id: z.string().optional(),
    titre: z.string()
        .min(1, 'Le titre est requis')
        .max(100, 'Le titre ne peut pas dépasser 100 caractères'),
    contenu: z.string()
        .min(10, 'Le contenu doit contenir au moins 10 caractères')
        .max(5000, 'Le contenu ne peut pas dépasser 5000 caractères'),
    image: z.string().optional(),
    datePublication: z.date().optional(),
    disponible: z.boolean().default(true),
    archive: z.boolean().default(false),
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const ActualiteCreateSchema = ActualiteSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const ActualiteUpdateSchema = ActualiteCreateSchema.partial();
//# sourceMappingURL=news.validator.js.map