import { StatisticUseCases } from './statistic.use-case';
import { GetStatisticsResponse } from './dtos/statistic-response.dto';
export declare class StatisticResolver {
    private statisticUsecases;
    constructor(statisticUsecases: StatisticUseCases);
    getStatistics(): Promise<GetStatisticsResponse>;
}
