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
exports.StatisticUseCases = void 0;
const common_1 = require("@nestjs/common");
const statistic_entity_1 = require("./statistic.entity");
const interfaces_1 = require("../../core/interfaces");
let StatisticUseCases = class StatisticUseCases {
    constructor(databaseServices) {
        this.databaseServices = databaseServices;
    }
    async createStatistic(createStatisticDto) {
        const statistic = new statistic_entity_1.Statistic({ props: createStatisticDto });
        return this.databaseServices.statistics.create(statistic);
    }
    async getStatistics() {
        const raw = await this.databaseServices.statistics.findAll();
        const recipientsQuantity = raw.reduce((acc, curr) => acc + curr.props.recipientsQuantity, 0);
        const emailsDelivered = raw.length;
        return { recipientsQuantity, emailsDelivered };
    }
};
exports.StatisticUseCases = StatisticUseCases;
exports.StatisticUseCases = StatisticUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.DatabaseServicesSymbol)),
    __metadata("design:paramtypes", [Object])
], StatisticUseCases);
//# sourceMappingURL=statistic.use-case.js.map