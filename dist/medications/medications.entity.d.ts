import { Shedules } from "../shedules/shedules.entity";
import { Users } from "../users/users.entity";
export declare class Medicina {
    id: number;
    name: string;
    dosis: number;
    user: Users;
    schedules: Shedules[];
}
