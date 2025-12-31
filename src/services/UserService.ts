import userRepository from '../repository/UserRepository.js';
import type { User as Utilisateur } from '@prisma/client';
import type { UtilisateurCreate, UtilisateurUpdate } from '../validators/user.validator.js';
import { UtilisateurCreateSchema, UtilisateurUpdateSchema } from '../validators/user.validator.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../config/jwt.js';


class UserService {
   private userRepository = userRepository; //on réutilise l'instance




   async create(data: UtilisateurCreate): Promise<Utilisateur> {
       try {
           // Validation des données
           const validatedData = UtilisateurCreateSchema.parse(data);


           // Vérifier si un utilisateur avec le même email existe déjà
           const existingUsers = await this.userRepository.findAll();


           const duplicate = existingUsers.find(u =>
               u.email.toLowerCase() === validatedData.email.toLowerCase()
           );


           if (duplicate) {
               throw new Error('Un utilisateur avec cet email existe déjà');
           }


           const dataToCreate = {
               email: validatedData.email,
               password: validatedData.motDePasse,
               name: validatedData.nom
           };
           const user = await this.userRepository.create(dataToCreate);
           console.log(`Utilisateur créé avec succès: ${user.email}`);
           return user;
       } catch (error) {
           console.error('Erreur dans le service lors de la création de l\'utilisateur:', error);
           throw error;
       }
   }


   async findAll(): Promise<Utilisateur[]> {
       try {
           const users = await this.userRepository.findAll();
           console.log(`${users.length} utilisateurs récupérés`);
           return users;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des utilisateurs:', error);
           throw error;
       }
   }


   async findById(id: string): Promise<Utilisateur | null> {
       try {
           const user = await this.userRepository.findById(id);
           if (!user) {
               console.log(`Utilisateur avec l'ID ${id} non trouvé`);
               return null;
           }
           console.log(`Utilisateur trouvé: ${user.email}`);
           return user;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération de l\'utilisateur:', error);
           throw error;
       }
   }


  


   async update(id: string, data: UtilisateurUpdate): Promise<Utilisateur> {
       try {
           // Validation des données
           const validatedData = UtilisateurUpdateSchema.parse(data);


           // Vérifier si l'utilisateur existe
           const existingUser = await this.userRepository.findById(id);
           if (!existingUser) {
               throw new Error('Utilisateur non trouvé');
           }


           // Vérifier si le nouvel email n'est pas déjà utilisé par un autre utilisateur
           if (validatedData.email) {
               const allUsers = await this.userRepository.findAll();
               const duplicate = allUsers.find(u =>
                   u.email.toLowerCase() === validatedData.email!.toLowerCase() &&
                   u.id !== id
               );


               if (duplicate) {
                   throw new Error('Un utilisateur avec cet email existe déjà');
               }
           }


           const dataToUpdate: any = {};
           if (validatedData.email !== undefined) dataToUpdate.email = validatedData.email;
           if (validatedData.motDePasse !== undefined) dataToUpdate.password = validatedData.motDePasse;
           if (validatedData.nom !== undefined) dataToUpdate.name = validatedData.nom;

           const user = await this.userRepository.update(id, dataToUpdate);
           console.log(`Utilisateur mis à jour avec succès: ${user.email}`);
           return user;
       } catch (error) {
           console.error('Erreur dans le service lors de la mise à jour de l\'utilisateur:', error);
           throw error;
       }
   }
  
   async delete(id: string): Promise<Utilisateur> {
       try {
           // Vérifier si l'utilisateur existe
           const existingUser = await this.userRepository.findById(id);
           if (!existingUser) {
               throw new Error('Utilisateur non trouvé');
           }


           const user = await this.userRepository.delete(id);
           console.log(`Utilisateur supprimé avec succès: ${user.email}`);
           return user;
       } catch (error) {
           console.error('Erreur dans le service lors de la suppression de l\'utilisateur:', error);
           throw error;
       }
   }
}
export default new UserService();