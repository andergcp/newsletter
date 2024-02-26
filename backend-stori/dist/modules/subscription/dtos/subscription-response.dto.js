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
exports.SubscriptionResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const subscription_entity_1 = require("../subscription.entity");
let SubscriptionResponse = class SubscriptionResponse {
};
exports.SubscriptionResponse = SubscriptionResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionResponse.prototype, "newsletterId", void 0);
__decorate([
    (0, graphql_1.Field)(() => subscription_entity_1.SubscriptionStatus),
    __metadata("design:type", String)
], SubscriptionResponse.prototype, "status", void 0);
exports.SubscriptionResponse = SubscriptionResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SubscriptionResponse);
(0, graphql_1.registerEnumType)(subscription_entity_1.SubscriptionStatus, {
    name: 'SubscriptionStatus',
});
//# sourceMappingURL=subscription-response.dto.js.map