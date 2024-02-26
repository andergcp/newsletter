import { Statistic } from './statistic.entity';
import { DatabaseServices } from '@core/interfaces';
import { CreateStatisticInput } from './dtos/statistic-request.dto';
import { GetStatisticsResponse } from './dtos/statistic-response.dto';
export declare class StatisticUseCases {
    private readonly databaseServices;
    constructor(databaseServices: DatabaseServices);
    createStatistic(createStatisticDto: CreateStatisticInput): Promise<Statistic>;
    getStatistics(): Promise<GetStatisticsResponse>;
}
