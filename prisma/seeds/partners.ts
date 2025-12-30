import { PrismaClient } from '@prisma/client';

export async function createPartners(prisma: PrismaClient) {
  const partner1 = await prisma.partner.create({
    data: {
      name: 'L\'Oréal',
      logo: '/logo-loreal.jpg',
      description: 'Partenaire officiel L\'Oréal',
      website: 'https://loreal.com',
      status: 'ACTIVE',
    },
  });

  const partner2 = await prisma.partner.create({
    data: {
      name: 'Garnier',
      logo: '/logo-garnier.jpg',
      description: 'Produits Garnier disponibles',
      website: 'https://garnier.com',
      status: 'ACTIVE',
    },
  });

  console.log('Partenaires créés');
  return { partner1, partner2 };
}