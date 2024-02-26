"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCloudServiceModule = void 0;
const common_1 = require("@nestjs/common");
const aws_cloud_services_service_1 = require("./aws-cloud-services.service");
const cloud_service_base_1 = require("../../../core/interfaces/cloud-service.base");
let AwsCloudServiceModule = class AwsCloudServiceModule {
};
exports.AwsCloudServiceModule = AwsCloudServiceModule;
exports.AwsCloudServiceModule = AwsCloudServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: cloud_service_base_1.CloudServiceSymbol,
                useClass: aws_cloud_services_service_1.AwsCloudService,
            },
        ],
        exports: [cloud_service_base_1.CloudServiceSymbol],
    })
], AwsCloudServiceModule);
//# sourceMappingURL=aws-cloud.services.module.js.map