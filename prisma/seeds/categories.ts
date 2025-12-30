import { PrismaClient } from '@prisma/client';

export async function createCategories(prisma: PrismaClient) {
  // Catégories principales
  const coiffureCategory = await prisma.category.create({
    data: {
      name: 'Coiffure',
      description: 'Services de coiffure professionnelle',
      status: 'ACTIVE',
    },
  });

  const beauteCategory = await prisma.category.create({
    data: {
      name: 'Beauté',
      description: 'Soins de beauté et bien-être',
      status: 'ACTIVE',
    },
  });

  const pedicureManucureCategory = await prisma.category.create({
    data: {
      name: 'Pédicure & Manucure',
      description: 'Soins des pieds et des mains',
      status: 'ACTIVE',
    },
  });

  const produitsCategory = await prisma.category.create({
    data: {
      name: 'Produits',
      description: 'Produits de beauté et coiffure',
      status: 'ACTIVE',
    },
  });

  // Sous-catégories pour Coiffure
  const coiffureAfricaine = await prisma.category.create({
    data: {
      name: 'Coiffure Africaine',
      description: 'Spécialiste en nattes, tresses et extensions capillaires',
      parentId: coiffureCategory.id,
      status: 'ACTIVE',
    },
  });

  const coiffureEuropeenne = await prisma.category.create({
    data: {
      name: 'Coiffure Européenne',
      description: 'Coupes, brushings, balayages et colorations professionnels',
      parentId: coiffureCategory.id,
      status: 'ACTIVE',
    },
  });

  const coiffureEvenementielle = await prisma.category.create({
    data: {
      name: 'Coiffures Événementielles',
      description: 'Coiffures de mariage personnalisées pour événements spéciaux',
      parentId: coiffureCategory.id,
      status: 'ACTIVE',
    },
  });

  // Sous-catégories pour Beauté
  const soinsRegard = await prisma.category.create({
    data: {
      name: 'Soins du Regard',
      description: 'Pose de faux cils pour un regard intense',
      parentId: beauteCategory.id,
      status: 'ACTIVE',
    },
  });

  // Sous-catégories pour Pédicure & Manucure
  const pedicure = await prisma.category.create({
    data: {
      name: 'Pédicure',
      description: 'Pédicure médicale et soin esthétique des pieds',
      parentId: pedicureManucureCategory.id,
      status: 'ACTIVE',
    },
  });

  const manucure = await prisma.category.create({
    data: {
      name: 'Manucure',
      description: 'Pose de vernis semi-permanent pour les ongles',
      parentId: pedicureManucureCategory.id,
      status: 'ACTIVE',
    },
  });

  console.log('Catégories créées');
  return {
    coiffureCategory,
    beauteCategory,
    pedicureManucureCategory,
    produitsCategory,
    coiffureAfricaine,
    coiffureEuropeenne,
    coiffureEvenementielle,
    soinsRegard,
    pedicure,
    manucure
  };
}