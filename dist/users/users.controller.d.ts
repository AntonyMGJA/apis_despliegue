import { updateUser, usersNew } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersServ;
    constructor(UsersServ: UsersService);
    insert(User: usersNew): Promise<import("./users.entity").Users>;
    Find(): Promise<import("./users.entity").Users[]>;
    findOne(id: number): Promise<import("./users.entity").Users>;
    updateUser(id: number, updatU: updateUser): Promise<void>;
    deleteUser(id: number): Promise<string>;
}
