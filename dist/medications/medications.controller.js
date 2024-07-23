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
exports.MedicationsController = void 0;
const common_1 = require("@nestjs/common");
const medications_service_1 = require("./medications.service");
const medications_dto_1 = require("./medications.dto");
let MedicationsController = class MedicationsController {
    constructor(MServ) {
        this.MServ = MServ;
    }
    agregarM(medicina) {
        return this.MServ.createM(medicina);
    }
    getAll() {
        return this.MServ.findAll();
    }
    findMedic(id) {
        return this.MServ.findMedicina(id);
    }
    actualizM(id, updatU) {
        return this.MServ.updateM(id, updatU);
    }
};
exports.MedicationsController = MedicationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medications_dto_1.Newmedicina]),
    __metadata("design:returntype", void 0)
], MedicationsController.prototype, "agregarM", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicationsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MedicationsController.prototype, "findMedic", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, medications_dto_1.Updatmedicina]),
    __metadata("design:returntype", void 0)
], MedicationsController.prototype, "actualizM", null);
exports.MedicationsController = MedicationsController = __decorate([
    (0, common_1.Controller)('medications'),
    __metadata("design:paramtypes", [medications_service_1.MedicationsService])
], MedicationsController);
//# sourceMappingURL=medications.controller.js.map