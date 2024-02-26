import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ConfigModule, ConfigService } from '@nestjs/config';

import awsConfig from '@config/aws.config';
import mongoConfig from '@config/mongo.config';
import sendgridConfig from '@config/sendgrid.config';

import { CloudServicesModule } from '@core/services/cloud-services/cloud.services.module';
import { DatabaseServicesModule } from '@core/services/database-services/database-services.module';
import { EmailServiceModule } from '@core/services/email-service/email-service.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NewsletterModule } from '@modules/newsletter/newsletter.module';
import { NewsletterResolver } from '@modules/newsletter/newsletter.resolver';
import { StatisticModule } from '@modules/statistic/statistic.module';
import { StatisticResolver } from '@modules/statistic/statistic.resolver';
import { SubscriptionModule } from '@modules/subscription/subscription.module';
import { SubscriptionResolver } from '@modules/subscription/subscription.resolver';

// import { environmentMongoUri } from '@config/utils/environment-mongo-uri';

const resolvers = [NewsletterResolver, StatisticResolver, SubscriptionResolver];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig, awsConfig, sendgridConfig],
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
      driver: ApolloDriver,
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     const dbUser = configService.get<string>('mongo.mongoDBUser');
    //     const dbPassword = configService.get<string>('mongo.mongoDBPassword');
    //     const dbHost = configService.get<string>('mongo.mongoDBHost');
    //     const dbName = configService.get<string>('mongo.mongoDBName');
    //     const dbPort = configService.get<string>('mongo.mongoDBPort');
    //     console.log('Ander: ', dbUser, dbPassword, dbHost, dbPort, dbName);
    //     const uri = environmentMongoUri(
    //       dbUser,
    //       dbPassword,
    //       dbHost,
    //       dbPort,
    //       dbName,
    //     );
    //     console.log('Ander uri: ', uri);
    //     return {
    //       uri,
    //       dbName,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    CloudServicesModule,
    DatabaseServicesModule,
    EmailServiceModule,
    NewsletterModule,
    StatisticModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...resolvers],
})
export class AppModule {}
