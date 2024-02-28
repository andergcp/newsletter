import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import appConfig from '@config/app.config';
import awsConfig from '@config/aws.config';
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

const resolvers = [NewsletterResolver, StatisticResolver, SubscriptionResolver];
const modules = [
  CloudServicesModule,
  DatabaseServicesModule,
  EmailServiceModule,
  NewsletterModule,
  StatisticModule,
  SubscriptionModule,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [awsConfig, sendgridConfig, appConfig],
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot('mongodb://db:27017/'),
    // MongooseModule.forRoot('mongodb://localhost:27017/'),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService, ...resolvers],
})
export class AppModule {}
