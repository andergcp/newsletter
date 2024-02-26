import { Module } from '@nestjs/common';
import { SengridEmailServiceModule } from 'src/infrastructure/email-services/sengrid/sendgrid-email.module';

@Module({
  imports: [SengridEmailServiceModule],
  exports: [SengridEmailServiceModule],
})
export class EmailServiceModule {}
