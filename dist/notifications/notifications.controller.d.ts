import { NotificationsService } from './notifications.service';
import { newNotificacion } from './notifications.dto';
import { Notifications } from './notifications.entity';
import { Updatnotif } from './notificationss.dto';
export declare class NotificationsController {
    private readonly NServ;
    constructor(NServ: NotificationsService);
    agregarN(Notific: newNotificacion): Promise<Notifications>;
    getAll(): Promise<Notifications[]>;
    findNotif(id: number): Promise<Notifications>;
    actualizN(id: number, updatU: Updatnotif): Promise<void>;
    deletNotif(id: number): Promise<string>;
}
