import {prisma} from "../config/database.js"
import type { Service } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class ServiceRepository {


   async create(data: Prisma.ServiceCreateInput): Promise<Service> {
       try {
           const service = await prisma.service.create({ data });
           return service;
       } catch (error) {
           console.error('Erreur lors de la création du service:', error);
           throw new Error('Impossible de créer le service');
       }
   }
   async findAll(): Promise<Service[]> {
       try {
           const services = await prisma.service.findMany({
               where: { status: 'ACTIVE' },
               orderBy: { createdAt: 'desc' }
           });
           return services;
       } catch (error) {
           console.error('Erreur lors de la récupération des services:', error);
           throw new Error('Impossible de récupérer les services');
       }
   }
   async findById(id: string): Promise<Service | null> {
       try {
           const service = await prisma.service.findUnique({
               where: { id }
           });
           return service;
       } catch (error) {
           console.error('Erreur lors de la récupération du service:', error);
           throw new Error('Impossible de récupérer le service');
       }
   }
   async update(id: string, data: Prisma.ServiceUpdateInput): Promise<Service> {
       try {
           const service = await prisma.service.update({
               where: { id },
               data
           });
           return service;
       } catch (error) {
           console.error('Erreur lors de la mise à jour du service:', error);
           throw new Error('Impossible de mettre à jour le service');
       }
   }   async delete(id: string): Promise<Service> {
       try {
           const service = await prisma.service.update({
               where: { id },
               data: { status: 'INACTIVE' }
           });
           return service;
       } catch (error) {
           console.error('Erreur lors de la suppression du service:', error);
           throw new Error('Impossible de supprimer le service');
       }
   }
}
export default new ServiceRepository();