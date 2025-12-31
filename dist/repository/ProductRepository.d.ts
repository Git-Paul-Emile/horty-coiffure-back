import type { Product } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class ProductRepository {
    create(data: Prisma.ProductCreateInput): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    update(id: string, data: Prisma.ProductUpdateInput): Promise<Product>;
    delete(id: string): Promise<Product>;
}
declare const _default: ProductRepository;
export default _default;
//# sourceMappingURL=ProductRepository.d.ts.map