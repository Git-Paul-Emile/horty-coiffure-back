import { PrismaClient } from '@prisma/client';
import { createAdminUser } from './seeds/user';
import { createAdminSettings } from './seeds/adminSettings';
import { createAppointmentSettings } from './seeds/appointmentSettings';
import { createCategories } from './seeds/categories';
import { createServices } from './seeds/services';
import { createProducts } from './seeds/products';
import { createPartners } from './seeds/partners';
import { createRealizations } from './seeds/realizations';
import { createTestimonials } from './seeds/testimonials';
import { createNews } from './seeds/news';
import { createUsefulInfos } from './seeds/usefulInfos';
import { createFeedbacks } from './seeds/feedbacks';

const prisma = new PrismaClient();

async function main() {
  console.log('Début du seeding...');

  await createAdminUser(prisma);
  await createAdminSettings(prisma);
  await createAppointmentSettings(prisma);
  const categories = await createCategories(prisma);
  const services = await createServices(prisma, { coiffureAfricaine: categories.coiffureAfricaine, beauteCategory: categories.beauteCategory });
  await createProducts(prisma, categories);
  await createPartners(prisma);
  await createRealizations(prisma, services);
  await createTestimonials(prisma, services);
  await createNews(prisma);
  await createUsefulInfos(prisma);
  await createFeedbacks(prisma);

  console.log('Seeding terminé avec succès !');
}

main()
  .catch((e) => {
    console.error('Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });