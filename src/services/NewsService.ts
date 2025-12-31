import newsRepository from '../repository/NewsRepository.js';
import type { News as Actualite } from '@prisma/client';
import { NewsStatus } from '@prisma/client';
import type { ActualiteCreate, ActualiteUpdate } from '../validators/news.validator.js';
import { ActualiteCreateSchema, ActualiteUpdateSchema } from '../validators/news.validator.js';


class NewsService {
   private newsRepository = newsRepository; //on réutilise l'instance




   async create(data: ActualiteCreate): Promise<Actualite> {
       try {
           // Validation des données
           const validatedData = ActualiteCreateSchema.parse(data);


           // Vérifier si une actualité avec le même titre existe déjà
           const existingNews = await this.newsRepository.findAll();


           const duplicate = existingNews.find(n =>
               n.title.toLowerCase() === validatedData.titre.toLowerCase() && n.status !== 'ARCHIVED'
           );


           if (duplicate) {
               throw new Error('Une actualité avec ce titre existe déjà');
           }


           const dataToCreate = {
               title: validatedData.titre,
               content: validatedData.contenu,
               imageUrl: validatedData.image,
               publishedAt: validatedData.datePublication,
               status: validatedData.archive ? NewsStatus.ARCHIVED : NewsStatus.PUBLISHED
           };
           const news = await this.newsRepository.create(dataToCreate);
           console.log(`Actualité créée avec succès: ${news.title}`);
           return news;
       } catch (error) {
           console.error('Erreur dans le service lors de la création de l\'actualité:', error);
           throw error;
       }
   }


   async findAll(): Promise<Actualite[]> {
       try {
           const news = await this.newsRepository.findAll();
           console.log(`${news.length} actualités récupérées`);
           return news;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération des actualités:', error);
           throw error;
       }
   }


   async findById(id: string): Promise<Actualite | null> {
       try {
           const news = await this.newsRepository.findById(id);
           if (!news) {
               console.log(`Actualité avec l'ID ${id} non trouvée`);
               return null;
           }
           console.log(`Actualité trouvée: ${news.title}`);
           return news;
       } catch (error) {
           console.error('Erreur dans le service lors de la récupération de l\'actualité:', error);
           throw error;
       }
   }


  


   async update(id: string, data: ActualiteUpdate): Promise<Actualite> {
       try {
           // Validation des données
           const validatedData = ActualiteUpdateSchema.parse(data);


           // Vérifier si l'actualité existe
           const existingNews = await this.newsRepository.findById(id);
           if (!existingNews) {
               throw new Error('Actualité non trouvée');
           }


           // Vérifier si le nouveau titre n'est pas déjà utilisé par une autre actualité
           if (validatedData.titre) {
               const allNews = await this.newsRepository.findAll();
               const duplicate = allNews.find(n =>
                   n.title.toLowerCase() === validatedData.titre!.toLowerCase() &&
                   n.id !== id &&
                   n.status !== 'ARCHIVED'
               );


               if (duplicate) {
                   throw new Error('Une actualité avec ce titre existe déjà');
               }
           }


           const dataToUpdate: any = {};
           if (validatedData.titre !== undefined) dataToUpdate.title = validatedData.titre;
           if (validatedData.contenu !== undefined) dataToUpdate.content = validatedData.contenu;
           if (validatedData.image !== undefined) dataToUpdate.imageUrl = validatedData.image;
           if (validatedData.datePublication !== undefined) dataToUpdate.publishedAt = validatedData.datePublication;
           if (validatedData.archive !== undefined) dataToUpdate.status = validatedData.archive ? NewsStatus.ARCHIVED : NewsStatus.PUBLISHED;

           const news = await this.newsRepository.update(id, dataToUpdate);
           console.log(`Actualité mise à jour avec succès: ${news.title}`);
           return news;
       } catch (error) {
           console.error('Erreur dans le service lors de la mise à jour de l\'actualité:', error);
           throw error;
       }
   }
  
   async delete(id: string): Promise<Actualite> {
       try {
           // Vérifier si l'actualité existe
           const existingNews = await this.newsRepository.findById(id);
           if (!existingNews) {
               throw new Error('Actualité non trouvée');
           }


           if (existingNews.status === 'ARCHIVED') {
               throw new Error('L\'actualité est déjà archivée');
           }


           const news = await this.newsRepository.delete(id);
           console.log(`Actualité archivée avec succès: ${news.title}`);
           return news;
       } catch (error) {
           console.error('Erreur dans le service lors de la suppression de l\'actualité:', error);
           throw error;
       }
   }
}
export default new NewsService();