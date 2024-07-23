import { MedicationsService } from './medications.service';
import { Newmedicina, Updatmedicina } from './medications.dto';
export declare class MedicationsController {
    private readonly MServ;
    constructor(MServ: MedicationsService);
    agregarM(medicina: Newmedicina): Promise<import("./medications.entity").Medicina>;
    getAll(): Promise<import("./medications.entity").Medicina[]>;
    findMedic(id: number): Promise<import("./medications.entity").Medicina>;
    actualizM(id: number, updatU: Updatmedicina): Promise<void>;
}
