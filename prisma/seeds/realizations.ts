import { PrismaClient } from '@prisma/client';

export async function createRealizations(prisma: PrismaClient, services: { service1: any; service2: any }) {
  const realization1 = await prisma.realization.create({
    data: {
      imageUrl: '/gallery-braids.jpg',
      serviceId: services.service2.id,
      caption: 'Tresses magnifiques réalisées par notre équipe',
      title: 'Tresses Africaines',
      status: 'ACTIVE',
    },
  });

  const realization2 = await prisma.realization.create({
    data: {
      imageUrl: '/gallery-twists.jpg',
      serviceId: services.service1.id,
      caption: 'Coupe moderne avec twists',
      title: 'Style Moderne',
      status: 'ACTIVE',
    },
  });

  console.log('Réalisations créées');
  return { realization1, realization2 };
}