import serviceRepository from '../repository/ServiceRepository.js';
import type { Service } from '@prisma/client';
import { Status } from '@prisma/client';
import type { ServiceCreate, ServiceUpdate } from '../validators/service.validator.js';
import { ServiceCreateSchema, ServiceUpdateSchema } from '../validators/service.validator.js';


class ServiceService {
   private serviceRepository = serviceRepository; //on réutilise l'instance




   async create(data: ServiceCreate): Promise<Service> {
       try {
           // Validation des données
           const validatedData = ServiceCreateSchema.parse(data);


           // Vérifier si un service avec le même nom existe déjà
           const existingServices = await this.serviceRepository.findAll();


           const duplicate = existingServices.find(s =>
               s.name.toLowerCase() === validatedData.nom.toLowerCase() && s.status !== 'INACTIVE'
           );


           if (duplicate) {
               throw new Error('Un service avec ce nom existe déjà');
           }


           const dataToCreate = {
               name: validatedData.nom,
               category: { connect: { id: validatedData.categorie } },
               duration: validatedData.duree,
               price: validatedData.prix,
               description: validatedData.description,
               included: validatedData.inclus,
               excluded: validatedData.exclus,
               imageUrl: validatedData.image,
               variants: validatedData.variantes,
               status: validatedData.archive ? Status.INACTIVE : Status.ACTIVE
           };
           const service = await this.serviceRepository.create(dataToCreate);
           console.log(`Service créé avec succès: ${service.name}`);
           return service;
       } catch (error) {
           console.error('Erreur dans le service lors de la création du service:', error);
           throw error;
       }
   }


   async findAll(): Promise<Service[]> {
       try {
           const services = await this.serviceRepository.findAll();
           console.log(`${services.length} services récupérés`);
           return services;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des services:', error);
           throw error;
       }
   }


   async findById(id: string): Promise<Service | null> {
       try {
           const service = await this.serviceRepository.findById(id);
           if (!service) {
               console.log(`Service avec l'ID ${id} non trouvé`);
               return null;
           }
           console.log(`Service trouvé: ${service.name}`);
           return service;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération du service:', error);
           throw error;
       }
   }


  


   async update(id: string, data: ServiceUpdate): Promise<Service> {
       try {
           // Validation des données
           const validatedData = ServiceUpdateSchema.parse(data);


           // Vérifier si le service existe
           const existingService = await this.serviceRepository.findById(id);
           if (!existingService) {
               throw new Error('Service non trouvé');
           }


           // Vérifier si le nouveau nom n'est pas déjà utilisé par un autre service
           if (validatedData.nom) {
               const allServices = await this.serviceRepository.findAll();
               const duplicate = allServices.find(s =>
                   s.name.toLowerCase() === validatedData.nom!.toLowerCase() &&
                   s.id !== id &&
                   s.status !== 'INACTIVE'
               );


               if (duplicate) {
                   throw new Error('Un service avec ce nom existe déjà');
               }
           }


           const dataToUpdate: any = {};
           if (validatedData.nom !== undefined) dataToUpdate.name = validatedData.nom;
           if (validatedData.categorie !== undefined) dataToUpdate.categoryId = validatedData.categorie;
           if (validatedData.duree !== undefined) dataToUpdate.duration = validatedData.duree;
           if (validatedData.prix !== undefined) dataToUpdate.price = validatedData.prix;
           if (validatedData.description !== undefined) dataToUpdate.description = validatedData.description;
           if (validatedData.inclus !== undefined) dataToUpdate.included = validatedData.inclus;
           if (validatedData.exclus !== undefined) dataToUpdate.excluded = validatedData.exclus;
           if (validatedData.image !== undefined) dataToUpdate.imageUrl = validatedData.image;
           if (validatedData.variantes !== undefined) dataToUpdate.variants = validatedData.variantes;
           if (validatedData.archive !== undefined) dataToUpdate.status = validatedData.archive ? Status.INACTIVE : Status.ACTIVE;

           const service = await this.serviceRepository.update(id, dataToUpdate);
           console.log(`Service mis à jour avec succès: ${service.name}`);
           return service;
       } catch (error) {
           console.error('Erreur dans le service lors de la mise à jour du service:', error);
           throw error;
       }
   }
  
   async delete(id: string): Promise<Service> {
       try {
           // Vérifier si le service existe
           const existingService = await this.serviceRepository.findById(id);
           if (!existingService) {
               throw new Error('Service non trouvé');
           }


           if (existingService.status === 'INACTIVE') {
               throw new Error('Le service est déjà archivé');
           }


           const service = await this.serviceRepository.delete(id);
           console.log(`Service archivé avec succès: ${service.name}`);
           return service;
       } catch (error) {
           console.error('Erreur dans le service lors de la suppression du service:', error);
           throw error;
       }
   }
}
export default new ServiceService();