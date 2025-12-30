import { PrismaClient } from '@prisma/client';

export async function createFeedbacks(prisma: PrismaClient) {
  const feedback1 = await prisma.feedback.create({
    data: {
      rating: 5,
      comment: 'Service impeccable, à refaire !',
      status: 'READ',
    },
  });

  const feedback2 = await prisma.feedback.create({
    data: {
      rating: 4,
      comment: 'Très bien, mais un peu cher.',
      status: 'READ',
    },
  });

  console.log('Feedbacks créés');
  return { feedback1, feedback2 };
}