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
exports.Shedules = void 0;
const typeorm_1 = require("typeorm");
const medications_entity_1 = require("../medications/medications.entity");
const users_entity_1 = require("../users/users.entity");
const notifications_entity_1 = require("../notifications/notifications.entity");
let Shedules = class Shedules {
};
exports.Shedules = Shedules;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Shedules.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, users => users.shedules),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", users_entity_1.Users)
], Shedules.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medications_entity_1.Medicina, medicina => medicina.schedules),
    (0, typeorm_1.JoinColumn)({ name: 'medicina' }),
    __metadata("design:type", medications_entity_1.Medicina)
], Shedules.prototype, "medicina", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Shedules.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Shedules.prototype, "interval_hours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Shedules.prototype, "finish_dose_time", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notifications_entity_1.Notifications, notifications => notifications.schedule),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Shedules.prototype, "notifications", void 0);
exports.Shedules = Shedules = __decorate([
    (0, typeorm_1.Entity)({ name: 'shedules' })
], Shedules);
//# sourceMappingURL=shedules.entity.js.map