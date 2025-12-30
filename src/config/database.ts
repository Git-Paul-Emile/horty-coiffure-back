import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();


export async function connectToDatabase() {
   try {
       await prisma.$connect();
       console.log("Connecté à la base de données.");
   } catch (err) {
       console.error("Erreur de connexion à la base de données:", err);
       await prisma.$disconnect();
   }
}
