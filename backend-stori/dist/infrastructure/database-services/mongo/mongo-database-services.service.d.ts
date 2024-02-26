/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { OnApplicationBootstrap } from '@nestjs/common';
import { DatabaseServices } from '@core/interfaces';
import { MongoRepository } from './repositories/mongo.repository';
import { Newsletter, NewsletterDocument, Statistic, StatisticDocument, Subscription, SubscriptionDocument } from './model';
import { Newsletter as NewsletterEntity } from '@modules/newsletter/newsletter.entity';
import { Statistic as StatisticEntity } from '@modules/statistic/statistic.entity';
import { Subscription as SubscriptionEntity } from '@modules/subscription/subscription.entity';
export declare class MongoDatabaseServices implements DatabaseServices, OnApplicationBootstrap {
    private NewsletterRepository;
    private SubscriptionRepository;
    private StatisticRepository;
    newsletters: MongoRepository<Newsletter, NewsletterEntity>;
    subscriptions: MongoRepository<Subscription, SubscriptionEntity>;
    statistics: MongoRepository<Statistic, StatisticEntity>;
    constructor(NewsletterRepository: Model<NewsletterDocument>, SubscriptionRepository: Model<SubscriptionDocument>, StatisticRepository: Model<StatisticDocument>);
    onApplicationBootstrap(): void;
}
