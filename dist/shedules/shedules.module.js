"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShedulesModule = void 0;
const common_1 = require("@nestjs/common");
const shedules_service_1 = require("./shedules.service");
const shedules_controller_1 = require("./shedules.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shedules_entity_1 = require("./shedules.entity");
let ShedulesModule = class ShedulesModule {
};
exports.ShedulesModule = ShedulesModule;
exports.ShedulesModule = ShedulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shedules_entity_1.Shedules])],
        providers: [shedules_service_1.ShedulesService],
        controllers: [shedules_controller_1.ShedulesController]
    })
], ShedulesModule);
//# sourceMappingURL=shedules.module.js.map