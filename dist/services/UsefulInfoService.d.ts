import type { UsefulInfo as InfoUtile } from '@prisma/client';
import type { InfoUtileCreate, InfoUtileUpdate } from '../validators/usefulInfo.validator.js';
declare class UsefulInfoService {
    private usefulInfoRepository;
    create(data: InfoUtileCreate): Promise<InfoUtile>;
    findAll(): Promise<InfoUtile[]>;
    findById(id: string): Promise<InfoUtile | null>;
    update(id: string, data: InfoUtileUpdate): Promise<InfoUtile>;
    delete(id: string): Promise<InfoUtile>;
}
declare const _default: UsefulInfoService;
export default _default;
//# sourceMappingURL=UsefulInfoService.d.ts.map