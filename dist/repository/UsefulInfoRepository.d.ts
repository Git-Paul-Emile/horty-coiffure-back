import type { UsefulInfo } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class UsefulInfoRepository {
    create(data: Prisma.UsefulInfoCreateInput): Promise<UsefulInfo>;
    findAll(): Promise<UsefulInfo[]>;
    findById(id: string): Promise<UsefulInfo | null>;
    update(id: string, data: Prisma.UsefulInfoUpdateInput): Promise<UsefulInfo>;
    delete(id: string): Promise<UsefulInfo>;
}
declare const _default: UsefulInfoRepository;
export default _default;
//# sourceMappingURL=UsefulInfoRepository.d.ts.map