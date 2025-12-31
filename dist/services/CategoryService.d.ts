import type { Category as Categorie } from '@prisma/client';
import type { CategorieCreate, CategorieUpdate } from '../validators/category.validator.js';
declare class CategoryService {
    private categoryRepository;
    create(data: CategorieCreate): Promise<Categorie>;
    findAll(): Promise<Categorie[]>;
    findById(id: string): Promise<Categorie | null>;
    update(id: string, data: CategorieUpdate): Promise<Categorie>;
    delete(id: string): Promise<Categorie>;
}
declare const _default: CategoryService;
export default _default;
//# sourceMappingURL=CategoryService.d.ts.map