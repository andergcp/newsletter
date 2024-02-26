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
exports.SubscriptionUseCases = void 0;
const common_1 = require("@nestjs/common");
const subscription_entity_1 = require("./subscription.entity");
const subscription_entity_2 = require("./subscription.entity");
const interfaces_1 = require("../../core/interfaces");
let SubscriptionUseCases = class SubscriptionUseCases {
    constructor(databaseServices) {
        this.databaseServices = databaseServices;
    }
    createSubscription(subscriptionProps) {
        const subscription = new subscription_entity_1.Subscription({ props: subscriptionProps });
        return this.databaseServices.subscriptions.create(subscription);
    }
    findAllSubscriptions(filter) {
        return this.databaseServices.subscriptions.findAll(filter);
    }
    unsubscribeMany({ subscriptionIds }) {
        subscriptionIds.map(async (id) => {
            const subscription = await this.databaseServices.subscriptions.findById(id);
            subscription.props.status = subscription_entity_2.SubscriptionStatus.UNSUBSCRIBED;
            await this.databaseServices.subscriptions.update(id, subscription);
        });
        return Promise.resolve(true);
    }
};
exports.SubscriptionUseCases = SubscriptionUseCases;
exports.SubscriptionUseCases = SubscriptionUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.DatabaseServicesSymbol)),
    __metadata("design:paramtypes", [Object])
], SubscriptionUseCases);
//# sourceMappingURL=subscription.use-case.js.map