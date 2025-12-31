import {prisma} from "../config/database.js"
import type { AdminSettings } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class AdminSettingsRepository {


   async create(data: Prisma.AdminSettingsCreateInput): Promise<AdminSettings> {
       try {
           const adminSettings = await prisma.adminSettings.create({ data });
           return adminSettings;
       } catch (error) {
           console.error('Erreur lors de la création des paramètres admin:', error);
           throw new Error('Impossible de créer les paramètres admin');
       }
   }
   async findAll(): Promise<AdminSettings[]> {
       try {
           const adminSettings = await prisma.adminSettings.findMany({
               orderBy: { createdAt: 'desc' }
           });
           return adminSettings;
       } catch (error) {
           console.error('Erreur lors de la récupération des paramètres admin:', error);
           throw new Error('Impossible de récupérer les paramètres admin');
       }
   }
   async findById(id: string): Promise<AdminSettings | null> {
       try {
           const adminSettings = await prisma.adminSettings.findUnique({
               where: { id }
           });
           return adminSettings;
       } catch (error) {
           console.error('Erreur lors de la récupération des paramètres admin:', error);
           throw new Error('Impossible de récupérer les paramètres admin');
       }
   }
   async update(id: string, data: Prisma.AdminSettingsUpdateInput): Promise<AdminSettings> {
       try {
           const adminSettings = await prisma.adminSettings.update({
               where: { id },
               data
           });
           return adminSettings;
       } catch (error) {
           console.error('Erreur lors de la mise à jour des paramètres admin:', error);
           throw new Error('Impossible de mettre à jour les paramètres admin');
       }
   }   async delete(id: string): Promise<AdminSettings> {
       try {
           const adminSettings = await prisma.adminSettings.delete({
               where: { id }
           });
           return adminSettings;
       } catch (error) {
           console.error('Erreur lors de la suppression des paramètres admin:', error);
           throw new Error('Impossible de supprimer les paramètres admin');
       }
   }
}
export default new AdminSettingsRepository();