import { PrismaClient } from '@prisma/client';

export async function createAppointmentSettings(prisma: PrismaClient) {
  const appointmentSettings = await prisma.appointmentSettings.upsert({
    where: { id: 'appointment_settings' },
    update: {},
    create: {
      id: 'appointment_settings',
      calendlyUrl: 'https://calendly.com/hortycoiffure',
      urgencyMode: false,
      urgencyMessage: 'Réservez dès maintenant !',
    },
  });
  console.log('Paramètres de rendez-vous créés');
  return appointmentSettings;
}