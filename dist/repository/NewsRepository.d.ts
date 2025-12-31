import type { News } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class NewsRepository {
    create(data: Prisma.NewsCreateInput): Promise<News>;
    findAll(): Promise<News[]>;
    findById(id: string): Promise<News | null>;
    update(id: string, data: Prisma.NewsUpdateInput): Promise<News>;
    delete(id: string): Promise<News>;
}
declare const _default: NewsRepository;
export default _default;
//# sourceMappingURL=NewsRepository.d.ts.map