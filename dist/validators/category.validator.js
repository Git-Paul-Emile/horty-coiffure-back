import { z } from 'zod';
// Schéma principal
export const CategorieSchema = z.object({
    id: z.string().optional(),
    nom: z.string()
        .min(1, 'Le nom est requis')
        .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
    description: z.string()
        .max(1000, 'La description ne peut pas dépasser 1000 caractères')
        .optional(),
    categorieParent: z.string().optional(),
    image: z.string().optional(),
    disponible: z.boolean().default(true),
    archive: z.boolean().default(false),
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const CategorieCreateSchema = CategorieSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const CategorieUpdateSchema = CategorieCreateSchema.partial();
//# sourceMappingURL=category.validator.js.map