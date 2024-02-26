import { Entity } from '@core/interfaces/entity.base';
export interface StatisticProps {
    deliveredAt: Date;
    recipientsQuantity: number;
}
export declare class Statistic extends Entity<StatisticProps> {
    validateProps(props: StatisticProps): void;
}
