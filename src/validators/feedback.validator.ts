import { z } from 'zod';


// Schéma principal
export const CommentaireSchema = z.object({
 id: z.string().optional(),
 note: z.number().int()
   .min(1, 'La note doit être au moins 1')
   .max(5, 'La note doit être au plus 5'),
 commentaire: z.string()
   .min(10, 'Le commentaire doit contenir au moins 10 caractères')
   .max(1000, 'Le commentaire ne peut pas dépasser 1000 caractères'),
 disponible: z.boolean().default(true),
 archive: z.boolean().default(false),
 creeLe: z.date().optional(),
 modifieLe: z.date().optional(),
});


// Schéma pour la création (sans id, creeLe, modifieLe)
export const CommentaireCreateSchema = CommentaireSchema.omit({
 id: true,
 creeLe: true,
 modifieLe: true,
});


// Schéma pour la mise à jour (tous les champs optionnels)
export const CommentaireUpdateSchema = CommentaireCreateSchema.partial();


// Types TypeScript générés automatiquement
export type Commentaire = z.infer<typeof CommentaireSchema>;
export type CommentaireCreate = z.infer<typeof CommentaireCreateSchema>;
export type CommentaireUpdate = z.infer<typeof CommentaireUpdateSchema>;