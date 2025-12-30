import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function createAdminUser(prisma: PrismaClient) {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@hortycoiffure.com' },
    update: {},
    create: {
      email: 'admin@hortycoiffure.com',
      password: hashedPassword,
      name: 'Administrateur',
    },
  });
  console.log('Utilisateur admin créé:', adminUser);
  return adminUser;
}