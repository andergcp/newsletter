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
exports.CreateNewsletterInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const newsletter_entity_1 = require("../newsletter.entity");
const class_validator_1 = require("class-validator");
let CreateNewsletterInput = class CreateNewsletterInput {
};
exports.CreateNewsletterInput = CreateNewsletterInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateNewsletterInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateNewsletterInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, class_validator_1.IsEmail)({}, { each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateNewsletterInput.prototype, "recipientsEmails", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateNewsletterInput.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateNewsletterInput.prototype, "sendAt", void 0);
exports.CreateNewsletterInput = CreateNewsletterInput = __decorate([
    (0, graphql_1.InputType)()
], CreateNewsletterInput);
(0, graphql_1.registerEnumType)(newsletter_entity_1.NewsletterStatus, {
    name: 'NewsletterStatus',
});
//# sourceMappingURL=newsletter-request.dto.js.map