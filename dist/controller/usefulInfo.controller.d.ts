import type { Request, Response, NextFunction } from 'express';
declare class UsefulInfoController {
    private usefulInfoService;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: UsefulInfoController;
export default _default;
//# sourceMappingURL=usefulInfo.controller.d.ts.map