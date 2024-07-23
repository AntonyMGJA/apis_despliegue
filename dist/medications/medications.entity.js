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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicina = void 0;
const typeorm_1 = require("typeorm");
const shedules_entity_1 = require("../shedules/shedules.entity");
const users_entity_1 = require("../users/users.entity");
let Medicina = class Medicina {
};
exports.Medicina = Medicina;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medicina.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medicina.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Medicina.prototype, "dosis", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, users => users.medicina),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", users_entity_1.Users)
], Medicina.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shedules_entity_1.Shedules, shedules => shedules.medicina),
    __metadata("design:type", Array)
], Medicina.prototype, "schedules", void 0);
exports.Medicina = Medicina = __decorate([
    (0, typeorm_1.Entity)({ name: 'medicina' })
], Medicina);
//# sourceMappingURL=medications.entity.js.map