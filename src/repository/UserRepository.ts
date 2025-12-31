import {prisma} from "../config/database.js"
import type { User } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class UserRepository {


   async create(data: Prisma.UserCreateInput): Promise<User> {
       try {
           const user = await prisma.user.create({ data });
           return user;
       } catch (error) {
           console.error('Erreur lors de la création de l\'utilisateur:', error);
           throw new Error('Impossible de créer l\'utilisateur');
       }
   }
   async findAll(): Promise<User[]> {
       try {
           const users = await prisma.user.findMany({
               orderBy: { createdAt: 'desc' }
           });
           return users;
       } catch (error) {
           console.error('Erreur lors de la récupération des utilisateurs:', error);
           throw new Error('Impossible de récupérer les utilisateurs');
       }
   }
   async findById(id: string): Promise<User | null> {
       try {
           const user = await prisma.user.findUnique({
               where: { id }
           });
           return user;
       } catch (error) {
           console.error('Erreur lors de la récupération de l\'utilisateur:', error);
           throw new Error('Impossible de récupérer l\'utilisateur');
       }
   }
   async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
       try {
           const user = await prisma.user.update({
               where: { id },
               data
           });
           return user;
       } catch (error) {
           console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
           throw new Error('Impossible de mettre à jour l\'utilisateur');
       }
   }   async delete(id: string): Promise<User> {
       try {
           const user = await prisma.user.delete({
               where: { id }
           });
           return user;
       } catch (error) {
           console.error('Erreur lors de la suppression de l\'utilisateur:', error);
           throw new Error('Impossible de supprimer l\'utilisateur');
       }
   }
}
export default new UserRepository();