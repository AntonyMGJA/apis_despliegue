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
exports.ShedulesController = void 0;
const common_1 = require("@nestjs/common");
const shedules_service_1 = require("./shedules.service");
const shedelus_dto_1 = require("./shedelus.dto");
let ShedulesController = class ShedulesController {
    constructor(shedulesService) {
        this.shedulesService = shedulesService;
    }
    create(newShed) {
        return this.shedulesService.createS(newShed);
    }
    findAll() {
        return this.shedulesService.findAll();
    }
    findOne(id) {
        return this.shedulesService.findShedules(id);
    }
    update(id, updateShed) {
        return this.shedulesService.updateS(id, updateShed);
    }
    delete(id) {
        return this.shedulesService.deleteS(id);
    }
};
exports.ShedulesController = ShedulesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shedelus_dto_1.newShed]),
    __metadata("design:returntype", void 0)
], ShedulesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShedulesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShedulesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, shedelus_dto_1.updatShed]),
    __metadata("design:returntype", void 0)
], ShedulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShedulesController.prototype, "delete", null);
exports.ShedulesController = ShedulesController = __decorate([
    (0, common_1.Controller)('shedules'),
    __metadata("design:paramtypes", [shedules_service_1.ShedulesService])
], ShedulesController);
//# sourceMappingURL=shedules.controller.js.map