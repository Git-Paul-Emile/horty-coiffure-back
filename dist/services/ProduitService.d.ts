import type { Product as Produit } from '@prisma/client';
import type { ProduitCreate, ProduitUpdate } from '../validators/product.validator.js';
declare class ProduitService {
    private produitRepository;
    create(data: ProduitCreate): Promise<Produit>;
    findAll(): Promise<Produit[]>;
    findById(id: string): Promise<Produit | null>;
    update(id: string, data: ProduitUpdate): Promise<Produit>;
    delete(id: string): Promise<Produit>;
}
declare const _default: ProduitService;
export default _default;
//# sourceMappingURL=ProduitService.d.ts.map