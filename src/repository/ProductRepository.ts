import {prisma} from "../config/database.js"
import type { Product } from "@prisma/client"
import type { Prisma } from "@prisma/client"
class ProductRepository {


   async create(data: Prisma.ProductCreateInput): Promise<Product> {
       try {
           const product = await prisma.product.create({ data });
           return product;
       } catch (error) {
           console.error('Erreur lors de la création du produit:', error);
           throw new Error('Impossible de créer le produit');
       }
   }
   async findAll(): Promise<Product[]> {
       try {
           const products = await prisma.product.findMany({
               where: { status: 'ACTIVE' },
               orderBy: { createdAt: 'desc' }
           });
           return products;
       } catch (error) {
           console.error('Erreur lors de la récupération des produits:', error);
           throw new Error('Impossible de récupérer les produits');
       }
   }
   async findById(id: string): Promise<Product | null> {
       try {
           const product = await prisma.product.findUnique({
               where: { id }
           });
           return product;
       } catch (error) {
           console.error('Erreur lors de la récupération du produit:', error);
           throw new Error('Impossible de récupérer le produit');
       }
   }
   async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
       try {
           const product = await prisma.product.update({
               where: { id },
               data
           });
           return product;
       } catch (error) {
           console.error('Erreur lors de la mise à jour du produit:', error);
           throw new Error('Impossible de mettre à jour le produit');
       }
   }   async delete(id: string): Promise<Product> {
       try {
           const product = await prisma.product.update({
               where: { id },
               data: { status: 'INACTIVE' }
           });
           return product;
       } catch (error) {
           console.error('Erreur lors de la suppression du produit:', error);
           throw new Error('Impossible de supprimer le produit');
       }
   }
}
export default new ProductRepository();