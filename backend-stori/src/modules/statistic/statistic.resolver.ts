import { Query, Resolver } from '@nestjs/graphql';
import { StatisticUseCases } from './statistic.use-case';
import { GetStatisticsResponse } from './dtos/statistic-response.dto';

@Resolver()
export class StatisticResolver {
  constructor(private statisticUsecases: StatisticUseCases) {}

  @Query(() => GetStatisticsResponse)
  async getStatistics(): Promise<GetStatisticsResponse> {
    return this.statisticUsecases.getStatistics();
  }
}
