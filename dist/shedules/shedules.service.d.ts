import { Repository } from 'typeorm';
import { Shedules } from './shedules.entity';
import { newShed, updatShed } from './shedelus.dto';
export declare class ShedulesService {
    private readonly sRepository;
    constructor(sRepository: Repository<Shedules>);
    createS(shed: newShed): Promise<Shedules>;
    findAll(): Promise<Shedules[]>;
    findShedules(id: number): Promise<Shedules>;
    updateS(id: number, shed: updatShed): Promise<void>;
    deleteS(id: number): Promise<string>;
}
