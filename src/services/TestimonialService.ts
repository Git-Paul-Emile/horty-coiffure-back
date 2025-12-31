import testimonialRepository from '../repository/TestimonialRepository.js';
import type { Testimonial as Temoignage } from '@prisma/client';
import { TestimonialStatus } from '@prisma/client';
import type { TemoignageCreate, TemoignageUpdate } from '../validators/testimonial.validator.js';
import { TemoignageCreateSchema, TemoignageUpdateSchema } from '../validators/testimonial.validator.js';


class TestimonialService {
   private testimonialRepository = testimonialRepository; //on réutilise l'instance




   async create(data: TemoignageCreate): Promise<Temoignage> {
       try {
           // Validation des données
           const validatedData = TemoignageCreateSchema.parse(data);


           const dataToCreate = {
               name: validatedData.nom,
               text: validatedData.texte,
               rating: validatedData.note,
               service: { connect: { id: validatedData.service } },
               status: validatedData.archive ? TestimonialStatus.REJECTED : TestimonialStatus.APPROVED
           };
           const testimonial = await this.testimonialRepository.create(dataToCreate);
           console.log(`Témoignage créé avec succès: ${testimonial.name}`);
           return testimonial;
       } catch (error) {
           console.error('Erreur dans le service lors de la création du témoignage:', error);
           throw error;
       }
   }


   async findAll(): Promise<Temoignage[]> {
       try {
           const testimonials = await this.testimonialRepository.findAll();
           console.log(`${testimonials.length} témoignages récupérés`);
           return testimonials;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des témoignages:', error);
           throw error;
       }
   }


   async findById(id: string): Promise<Temoignage | null> {
       try {
           const testimonial = await this.testimonialRepository.findById(id);
           if (!testimonial) {
               console.log(`Témoignage avec l'ID ${id} non trouvé`);
               return null;
           }
           console.log(`Témoignage trouvé: ${testimonial.name}`);
           return testimonial;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération du témoignage:', error);
           throw error;
       }
   }


  


   async update(id: string, data: TemoignageUpdate): Promise<Temoignage> {
       try {
           // Validation des données
           const validatedData = TemoignageUpdateSchema.parse(data);


           // Vérifier si le témoignage existe
           const existingTestimonial = await this.testimonialRepository.findById(id);
           if (!existingTestimonial) {
               throw new Error('Témoignage non trouvé');
           }


           const dataToUpdate: any = {};
           if (validatedData.nom !== undefined) dataToUpdate.name = validatedData.nom;
           if (validatedData.texte !== undefined) dataToUpdate.text = validatedData.texte;
           if (validatedData.note !== undefined) dataToUpdate.rating = validatedData.note;
           if (validatedData.service !== undefined) dataToUpdate.serviceId = validatedData.service;
           if (validatedData.archive !== undefined) dataToUpdate.status = validatedData.archive ? TestimonialStatus.REJECTED : TestimonialStatus.APPROVED;

           const testimonial = await this.testimonialRepository.update(id, dataToUpdate);
           console.log(`Témoignage mis à jour avec succès: ${testimonial.name}`);
           return testimonial;
       } catch (error) {
           console.error('Erreur dans le service lors de la mise à jour du témoignage:', error);
           throw error;
       }
   }
  
   async delete(id: string): Promise<Temoignage> {
       try {
           // Vérifier si le témoignage existe
           const existingTestimonial = await this.testimonialRepository.findById(id);
           if (!existingTestimonial) {
               throw new Error('Témoignage non trouvé');
           }


           if (existingTestimonial.status === 'REJECTED') {
               throw new Error('Le témoignage est déjà rejeté');
           }


           const testimonial = await this.testimonialRepository.delete(id);
           console.log(`Témoignage rejeté avec succès: ${testimonial.name}`);
           return testimonial;
       } catch (error) {
           console.error('Erreur dans le service lors de la suppression du témoignage:', error);
           throw error;
       }
   }
}
export default new TestimonialService();