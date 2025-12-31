import adminSettingsRepository from '../repository/AdminSettingsRepository.js';
import type { AdminSettings as ParametresAdmin } from '@prisma/client';
import type { ParametresAdminCreate, ParametresAdminUpdate } from '../validators/adminSettings.validator.js';
import { ParametresAdminCreateSchema, ParametresAdminUpdateSchema } from '../validators/adminSettings.validator.js';


class AdminSettingsService {
   private adminSettingsRepository = adminSettingsRepository; //on réutilise l'instance




   async create(data: ParametresAdminCreate): Promise<ParametresAdmin> {
       try {
           // Validation des données
           const validatedData = ParametresAdminCreateSchema.parse(data);


           // Vérifier si les paramètres existent déjà
           const existingSettings = await this.adminSettingsRepository.findById('settings');
           if (existingSettings) {
               throw new Error('Les paramètres admin existent déjà');
           }


           const dataToCreate = {
               openingHours: validatedData.horairesOuverture,
               contactInfo: validatedData.infoContact,
               heroSettings: validatedData.parametresHero,
               socialLinks: validatedData.liensSociaux
           };
           const adminSettings = await this.adminSettingsRepository.create(dataToCreate);
           console.log(`Paramètres admin créés avec succès`);
           return adminSettings;
       } catch (error) {
           console.error('Erreur dans le service lors de la création des paramètres admin:', error);
           throw error;
       }
   }


   async findAll(): Promise<ParametresAdmin[]> {
       try {
           const adminSettings = await this.adminSettingsRepository.findAll();
           console.log(`${adminSettings.length} paramètres admin récupérés`);
           return adminSettings;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des paramètres admin:', error);
           throw error;
       }
   }


   async findById(id: string): Promise<ParametresAdmin | null> {
       try {
           const adminSettings = await this.adminSettingsRepository.findById(id);
           if (!adminSettings) {
               console.log(`Paramètres admin avec l'ID ${id} non trouvés`);
               return null;
           }
           console.log(`Paramètres admin trouvés`);
           return adminSettings;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des paramètres admin:', error);
           throw error;
       }
   }


  


   async update(id: string, data: ParametresAdminUpdate): Promise<ParametresAdmin> {
       try {
           // Validation des données
           const validatedData = ParametresAdminUpdateSchema.parse(data);


           // Vérifier si les paramètres existent
           const existingSettings = await this.adminSettingsRepository.findById(id);
           if (!existingSettings) {
               throw new Error('Paramètres admin non trouvés');
           }


           const dataToUpdate: any = {};
           if (validatedData.horairesOuverture !== undefined) dataToUpdate.openingHours = validatedData.horairesOuverture;
           if (validatedData.infoContact !== undefined) dataToUpdate.contactInfo = validatedData.infoContact;
           if (validatedData.parametresHero !== undefined) dataToUpdate.heroSettings = validatedData.parametresHero;
           if (validatedData.liensSociaux !== undefined) dataToUpdate.socialLinks = validatedData.liensSociaux;

           const adminSettings = await this.adminSettingsRepository.update(id, dataToUpdate);
           console.log(`Paramètres admin mis à jour avec succès`);
           return adminSettings;
       } catch (error) {
           console.error('Erreur dans le service lors de la mise à jour des paramètres admin:', error);
           throw error;
       }
   }
  
   async delete(id: string): Promise<ParametresAdmin> {
       try {
           // Vérifier si les paramètres existent
           const existingSettings = await this.adminSettingsRepository.findById(id);
           if (!existingSettings) {
               throw new Error('Paramètres admin non trouvés');
           }


           const adminSettings = await this.adminSettingsRepository.delete(id);
           console.log(`Paramètres admin supprimés avec succès`);
           return adminSettings;
       } catch (error) {
           console.error('Erreur dans le service lors de la suppression des paramètres admin:', error);
           throw error;
       }
   }
}
export default new AdminSettingsService();