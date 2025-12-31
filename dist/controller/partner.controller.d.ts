import type { Request, Response, NextFunction } from 'express';
declare class PartnerController {
    private partnerService;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: PartnerController;
export default _default;
//# sourceMappingURL=partner.controller.d.ts.map