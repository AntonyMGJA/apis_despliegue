import { ShedulesService } from './shedules.service';
import { newShed, updatShed } from './shedelus.dto';
export declare class ShedulesController {
    private readonly shedulesService;
    constructor(shedulesService: ShedulesService);
    create(newShed: newShed): Promise<import("./shedules.entity").Shedules>;
    findAll(): Promise<import("./shedules.entity").Shedules[]>;
    findOne(id: number): Promise<import("./shedules.entity").Shedules>;
    update(id: number, updateShed: updatShed): Promise<void>;
    delete(id: number): Promise<string>;
}
