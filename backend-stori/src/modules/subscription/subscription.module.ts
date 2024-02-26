import { Module } from '@nestjs/common';
import { DatabaseServicesModule } from '@core/services/database-services/database-services.module';
import { SubscriptionUseCases } from './subscription.use-case';

@Module({
  imports: [DatabaseServicesModule],
  providers: [SubscriptionUseCases],
  exports: [SubscriptionUseCases],
})
export class SubscriptionModule {}
