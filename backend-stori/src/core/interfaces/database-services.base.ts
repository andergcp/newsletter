import { Repository } from './repository.base';

import { Newsletter } from '@modules/newsletter/newsletter.entity';
import { Statistic } from '@modules/statistic/statistic.entity';
import { Subscription } from '@modules/subscription/subscription.entity';

export const DatabaseServicesSymbol = Symbol.for('DatabaseServices');

export interface DatabaseServices {
  newsletters: Repository<Newsletter>;
  subscriptions: Repository<Subscription>;
  statistics: Repository<Statistic>;
}
