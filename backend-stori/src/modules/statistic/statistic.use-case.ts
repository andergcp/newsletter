import { Inject, Injectable } from '@nestjs/common';

import { Statistic } from './statistic.entity';
import { DatabaseServices, DatabaseServicesSymbol } from '@core/interfaces';
import { CreateStatisticInput } from './dtos/statistic-request.dto';
import { GetStatisticsResponse } from './dtos/statistic-response.dto';

@Injectable()
export class StatisticUseCases {
  constructor(
    @Inject(DatabaseServicesSymbol)
    private readonly databaseServices: DatabaseServices,
  ) {}

  async createStatistic(
    createStatisticDto: CreateStatisticInput,
  ): Promise<Statistic> {
    const statistic = new Statistic({ props: createStatisticDto });
    return this.databaseServices.statistics.create(statistic);
  }

  async getStatistics(): Promise<GetStatisticsResponse> {
    const raw = await this.databaseServices.statistics.findAll();
    const recipientsQuantity = raw.reduce(
      (acc, curr) => acc + curr.props.recipientsQuantity,
      0,
    );
    const emailsDelivered = raw.length;
    return { recipientsQuantity, emailsDelivered };
  }
}
