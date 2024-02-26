import { ConfigService } from '@nestjs/config';
import { CloudService } from '@core/interfaces/cloud-service.base';
export declare class AwsCloudService implements CloudService {
    private configService;
    private bucket;
    private accessKeyId;
    private secretAccessKey;
    private region;
    constructor(configService: ConfigService);
    downloadFile(fileUrl: string): Promise<string>;
}
