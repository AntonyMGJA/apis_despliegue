import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';
import { newNotificacion } from './notifications.dto';
import { Updatnotif } from './notificationss.dto';
export declare class NotificationsService {
    private readonly notificationsRepository;
    constructor(notificationsRepository: Repository<Notifications>);
    createN(notification: newNotificacion): Promise<Notifications>;
    findAll(): Promise<Notifications[]>;
    findNotification(id: number): Promise<Notifications>;
    updateN(id: number, updateNotification: Updatnotif): Promise<void>;
    deleteN(id: number): Promise<string>;
}
