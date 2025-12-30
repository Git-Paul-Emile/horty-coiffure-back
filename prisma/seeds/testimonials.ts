import { PrismaClient } from '@prisma/client';

export async function createTestimonials(prisma: PrismaClient, services: { service1: any; service2: any }) {
  const testimonial1 = await prisma.testimonial.create({
    data: {
      name: 'Marie Dupont',
      text: 'Excellent service, je recommande !',
      rating: 5,
      serviceId: services.service1.id,
      status: 'APPROVED',
    },
  });

  const testimonial2 = await prisma.testimonial.create({
    data: {
      name: 'Fatou Ndiaye',
      text: 'Très professionnelle, cheveux parfaits.',
      rating: 5,
      serviceId: services.service2.id,
      status: 'APPROVED',
    },
  });

  console.log('Témoignages créés');
  return { testimonial1, testimonial2 };
}