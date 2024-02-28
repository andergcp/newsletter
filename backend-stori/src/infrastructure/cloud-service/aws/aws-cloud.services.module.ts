import { Module } from '@nestjs/common';
import { AwsCloudService } from './aws-cloud-services.service';

import { CloudServiceSymbol } from '@core/interfaces/cloud-service.base';

@Module({
  imports: [],
  providers: [
    {
      provide: CloudServiceSymbol,
      useClass: AwsCloudService,
    },
  ],
  exports: [CloudServiceSymbol],
})
export class AwsCloudServiceModule {}
