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
exports.NewsletterSchema = exports.Newsletter = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const newsletter_entity_1 = require("../../../../modules/newsletter/newsletter.entity");
let Newsletter = class Newsletter {
};
exports.Newsletter = Newsletter;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Newsletter.prototype, "fileUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Newsletter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Newsletter.prototype, "recipientsEmails", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Newsletter.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Newsletter.prototype, "sendAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: newsletter_entity_1.NewsletterStatus }),
    __metadata("design:type", String)
], Newsletter.prototype, "status", void 0);
exports.Newsletter = Newsletter = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Newsletter);
exports.NewsletterSchema = mongoose_1.SchemaFactory.createForClass(Newsletter);
//# sourceMappingURL=newsletter.model.js.map