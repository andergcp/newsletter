import { Module } from '@nestjs/common';
import { AwsCloudServiceModule } from 'src/infrastructure/cloud-service/aws/aws-cloud.services.module';

@Module({
  imports: [AwsCloudServiceModule],
  exports: [AwsCloudServiceModule],
})
export class CloudServicesModule {}
