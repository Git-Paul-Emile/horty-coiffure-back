import { z } from 'zod';


// Schéma principal
export const ServiceSchema = z.object({
 id: z.string().optional(),
 nom: z.string()
   .min(1, 'Le nom est requis')
   .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
 categorie: z.string(),
 duree: z.number().int().positive('La durée doit être positive'),
 prix: z.number()
   .min(0, 'Le prix doit être positif')
   .max(1000000, 'Le prix est trop élevé'),
 description: z.string()
   .min(10, 'La description doit contenir au moins 10 caractères')
   .max(1000, 'La description ne peut pas dépasser 1000 caractères'),
 inclus: z.string()
   .min(1, 'Le champ inclus est requis'),
 exclus: z.string()
   .min(1, 'Le champ exclus est requis'),
 image: z.string().optional(),
 variantes: z.array(z.string()).optional(),
 disponible: z.boolean().default(true),
 archive: z.boolean().default(false),
 creeLe: z.date().optional(),
 modifieLe: z.date().optional(),
});


// Schéma pour la création (sans id, creeLe, modifieLe)
export const ServiceCreateSchema = ServiceSchema.omit({
 id: true,
 creeLe: true,
 modifieLe: true,
});


// Schéma pour la mise à jour (tous les champs optionnels)
export const ServiceUpdateSchema = ServiceCreateSchema.partial();


// Types TypeScript générés automatiquement
export type Service = z.infer<typeof ServiceSchema>;
export type ServiceCreate = z.infer<typeof ServiceCreateSchema>;
export type ServiceUpdate = z.infer<typeof ServiceUpdateSchema>;