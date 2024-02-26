"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterModule = void 0;
const common_1 = require("@nestjs/common");
const database_services_module_1 = require("../../core/services/database-services/database-services.module");
const newsletter_use_case_1 = require("./newsletter.use-case");
const subscription_module_1 = require("../subscription/subscription.module");
const email_service_module_1 = require("../../core/services/email-service/email-service.module");
let NewsletterModule = class NewsletterModule {
};
exports.NewsletterModule = NewsletterModule;
exports.NewsletterModule = NewsletterModule = __decorate([
    (0, common_1.Module)({
        imports: [database_services_module_1.DatabaseServicesModule, subscription_module_1.SubscriptionModule, email_service_module_1.EmailServiceModule],
        providers: [newsletter_use_case_1.NewsletterUseCases],
        exports: [newsletter_use_case_1.NewsletterUseCases],
    })
], NewsletterModule);
//# sourceMappingURL=newsletter.module.js.map