import type { News as Actualite } from '@prisma/client';
import type { ActualiteCreate, ActualiteUpdate } from '../validators/news.validator.js';
declare class NewsService {
    private newsRepository;
    create(data: ActualiteCreate): Promise<Actualite>;
    findAll(): Promise<Actualite[]>;
    findById(id: string): Promise<Actualite | null>;
    update(id: string, data: ActualiteUpdate): Promise<Actualite>;
    delete(id: string): Promise<Actualite>;
}
declare const _default: NewsService;
export default _default;
//# sourceMappingURL=NewsService.d.ts.map