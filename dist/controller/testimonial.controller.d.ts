import type { Request, Response, NextFunction } from 'express';
declare class TestimonialController {
    private testimonialService;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
declare const _default: TestimonialController;
export default _default;
//# sourceMappingURL=testimonial.controller.d.ts.map