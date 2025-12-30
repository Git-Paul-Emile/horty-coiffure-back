import { PrismaClient } from '@prisma/client';

export async function createNews(prisma: PrismaClient) {
  const news1 = await prisma.news.create({
    data: {
      title: 'Nouveau service de coloration',
      content: 'Découvrez notre nouveau service de coloration naturelle.',
      imageUrl: '/news-coloration.jpg',
      publishedAt: new Date(),
      status: 'PUBLISHED',
    },
  });

  const news2 = await prisma.news.create({
    data: {
      title: 'Promotion été',
      content: 'Profitez de 20% de réduction sur tous les soins.',
      imageUrl: '/news-promo.jpg',
      publishedAt: new Date(),
      status: 'PUBLISHED',
    },
  });

  console.log('Actualités créées');
  return { news1, news2 };
}