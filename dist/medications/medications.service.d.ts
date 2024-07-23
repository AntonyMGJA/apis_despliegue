import { Medicina } from './medications.entity';
import { Repository } from 'typeorm';
import { Newmedicina, Updatmedicina } from './medications.dto';
export declare class MedicationsService {
    private readonly MRepository;
    constructor(MRepository: Repository<Medicina>);
    createM(medicina: Newmedicina): Promise<Medicina>;
    findAll(): Promise<Medicina[]>;
    findMedicina(id: number): Promise<Medicina>;
    updateM(id: number, medicina: Updatmedicina): Promise<void>;
    deleteM(id: number): Promise<string>;
}
