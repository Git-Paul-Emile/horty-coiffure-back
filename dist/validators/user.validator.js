import { z } from 'zod';
// Schéma principal
export const UtilisateurSchema = z.object({
    id: z.string().optional(),
    email: z.string().email('Email invalide'),
    motDePasse: z.string()
        .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
        .max(100, 'Le mot de passe ne peut pas dépasser 100 caractères'),
    nom: z.string()
        .max(100, 'Le nom ne peut pas dépasser 100 caractères')
        .optional(),
    creeLe: z.date().optional(),
    modifieLe: z.date().optional(),
});
// Schéma pour la création (sans id, creeLe, modifieLe)
export const UtilisateurCreateSchema = UtilisateurSchema.omit({
    id: true,
    creeLe: true,
    modifieLe: true,
});
// Schéma pour la mise à jour (tous les champs optionnels)
export const UtilisateurUpdateSchema = UtilisateurCreateSchema.partial();
//# sourceMappingURL=user.validator.js.map