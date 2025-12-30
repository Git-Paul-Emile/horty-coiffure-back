import { z } from 'zod';

// Schéma principal
export const ParametresRendezVousSchema = z.object({
 id: z.string().optional(),
 urlCalendly: z.string().url('URL Calendly invalide'),
 modeUrgence: z.boolean(),
 messageUrgence: z.string()
   .min(1, 'Le message d\'urgence est requis')
   .max(500, 'Le message d\'urgence ne peut pas dépasser 500 caractères'),
 creeLe: z.date().optional(),
 modifieLe: z.date().optional(),
});

// Schéma pour la création (sans id, creeLe, modifieLe)
export const ParametresRendezVousCreateSchema = ParametresRendezVousSchema.omit({
 id: true,
 creeLe: true,
 modifieLe: true,
});

// Schéma pour la mise à jour (tous les champs optionnels)
export const ParametresRendezVousUpdateSchema = ParametresRendezVousCreateSchema.partial();

// Types TypeScript générés automatiquement
export type ParametresRendezVous = z.infer<typeof ParametresRendezVousSchema>;
export type ParametresRendezVousCreate = z.infer<typeof ParametresRendezVousCreateSchema>;
export type ParametresRendezVousUpdate = z.infer<typeof ParametresRendezVousUpdateSchema>;