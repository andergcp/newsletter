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
exports.NewsletterUseCases = void 0;
const interfaces_1 = require("../../core/interfaces");
const common_1 = require("@nestjs/common");
const newsletter_entity_1 = require("./newsletter.entity");
const newsletter_entity_2 = require("./newsletter.entity");
const subscription_use_case_1 = require("../subscription/subscription.use-case");
const subscription_entity_1 = require("../subscription/subscription.entity");
const exceptions_1 = require("../../core/exceptions");
let NewsletterUseCases = class NewsletterUseCases {
    constructor(databaseServices, emailService, subscriptionUseCases) {
        this.databaseServices = databaseServices;
        this.emailService = emailService;
        this.subscriptionUseCases = subscriptionUseCases;
    }
    async createNewsletter(createNewsletterDto) {
        const newsletterWithSameName = await this.databaseServices.newsletters.findAll({
            name: createNewsletterDto.name,
        });
        if (newsletterWithSameName.length)
            throw new exceptions_1.InvalidArgumentException('Newsletter with the same name already exists');
        const newsletter = new newsletter_entity_1.Newsletter({ props: createNewsletterDto });
        newsletter.status = newsletter_entity_2.NewsletterStatus.PENDING;
        const persistedNewsletter = await this.databaseServices.newsletters.create(newsletter);
        const emailData = {
            recipients: createNewsletterDto.recipientsEmails,
            subject: createNewsletterDto.subject,
            attachmentUrl: createNewsletterDto.fileUrl,
            unsubscribeUrl: 'https://stori.com/unsubscribe',
        };
        const sendReponse = await this.emailService.sendEmailWithAttachment(emailData);
        if (!sendReponse) {
            persistedNewsletter.status = newsletter_entity_2.NewsletterStatus.FAILED;
            await this.databaseServices.newsletters.update(persistedNewsletter.id, persistedNewsletter);
            return persistedNewsletter;
        }
        if (persistedNewsletter.props.recipientsEmails.length) {
            await this.createNewsletterSubscriptions(persistedNewsletter.props.recipientsEmails, persistedNewsletter.id);
        }
        return persistedNewsletter;
    }
    findAllNewsletters() {
        return this.databaseServices.newsletters.findAll();
    }
    async createNewsletterSubscriptions(emails, newsletterId) {
        if (!emails.length)
            return;
        const subscriptions = await this.subscriptionUseCases.findAllSubscriptions({
            newsletterId,
        });
        const emailsToSubscribe = emails.filter((email) => !subscriptions.find((subscription) => subscription.props.email === email));
        if (!emailsToSubscribe.length)
            return;
        await Promise.all(emailsToSubscribe.map((email) => {
            this.subscriptionUseCases.createSubscription({
                email,
                newsletterId,
                status: subscription_entity_1.SubscriptionStatus.SUBSCRIBED,
            });
        }));
    }
};
exports.NewsletterUseCases = NewsletterUseCases;
exports.NewsletterUseCases = NewsletterUseCases = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(interfaces_1.DatabaseServicesSymbol)),
    __param(1, (0, common_1.Inject)(interfaces_1.EmailServiceSymbol)),
    __metadata("design:paramtypes", [Object, Object, subscription_use_case_1.SubscriptionUseCases])
], NewsletterUseCases);
//# sourceMappingURL=newsletter.use-case.js.map