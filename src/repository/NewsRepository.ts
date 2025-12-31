import {prisma} from "../config/database.js"
import type { News } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class NewsRepository {


   async create(data: Prisma.NewsCreateInput): Promise<News> {
       try {
           const news = await prisma.news.create({ data });
           return news;
       } catch (error) {
           console.error('Erreur lors de la création de la news:', error);
           throw new Error('Impossible de créer la news');
       }
   }
   async findAll(): Promise<News[]> {
       try {
           const news = await prisma.news.findMany({
               where: { status: 'PUBLISHED' },
               orderBy: { createdAt: 'desc' }
           });
           return news;
       } catch (error) {
           console.error('Erreur lors de la récupération des news:', error);
           throw new Error('Impossible de récupérer les news');
       }
   }
   async findById(id: string): Promise<News | null> {
       try {
           const news = await prisma.news.findUnique({
               where: { id }
           });
           return news;
       } catch (error) {
           console.error('Erreur lors de la récupération de la news:', error);
           throw new Error('Impossible de récupérer la news');
       }
   }
   async update(id: string, data: Prisma.NewsUpdateInput): Promise<News> {
       try {
           const news = await prisma.news.update({
               where: { id },
               data
           });
           return news;
       } catch (error) {
           console.error('Erreur lors de la mise à jour de la news:', error);
           throw new Error('Impossible de mettre à jour la news');
       }
   }   async delete(id: string): Promise<News> {
       try {
           const news = await prisma.news.update({
               where: { id },
               data: { status: 'ARCHIVED' }
           });
           return news;
       } catch (error) {
           console.error('Erreur lors de la suppression de la news:', error);
           throw new Error('Impossible de supprimer la news');
       }
   }
}
export default new NewsRepository();