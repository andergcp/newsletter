import { Module } from '@nestjs/common';
import { DatabaseServicesModule } from '@core/services/database-services/database-services.module';
import { NewsletterUseCases } from './newsletter.use-case';
import { SubscriptionModule } from '@modules/subscription/subscription.module';
import { EmailServiceModule } from '@core/services/email-service/email-service.module';
import { StatisticModule } from '@modules/statistic/statistic.module';

@Module({
  imports: [
    DatabaseServicesModule,
    SubscriptionModule,
    EmailServiceModule,
    StatisticModule,
  ],
  providers: [NewsletterUseCases],
  exports: [NewsletterUseCases],
})
export class NewsletterModule {}
