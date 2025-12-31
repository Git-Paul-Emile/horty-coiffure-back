import {prisma} from "../config/database.js"
import type { Testimonial } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class TestimonialRepository {


   async create(data: Prisma.TestimonialCreateInput): Promise<Testimonial> {
       try {
           const testimonial = await prisma.testimonial.create({ data });
           return testimonial;
       } catch (error) {
           console.error('Erreur lors de la création du testimonial:', error);
           throw new Error('Impossible de créer le testimonial');
       }
   }
   async findAll(): Promise<Testimonial[]> {
       try {
           const testimonials = await prisma.testimonial.findMany({
               where: { status: 'APPROVED' },
               orderBy: { createdAt: 'desc' }
           });
           return testimonials;
       } catch (error) {
           console.error('Erreur lors de la récupération des testimonials:', error);
           throw new Error('Impossible de récupérer les testimonials');
       }
   }
   async findById(id: string): Promise<Testimonial | null> {
       try {
           const testimonial = await prisma.testimonial.findUnique({
               where: { id }
           });
           return testimonial;
       } catch (error) {
           console.error('Erreur lors de la récupération du testimonial:', error);
           throw new Error('Impossible de récupérer le testimonial');
       }
   }
   async update(id: string, data: Prisma.TestimonialUpdateInput): Promise<Testimonial> {
       try {
           const testimonial = await prisma.testimonial.update({
               where: { id },
               data
           });
           return testimonial;
       } catch (error) {
           console.error('Erreur lors de la mise à jour du testimonial:', error);
           throw new Error('Impossible de mettre à jour le testimonial');
       }
   }   async delete(id: string): Promise<Testimonial> {
       try {
           const testimonial = await prisma.testimonial.update({
               where: { id },
               data: { status: 'REJECTED' }
           });
           return testimonial;
       } catch (error) {
           console.error('Erreur lors de la suppression du testimonial:', error);
           throw new Error('Impossible de supprimer le testimonial');
       }
   }
}
export default new TestimonialRepository();