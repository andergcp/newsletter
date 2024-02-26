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
exports.NewsletterMongoRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const model_1 = require("../model");
const mongo_repository_1 = require("./mongo.repository");
const newsletter_entity_1 = require("../../../../modules/newsletter/newsletter.entity");
let NewsletterMongoRepository = class NewsletterMongoRepository extends mongo_repository_1.MongoRepository {
    constructor(newsletterModel) {
        super(newsletterModel);
        this.newsletterModel = newsletterModel;
    }
    toDomainEntity(doc) {
        return new newsletter_entity_1.Newsletter({
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            id: doc._id,
            props: {
                fileUrl: doc.fileUrl,
                name: doc.name,
                recipientsEmails: doc.recipientsEmails,
                subject: doc.subject,
                sendAt: doc.sendAt,
                status: doc.status,
            },
        });
    }
};
exports.NewsletterMongoRepository = NewsletterMongoRepository;
exports.NewsletterMongoRepository = NewsletterMongoRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(model_1.Newsletter.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NewsletterMongoRepository);
//# sourceMappingURL=newsletter-mongo.repository.js.map