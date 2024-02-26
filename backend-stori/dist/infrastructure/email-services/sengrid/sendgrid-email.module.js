"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SengridEmailServiceModule = void 0;
const interfaces_1 = require("../../../core/interfaces");
const common_1 = require("@nestjs/common");
const sendgrid_email_service_1 = require("./sendgrid-email.service");
const cloud_services_module_1 = require("../../../core/services/cloud-services/cloud.services.module");
let SengridEmailServiceModule = class SengridEmailServiceModule {
};
exports.SengridEmailServiceModule = SengridEmailServiceModule;
exports.SengridEmailServiceModule = SengridEmailServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [cloud_services_module_1.CloudServicesModule],
        providers: [
            {
                provide: interfaces_1.EmailServiceSymbol,
                useClass: sendgrid_email_service_1.SengridEmailService,
            },
        ],
        exports: [interfaces_1.EmailServiceSymbol],
    })
], SengridEmailServiceModule);
//# sourceMappingURL=sendgrid-email.module.js.map