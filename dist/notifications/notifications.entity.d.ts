import { Shedules } from '../shedules/shedules.entity';
export declare class Notifications {
    id: number;
    schedule: Shedules;
    sentAt: Date;
    type: string;
    message: string;
    createdAt: Date;
}
