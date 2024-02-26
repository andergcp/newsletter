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
exports.SubscriptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const subscription_use_case_1 = require("./subscription.use-case");
const subscription_request_dto_1 = require("./dtos/subscription-request.dto");
const subscription_response_dto_1 = require("./dtos/subscription-response.dto");
let SubscriptionResolver = class SubscriptionResolver {
    constructor(subscriptionUseCases) {
        this.subscriptionUseCases = subscriptionUseCases;
    }
    async unsubscribeMany(unsubscribeManyInput) {
        return this.subscriptionUseCases.unsubscribeMany(unsubscribeManyInput);
    }
    async findSubscriptionsByEmail(email) {
        const entities = await this.subscriptionUseCases.findAllSubscriptions({
            email,
        });
        return entities.length
            ? entities.map((entity) => ({
                id: entity.id,
                ...entity.props,
            }))
            : [];
    }
};
exports.SubscriptionResolver = SubscriptionResolver;
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('unsubscribeManyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_request_dto_1.UnsubscribeManyInput]),
    __metadata("design:returntype", Promise)
], SubscriptionResolver.prototype, "unsubscribeMany", null);
__decorate([
    (0, graphql_1.Query)(() => subscription_response_dto_1.SubscriptionResponse),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionResolver.prototype, "findSubscriptionsByEmail", null);
exports.SubscriptionResolver = SubscriptionResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [subscription_use_case_1.SubscriptionUseCases])
], SubscriptionResolver);
//# sourceMappingURL=subscription.resolver.js.map