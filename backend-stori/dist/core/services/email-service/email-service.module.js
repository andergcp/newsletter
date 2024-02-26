"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailServiceModule = void 0;
const common_1 = require("@nestjs/common");
const sendgrid_email_module_1 = require("../../../infrastructure/email-services/sengrid/sendgrid-email.module");
let EmailServiceModule = class EmailServiceModule {
};
exports.EmailServiceModule = EmailServiceModule;
exports.EmailServiceModule = EmailServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [sendgrid_email_module_1.SengridEmailServiceModule],
        exports: [sendgrid_email_module_1.SengridEmailServiceModule],
    })
], EmailServiceModule);
//# sourceMappingURL=email-service.module.js.map