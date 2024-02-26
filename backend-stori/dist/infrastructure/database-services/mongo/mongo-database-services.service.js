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
exports.MongoDatabaseServices = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const model_1 = require("./model");
const repositories_1 = require("./repositories");
let MongoDatabaseServices = class MongoDatabaseServices {
    constructor(NewsletterRepository, SubscriptionRepository, StatisticRepository) {
        this.NewsletterRepository = NewsletterRepository;
        this.SubscriptionRepository = SubscriptionRepository;
        this.StatisticRepository = StatisticRepository;
    }
    onApplicationBootstrap() {
        this.newsletters = new repositories_1.NewsletterMongoRepository(this.NewsletterRepository);
        this.subscriptions = new repositories_1.SubscriptionMongoRepository(this.SubscriptionRepository);
        this.statistics = new repositories_1.StatisticMongoRepository(this.StatisticRepository);
    }
};
exports.MongoDatabaseServices = MongoDatabaseServices;
exports.MongoDatabaseServices = MongoDatabaseServices = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(model_1.Newsletter.name)),
    __param(1, (0, mongoose_1.InjectModel)(model_1.Subscription.name)),
    __param(2, (0, mongoose_1.InjectModel)(model_1.Statistic.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MongoDatabaseServices);
//# sourceMappingURL=mongo-database-services.service.js.map