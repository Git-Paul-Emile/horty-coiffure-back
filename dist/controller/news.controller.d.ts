import type { Request, Response, NextFunction } from 'express';
declare class NewsController {
    private newsService;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: NewsController;
export default _default;
//# sourceMappingURL=news.controller.d.ts.map