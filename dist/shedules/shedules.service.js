"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShedulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shedules_entity_1 = require("./shedules.entity");
const medications_entity_1 = require("../medications/medications.entity");
const users_entity_1 = require("../users/users.entity");
let ShedulesService = class ShedulesService {
    constructor(sRepository) {
        this.sRepository = sRepository;
    }
    async createS(shed) {
        const medicina = new medications_entity_1.Medicina();
        medicina.id = shed.medicina;
        const user = new users_entity_1.Users();
        user.id = shed.user;
        const shedul = this.sRepository.create({
            medicina,
            users: user,
            interval_hours: shed.intervalo,
            finish_dose_time: shed.finish_time,
        });
        return await this.sRepository.save(shedul);
    }
    async findAll() {
        return await this.sRepository.find({
            relations: ['medicina', 'users', 'notifications'],
        });
    }
    async findShedules(id) {
        const shedules = await this.sRepository.findOne({
            where: { id },
            relations: ['medicina', 'users', 'notifications'],
        });
        if (!shedules) {
            throw new common_1.NotFoundException(`Shedules with id ${id} not found`);
        }
        return shedules;
    }
    async updateS(id, shed) {
        const shedul = this.sRepository.create({
            interval_hours: shed.intervalo,
            finish_dose_time: shed.finish_time,
        });
        const updateResult = await this.sRepository.update(id, shedul);
        if (updateResult.affected === 0) {
            throw new common_1.NotFoundException(`Shedules with id ${id} not found`);
        }
    }
    async deleteS(id) {
        const shedules = await this.sRepository.findOne({ where: { id } });
        if (!shedules) {
            throw new common_1.NotFoundException(`Shedules with id ${id} not found`);
        }
        await this.sRepository.delete(id);
        return 'Shedules deleted';
    }
};
exports.ShedulesService = ShedulesService;
exports.ShedulesService = ShedulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shedules_entity_1.Shedules)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShedulesService);
//# sourceMappingURL=shedules.service.js.map