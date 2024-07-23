import { Medicina } from '../medications/medications.entity';
import { Users } from '../users/users.entity';
import { Notifications } from '../notifications/notifications.entity';
export declare class Shedules {
    id: number;
    users: Users;
    medicina: Medicina;
    start_time: Date;
    interval_hours: number;
    finish_dose_time: Date;
    notifications: Notifications[];
}
