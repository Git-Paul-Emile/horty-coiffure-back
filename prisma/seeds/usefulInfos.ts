import { PrismaClient } from '@prisma/client';

export async function createUsefulInfos(prisma: PrismaClient) {
  const usefulInfo1 = await prisma.usefulInfo.create({
    data: {
      title: 'Conseils pour cheveux secs',
      content: 'Utilisez un masque nourrissant une fois par semaine.',
      imageUrl: '/info-cheveux-secs.jpg',
      publishedAt: new Date(),
      status: 'PUBLISHED',
    },
  });

  const usefulInfo2 = await prisma.usefulInfo.create({
    data: {
      title: 'Entretien des tresses',
      content: 'Lavez vos tresses tous les 15 jours.',
      imageUrl: '/info-tresses.jpg',
      publishedAt: new Date(),
      status: 'PUBLISHED',
    },
  });

  console.log('Informations utiles créées');
  return { usefulInfo1, usefulInfo2 };
}