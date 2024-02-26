import { Repository } from './repository.base';
import { Newsletter } from '@modules/newsletter/newsletter.entity';
import { Statistic } from '@modules/statistic/statistic.entity';
import { Subscription } from '@modules/subscription/subscription.entity';
export declare const DatabaseServicesSymbol: unique symbol;
export interface DatabaseServices {
    newsletters: Repository<Newsletter>;
    subscriptions: Repository<Subscription>;
    statistics: Repository<Statistic>;
}
