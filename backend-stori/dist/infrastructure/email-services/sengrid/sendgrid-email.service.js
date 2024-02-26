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
exports.SengridEmailService = void 0;
const common_1 = require("@nestjs/common");
const mail_1 = require("@sendgrid/mail");
const email_template_1 = require("../../../core/services/email-service/email.template");
const cloud_service_base_1 = require("../../../core/interfaces/cloud-service.base");
const config_1 = require("@nestjs/config");
const FROM_EMAIL = 'andergcp@gmail.com';
let SengridEmailService = class SengridEmailService {
    constructor(cloudService, configService) {
        this.cloudService = cloudService;
        this.configService = configService;
        this.sendgridApiKey = this.configService.get('sendgrid.sendgridApiKey');
        this.sendgridMail = new mail_1.MailService();
    }
    async sendEmailWithAttachment({ recipients, subject, attachmentUrl, unsubscribeUrl, htmlEmailTemplate, }) {
        try {
            const file = await this.cloudService.downloadFile(attachmentUrl);
            this.sendgridMail.setApiKey(this.sendgridApiKey);
            const attachments = [
                {
                    content: file,
                    filename: 'attachment.pdf',
                    type: 'application/pdf',
                    disposition: 'attachment',
                },
            ];
            const mailData = {
                to: recipients,
                from: FROM_EMAIL,
                subject,
                html: htmlEmailTemplate || (0, email_template_1.getBasicHtmlEmailTemplate)(unsubscribeUrl),
                attachments,
            };
            const response = await this.sendgridMail.send(mailData);
            return !response[0];
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
};
exports.SengridEmailService = SengridEmailService;
exports.SengridEmailService = SengridEmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cloud_service_base_1.CloudServiceSymbol)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], SengridEmailService);
//# sourceMappingURL=sendgrid-email.service.js.map