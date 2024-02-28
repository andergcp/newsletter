import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CloudService } from '@core/interfaces/cloud-service.base';
import { InternalServerErrorException } from '@core/exceptions';

@Injectable()
export class AwsCloudService implements CloudService {
  private bucket: string;
  private accessKeyId: string;
  private secretAccessKey: string;
  private region: string;

  constructor(private configService: ConfigService) {
    this.bucket = this.configService.get<string>('aws.awsS3Bucket');
    this.accessKeyId = this.configService.get<string>('aws.awsAccessKeyId');
    this.secretAccessKey = this.configService.get<string>(
      'aws.awsSecretAccessKey',
    );
    this.region = this.configService.get<string>('aws.awsRegion');
  }

  async downloadFile(fileUrl: string): Promise<string> {
    try {
      const s3 = new S3Client({
        region: this.region,
        credentials: {
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
        },
      });

      const command = new GetObjectCommand({
        Bucket: this.bucket,
        Key: fileUrl,
      });

      const response = await s3.send(command);

      const data = await response.Body.transformToString('base64');
      return data;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error downloading the file');
    }
  }
}
