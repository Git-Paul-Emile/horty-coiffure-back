import { z } from 'zod';
import { CategorieProduitSchema } from './enums.js';


// Schéma principal
export const ProduitSchema = z.object({
 id: z.string().optional(),
 nom: z.string()
   .min(1, 'Le nom est requis')
   .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
 categorie: CategorieProduitSchema,
 prix: z.number()
   .min(0, 'Le prix doit être positif')
   .max(1000000, 'Le prix est trop élevé'),
 description: z.string()
   .min(10, 'La description doit contenir au moins 10 caractères')
   .max(1000, 'La description ne peut pas dépasser 1000 caractères'),
 image: z.string().optional(),
 disponible: z.boolean().default(true),
 archive: z.boolean().default(false),
 creeLe: z.date().optional(),
 modifieLe: z.date().optional(),
});


// Schéma pour la création (sans id, creeLe, modifieLe)
export const ProduitCreateSchema = ProduitSchema.omit({
 id: true,
 creeLe: true,
 modifieLe: true,
});


// Schéma pour la mise à jour (tous les champs optionnels)
export const ProduitUpdateSchema = ProduitCreateSchema.partial();


// Types TypeScript générés automatiquement
export type Produit = z.infer<typeof ProduitSchema>;
export type ProduitCreate = z.infer<typeof ProduitCreateSchema>;
export type ProduitUpdate = z.infer<typeof ProduitUpdateSchema>;