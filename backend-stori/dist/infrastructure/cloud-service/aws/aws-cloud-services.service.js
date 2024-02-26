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
exports.AwsCloudService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const exceptions_1 = require("../../../core/exceptions");
let AwsCloudService = class AwsCloudService {
    constructor(configService) {
        this.configService = configService;
        this.bucket = this.configService.get('aws.awsS3Bucket');
        this.accessKeyId = this.configService.get('aws.awsAccessKeyId');
        this.secretAccessKey = this.configService.get('aws.awsSecretAccessKey');
        this.region = this.configService.get('aws.awsRegion');
    }
    async downloadFile(fileUrl) {
        try {
            const s3 = new client_s3_1.S3Client({
                region: this.region,
                credentials: {
                    accessKeyId: this.accessKeyId,
                    secretAccessKey: this.secretAccessKey,
                },
            });
            const command = new client_s3_1.GetObjectCommand({
                Bucket: this.bucket,
                Key: fileUrl,
            });
            const response = await s3.send(command);
            const data = await response.Body.transformToString('base64');
            return data;
        }
        catch (error) {
            console.error(error);
            throw new exceptions_1.InternalServerErrorException('Error downloading the file');
        }
    }
};
exports.AwsCloudService = AwsCloudService;
exports.AwsCloudService = AwsCloudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsCloudService);
//# sourceMappingURL=aws-cloud-services.service.js.map