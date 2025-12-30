import { PrismaClient } from '@prisma/client';

export async function createAdminSettings(prisma: PrismaClient) {
  const adminSettings = await prisma.adminSettings.upsert({
    where: { id: 'settings' },
    update: {},
    create: {
      id: 'settings',
      openingHours: [
        { day: 'Lundi', open: '09:00', close: '18:00' },
        { day: 'Mardi', open: '09:00', close: '18:00' },
        { day: 'Mercredi', open: '09:00', close: '18:00' },
        { day: 'Jeudi', open: '09:00', close: '18:00' },
        { day: 'Vendredi', open: '09:00', close: '18:00' },
        { day: 'Samedi', open: '08:00', close: '16:00' },
        { day: 'Dimanche', open: null, close: null },
      ],
      contactInfo: {
        phone: '+221 77 123 45 67',
        email: 'contact@hortycoiffure.com',
        address: 'Dakar, Sénégal',
      },
      heroSettings: {
        title: 'Bienvenue chez Horty Coiffure',
        subtitle: 'Votre sanctuaire du style',
        imageUrl: '/hero-image.jpg',
      },
      socialLinks: {
        facebook: 'https://facebook.com/hortycoiffure',
        instagram: 'https://instagram.com/hortycoiffure',
        twitter: 'https://twitter.com/hortycoiffure',
      },
    },
  });
  console.log('Paramètres admin créés');
  return adminSettings;
}