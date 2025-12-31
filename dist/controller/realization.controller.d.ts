import type { Request, Response, NextFunction } from 'express';
declare class RealizationController {
    private realizationService;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: RealizationController;
export default _default;
//# sourceMappingURL=realization.controller.d.ts.map