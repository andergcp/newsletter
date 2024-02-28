import { Module } from '@nestjs/common';

import { SengridEmailService } from './sendgrid-email.service';
import { EmailServiceSymbol } from '@core/interfaces';
import { CloudServicesModule } from '@core/services/cloud-services/cloud.services.module';

@Module({
  imports: [CloudServicesModule],
  providers: [
    {
      provide: EmailServiceSymbol,
      useClass: SengridEmailService,
    },
  ],
  exports: [EmailServiceSymbol],
})
export class SengridEmailServiceModule {}
