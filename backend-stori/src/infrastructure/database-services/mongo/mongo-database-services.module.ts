import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseServicesSymbol } from '@core/interfaces';
import {
  Newsletter,
  NewsletterSchema,
  Statistic,
  StatisticSchema,
  Subscription,
  SubscriptionSchema,
} from './model';
// import { environmentMongoUri } from '@config/utils/environment-mongo-uri';
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
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     const dbUser = configService.get<string>('mongo.mongoDBUser');
    //     const dbPassword = configService.get<string>('mongo.mongoDBPassword');
    //     const dbHost = configService.get<string>('mongo.mongoDBHost');
    //     const dbName = configService.get<string>('mongo.mongoDBName');
    //     const dbPort = configService.get<string>('mongo.mongoDBPort');
    //     console.log('Ander: ', dbUser, dbPassword, dbHost, dbName);
    //     const uri = environmentMongoUri(dbUser, dbPassword, dbHost, dbPort);
    //     return {
    //       uri,
    //       dbName,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
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
