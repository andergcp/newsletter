"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticModule = void 0;
const common_1 = require("@nestjs/common");
const database_services_module_1 = require("../../core/services/database-services/database-services.module");
const statistic_use_case_1 = require("./statistic.use-case");
let StatisticModule = class StatisticModule {
};
exports.StatisticModule = StatisticModule;
exports.StatisticModule = StatisticModule = __decorate([
    (0, common_1.Module)({
        imports: [database_services_module_1.DatabaseServicesModule],
        providers: [statistic_use_case_1.StatisticUseCases],
        exports: [statistic_use_case_1.StatisticUseCases],
    })
], StatisticModule);
//# sourceMappingURL=statistic.module.js.map