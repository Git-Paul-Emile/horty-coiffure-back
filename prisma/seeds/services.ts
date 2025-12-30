import { PrismaClient } from '@prisma/client';

export async function createServices(prisma: PrismaClient, categories: { coiffureAfricaine: any; beauteCategory: any }) {
  const service1 = await prisma.service.create({
    data: {
      name: 'Coupe Femme',
      description: 'Coupe de cheveux moderne pour femme',
      categoryId: categories.coiffureAfricaine.id,
      duration: 60,
      price: 15000,
      included: 'Shampooing, Coupe, Coiffage',
      excluded: 'Coloration',
      status: 'ACTIVE',
      variants: ['Court', 'Mi-long', 'Long'],
    },
  });

  const service2 = await prisma.service.create({
    data: {
      name: 'Tresses',
      description: 'Tresses africaines traditionnelles',
      categoryId: categories.coiffureAfricaine.id,
      duration: 120,
      price: 25000,
      included: 'Tresses, Accessoires',
      excluded: 'Extensions',
      status: 'ACTIVE',
      variants: ['Fines', 'Grosses', 'Avec motifs'],
    },
  });

  const service3 = await prisma.service.create({
    data: {
      name: 'Soins Capillaires',
      description: 'Masque nourrissant et soin profond',
      categoryId: categories.beauteCategory.id,
      duration: 45,
      price: 10000,
      included: 'Shampooing, Masque, Massage',
      excluded: 'Coupe',
      status: 'ACTIVE',
      variants: ['Nourrissant', 'Hydratant', 'Réparateur'],
    },
  });

  console.log('Services créés');
  return { service1, service2, service3 };
}