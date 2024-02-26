import { Module } from '@nestjs/common';
import { DatabaseServicesModule } from '@core/services/database-services/database-services.module';
import { StatisticUseCases } from './statistic.use-case';

@Module({
  imports: [DatabaseServicesModule],
  providers: [StatisticUseCases],
  exports: [StatisticUseCases],
})
export class StatisticModule {}
