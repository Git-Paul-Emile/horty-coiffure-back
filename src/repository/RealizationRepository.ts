import {prisma} from "../config/database.js"
import type { Realization } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class RealizationRepository {


   async create(data: Prisma.RealizationCreateInput): Promise<Realization> {
       try {
           const realization = await prisma.realization.create({ data });
           return realization;
       } catch (error) {
           console.error('Erreur lors de la création de la réalisation:', error);
           throw new Error('Impossible de créer la réalisation');
       }
   }
   async findAll(): Promise<Realization[]> {
       try {
           const realizations = await prisma.realization.findMany({
               where: { status: 'ACTIVE' },
               orderBy: { createdAt: 'desc' }
           });
           return realizations;
       } catch (error) {
           console.error('Erreur lors de la récupération des réalisations:', error);
           throw new Error('Impossible de récupérer les réalisations');
       }
   }
   async findById(id: string): Promise<Realization | null> {
       try {
           const realization = await prisma.realization.findUnique({
               where: { id }
           });
           return realization;
       } catch (error) {
           console.error('Erreur lors de la récupération de la réalisation:', error);
           throw new Error('Impossible de récupérer la réalisation');
       }
   }
   async update(id: string, data: Prisma.RealizationUpdateInput): Promise<Realization> {
       try {
           const realization = await prisma.realization.update({
               where: { id },
               data
           });
           return realization;
       } catch (error) {
           console.error('Erreur lors de la mise à jour de la réalisation:', error);
           throw new Error('Impossible de mettre à jour la réalisation');
       }
   }   async delete(id: string): Promise<Realization> {
       try {
           const realization = await prisma.realization.update({
               where: { id },
               data: { status: 'INACTIVE' }
           });
           return realization;
       } catch (error) {
           console.error('Erreur lors de la suppression de la réalisation:', error);
           throw new Error('Impossible de supprimer la réalisation');
       }
   }
}
export default new RealizationRepository();