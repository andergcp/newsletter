import { Entity } from '@core/interfaces/entity.base';

export interface StatisticProps {
  deliveredAt: Date;
  recipientsQuantity: number;
}
export class Statistic extends Entity<StatisticProps> {
  validateProps(props: StatisticProps): void {
    console.log(props);
  }
}
