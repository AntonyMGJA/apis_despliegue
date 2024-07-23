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
exports.MedicationsService = void 0;
const common_1 = require("@nestjs/common");
const medications_entity_1 = require("./medications.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let MedicationsService = class MedicationsService {
    constructor(MRepository) {
        this.MRepository = MRepository;
    }
    async createM(medicina) {
        const user = new users_entity_1.Users();
        user.id = medicina.user;
        const med = new medications_entity_1.Medicina();
        med.name = medicina.name;
        med.user = user;
        med.dosis = medicina.dosis;
        return await this.MRepository.save(med);
    }
    async findAll() {
        return await this.MRepository.find({ relations: ['user'] });
    }
    async findMedicina(id) {
        const medicina = await this.MRepository.findOne({
            where: { id },
            relations: {
                user: true,
                schedules: true
            }
        });
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with id ${id} not found`);
        }
        return medicina;
    }
    async updateM(id, medicina) {
        const updateResult = await this.MRepository.update(id, medicina);
        if (updateResult.affected === 0) {
            throw new common_1.NotFoundException(`Medicina with id ${id} not found`);
        }
    }
    async deleteM(id) {
        const find = await this.MRepository.findOne({ where: { id } });
        if (!find) {
            throw new common_1.NotFoundException(`Medicina with id ${id} not found`);
        }
        await this.MRepository.delete(id);
        return 'Medicina borrada';
    }
};
exports.MedicationsService = MedicationsService;
exports.MedicationsService = MedicationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medications_entity_1.Medicina)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicationsService);
//# sourceMappingURL=medications.service.js.map