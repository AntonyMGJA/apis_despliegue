import { Injectable, NotFoundException } from '@nestjs/common';
import { Medicina } from './medications.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newmedicina, Updatmedicina } from './medications.dto';
import { Users } from '../users/users.entity';

@Injectable()
export class MedicationsService {
    constructor(
        @InjectRepository(Medicina) 
        private readonly MRepository: Repository<Medicina>,
    ){}

    async createM(medicina: Newmedicina): Promise<Medicina> {
        const user = new Users();
        user.id = medicina.user;
        
        const med = new Medicina();
        med.name = medicina.name;
        med.user = user;
        med.dosis = medicina.dosis;
        return await this.MRepository.save(med);
    }

    async findAll(): Promise<Medicina[]> {
        return await this.MRepository.find({ relations: ['user'] });
    }

    async findMedicina(id: number): Promise<Medicina> {
        const medicina = await this.MRepository.findOne({
            where: { id },
            relations: {
                user: true,
                schedules: true
            }//['user', 'schedules'],
        });
        if (!medicina) {
            throw new NotFoundException(`Medicina with id ${id} not found`);
        }
        return medicina;
    }

    async updateM(id: number, medicina: Updatmedicina): Promise<void> {
        const updateResult = await this.MRepository.update(id, medicina);
        if (updateResult.affected === 0) {
            throw new NotFoundException(`Medicina with id ${id} not found`);
        }
    }

    async deleteM(id: number): Promise<string> {
        const find = await this.MRepository.findOne({ where: { id } });
        if (!find) {
            throw new NotFoundException(`Medicina with id ${id} not found`);
        }
        await this.MRepository.delete(id);
        return 'Medicina borrada';
    }
}