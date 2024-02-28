import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseServicesSymbol } from '@core/interfaces';
import {
  Newsletter,
  NewsletterSchema,
  Statistic,
  StatisticSchema,
  Subscription,
  SubscriptionSchema,
} from './model';
import { MongoDatabaseServices } from './mongo-database-services.service';
import {
  NewsletterMongoRepository,
  StatisticMongoRepository,
  SubscriptionMongoRepository,
} from './repositories';

const providers = [
  NewsletterMongoRepository,
  StatisticMongoRepository,
  SubscriptionMongoRepository,
];
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Newsletter.name, schema: NewsletterSchema },
      { name: Statistic.name, schema: StatisticSchema },
      { name: Subscription.name, schema: SubscriptionSchema },
    ]),
  ],
  providers: [
    ...providers,
    {
      provide: DatabaseServicesSymbol,
      useClass: MongoDatabaseServices,
    },
  ],
  exports: [DatabaseServicesSymbol],
})
export class MongoDatabaseServicesModule {}
