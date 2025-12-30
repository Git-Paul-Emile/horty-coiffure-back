import { z } from 'zod';


// Schéma principal
export const PartenaireSchema = z.object({
 id: z.string().optional(),
 nom: z.string()
   .min(1, 'Le nom est requis')
   .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
 logo: z.string().optional(),
 description: z.string()
   .max(1000, 'La description ne peut pas dépasser 1000 caractères')
   .optional(),
 siteWeb: z.string().optional(),
 disponible: z.boolean().default(true),
 archive: z.boolean().default(false),
 creeLe: z.date().optional(),
 modifieLe: z.date().optional(),
});


// Schéma pour la création (sans id, creeLe, modifieLe)
export const PartenaireCreateSchema = PartenaireSchema.omit({
 id: true,
 creeLe: true,
 modifieLe: true,
});


// Schéma pour la mise à jour (tous les champs optionnels)
export const PartenaireUpdateSchema = PartenaireCreateSchema.partial();


// Types TypeScript générés automatiquement
export type Partenaire = z.infer<typeof PartenaireSchema>;
export type PartenaireCreate = z.infer<typeof PartenaireCreateSchema>;
export type PartenaireUpdate = z.infer<typeof PartenaireUpdateSchema>;