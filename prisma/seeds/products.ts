import { PrismaClient } from '@prisma/client';

export async function createProducts(prisma: PrismaClient, categories: { produitsCategory: any }) {
  const product1 = await prisma.product.create({
    data: {
      name: 'Shampooing Nourrissant',
      description: 'Shampooing pour cheveux secs et abîmés',
      price: 5000,
      brand: 'Horty',
      categoryId: categories.produitsCategory.id,
      status: 'ACTIVE',
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Huile pour Cheveux',
      description: 'Huile essentielle pour brillance',
      price: 8000,
      brand: 'Naturelle',
      categoryId: categories.produitsCategory.id,
      status: 'ACTIVE',
    },
  });

  console.log('Produits créés');
  return { product1, product2 };
}