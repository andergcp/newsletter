import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OnApplicationBootstrap } from '@nestjs/common';

import { DatabaseServices } from '@core/interfaces';
import { MongoRepository } from './repositories/mongo.repository';
import {
  Newsletter,
  NewsletterDocument,
  Statistic,
  StatisticDocument,
  Subscription,
  SubscriptionDocument,
} from './model';
import { Newsletter as NewsletterEntity } from '@modules/newsletter/newsletter.entity';
import { Statistic as StatisticEntity } from '@modules/statistic/statistic.entity';
import { Subscription as SubscriptionEntity } from '@modules/subscription/subscription.entity';
import {
  NewsletterMongoRepository,
  StatisticMongoRepository,
  SubscriptionMongoRepository,
} from './repositories';

export class MongoDatabaseServices
  implements DatabaseServices, OnApplicationBootstrap
{
  newsletters: MongoRepository<Newsletter, NewsletterEntity>;
  subscriptions: MongoRepository<Subscription, SubscriptionEntity>;
  statistics: MongoRepository<Statistic, StatisticEntity>;

  constructor(
    @InjectModel(Newsletter.name)
    private NewsletterRepository: Model<NewsletterDocument>,
    @InjectModel(Subscription.name)
    private SubscriptionRepository: Model<SubscriptionDocument>,
    @InjectModel(Statistic.name)
    private StatisticRepository: Model<StatisticDocument>,
  ) {}

  onApplicationBootstrap() {
    this.newsletters = new NewsletterMongoRepository(this.NewsletterRepository);
    this.subscriptions = new SubscriptionMongoRepository(
      this.SubscriptionRepository,
    );
    this.statistics = new StatisticMongoRepository(this.StatisticRepository);
  }
}
