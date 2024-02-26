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
exports.SubscriptionMongoRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongo_repository_1 = require("./mongo.repository");
const model_1 = require("../model");
const subscription_entity_1 = require("../../../../modules/subscription/subscription.entity");
let SubscriptionMongoRepository = class SubscriptionMongoRepository extends mongo_repository_1.MongoRepository {
    constructor(subscriptionModel) {
        super(subscriptionModel);
        this.subscriptionModel = subscriptionModel;
    }
    toDomainEntity(doc) {
        return new subscription_entity_1.Subscription({
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            id: doc._id,
            props: {
                email: doc.email,
                newsletterId: doc.newsletterId,
                status: doc.status,
            },
        });
    }
};
exports.SubscriptionMongoRepository = SubscriptionMongoRepository;
exports.SubscriptionMongoRepository = SubscriptionMongoRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(model_1.Subscription.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SubscriptionMongoRepository);
//# sourceMappingURL=subscription-mongo.repository.js.map