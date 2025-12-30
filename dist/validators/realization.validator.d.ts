import { z } from 'zod';
export declare const RealisationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    service: z.ZodString;
    legende: z.ZodString;
    titre: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    creeLe: z.ZodOptional<z.ZodDate>;
    modifieLe: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const RealisationCreateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    titre: z.ZodOptional<z.ZodString>;
    disponible: z.ZodDefault<z.ZodBoolean>;
    archive: z.ZodDefault<z.ZodBoolean>;
    service: z.ZodString;
    legende: z.ZodString;
}, z.core.$strip>;
export declare const RealisationUpdateSchema: z.ZodObject<{
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    titre: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    disponible: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    service: z.ZodOptional<z.ZodString>;
    legende: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Realisation = z.infer<typeof RealisationSchema>;
export type RealisationCreate = z.infer<typeof RealisationCreateSchema>;
export type RealisationUpdate = z.infer<typeof RealisationUpdateSchema>;
//# sourceMappingURL=realization.validator.d.ts.map