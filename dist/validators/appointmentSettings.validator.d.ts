import { z } from 'zod';
export declare const ParametresRendezVousSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    urlCalendly: z.ZodString;
    modeUrgence: z.ZodBoolean;
    messageUrgence: z.ZodString;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const ParametresRendezVousCreateSchema: z.ZodObject<{
    urlCalendly: z.ZodString;
    modeUrgence: z.ZodBoolean;
    messageUrgence: z.ZodString;
}, z.core.$strip>;
export declare const ParametresRendezVousUpdateSchema: z.ZodObject<{
    urlCalendly: z.ZodOptional<z.ZodString>;
    modeUrgence: z.ZodOptional<z.ZodBoolean>;
    messageUrgence: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ParametresRendezVous = z.infer<typeof ParametresRendezVousSchema>;
export type ParametresRendezVousCreate = z.infer<typeof ParametresRendezVousCreateSchema>;
export type ParametresRendezVousUpdate = z.infer<typeof ParametresRendezVousUpdateSchema>;
//# sourceMappingURL=appointmentSettings.validator.d.ts.map