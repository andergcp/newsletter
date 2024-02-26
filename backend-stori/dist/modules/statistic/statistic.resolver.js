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
exports.StatisticResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const statistic_use_case_1 = require("./statistic.use-case");
const statistic_response_dto_1 = require("./dtos/statistic-response.dto");
let StatisticResolver = class StatisticResolver {
    constructor(statisticUsecases) {
        this.statisticUsecases = statisticUsecases;
    }
    async getStatistics() {
        return this.statisticUsecases.getStatistics();
    }
};
exports.StatisticResolver = StatisticResolver;
__decorate([
    (0, graphql_1.Query)(() => statistic_response_dto_1.GetStatisticsResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticResolver.prototype, "getStatistics", null);
exports.StatisticResolver = StatisticResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [statistic_use_case_1.StatisticUseCases])
], StatisticResolver);
//# sourceMappingURL=statistic.resolver.js.map