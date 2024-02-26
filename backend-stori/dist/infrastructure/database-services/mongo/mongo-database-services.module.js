"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabaseServicesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const interfaces_1 = require("../../../core/interfaces");
const model_1 = require("./model");
const mongo_database_services_service_1 = require("./mongo-database-services.service");
const repositories_1 = require("./repositories");
const providers = [
    repositories_1.NewsletterMongoRepository,
    repositories_1.StatisticMongoRepository,
    repositories_1.SubscriptionMongoRepository,
];
let MongoDatabaseServicesModule = class MongoDatabaseServicesModule {
};
exports.MongoDatabaseServicesModule = MongoDatabaseServicesModule;
exports.MongoDatabaseServicesModule = MongoDatabaseServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: model_1.Newsletter.name, schema: model_1.NewsletterSchema },
                { name: model_1.Statistic.name, schema: model_1.StatisticSchema },
                { name: model_1.Subscription.name, schema: model_1.SubscriptionSchema },
            ]),
        ],
        providers: [
            ...providers,
            {
                provide: interfaces_1.DatabaseServicesSymbol,
                useClass: mongo_database_services_service_1.MongoDatabaseServices,
            },
        ],
        exports: [interfaces_1.DatabaseServicesSymbol],
    })
], MongoDatabaseServicesModule);
//# sourceMappingURL=mongo-database-services.module.js.map