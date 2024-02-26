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
exports.NewsletterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const newsletter_use_case_1 = require("./newsletter.use-case");
const newsletter_request_dto_1 = require("./dtos/newsletter-request.dto");
const newsletter_response_dto_1 = require("./dtos/newsletter-response.dto");
let NewsletterResolver = class NewsletterResolver {
    constructor(newsletterUseCases) {
        this.newsletterUseCases = newsletterUseCases;
    }
    async createNewsletter(createNewsletterInput) {
        const entity = await this.newsletterUseCases.createNewsletter(createNewsletterInput);
        return {
            id: entity.id,
            ...entity.props,
        };
    }
    async findNewsletters() {
        const entities = await this.newsletterUseCases.findAllNewsletters();
        return entities.map((entity) => ({
            id: entity.id,
            ...entity.props,
        }));
    }
};
exports.NewsletterResolver = NewsletterResolver;
__decorate([
    (0, graphql_1.Mutation)(() => newsletter_response_dto_1.NewsletterResponse),
    __param(0, (0, graphql_1.Args)('createNewsletterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newsletter_request_dto_1.CreateNewsletterInput]),
    __metadata("design:returntype", Promise)
], NewsletterResolver.prototype, "createNewsletter", null);
__decorate([
    (0, graphql_1.Query)(() => [newsletter_response_dto_1.NewsletterResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsletterResolver.prototype, "findNewsletters", null);
exports.NewsletterResolver = NewsletterResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [newsletter_use_case_1.NewsletterUseCases])
], NewsletterResolver);
//# sourceMappingURL=newsletter.resolver.js.map