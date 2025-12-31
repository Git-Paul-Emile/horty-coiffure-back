import type { Category } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class CategoryRepository {
    create(data: Prisma.CategoryCreateInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category | null>;
    update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category>;
    delete(id: string): Promise<Category>;
}
declare const _default: CategoryRepository;
export default _default;
//# sourceMappingURL=CategoryRepository.d.ts.map