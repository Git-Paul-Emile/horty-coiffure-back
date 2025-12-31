import type { User as Utilisateur } from '@prisma/client';
import type { UtilisateurCreate, UtilisateurUpdate } from '../validators/user.validator.js';
declare class UserService {
    private userRepository;
    create(data: UtilisateurCreate): Promise<Utilisateur>;
    findAll(): Promise<Utilisateur[]>;
    findById(id: string): Promise<Utilisateur | null>;
    update(id: string, data: UtilisateurUpdate): Promise<Utilisateur>;
    delete(id: string): Promise<Utilisateur>;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=UserService.d.ts.map