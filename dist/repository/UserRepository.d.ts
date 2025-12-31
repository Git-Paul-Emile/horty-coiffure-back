import type { User } from "@prisma/client";
import type { Prisma } from "@prisma/client";
declare class UserRepository {
    create(data: Prisma.UserCreateInput): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<User>;
}
declare const _default: UserRepository;
export default _default;
//# sourceMappingURL=UserRepository.d.ts.map