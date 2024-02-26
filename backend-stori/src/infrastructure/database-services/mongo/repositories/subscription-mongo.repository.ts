import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from './mongo.repository';
import { Subscription } from '../model';
import { Subscription as SubscriptionEntity } from '@modules/subscription/subscription.entity';

export class SubscriptionMongoRepository extends MongoRepository<
  Subscription,
  SubscriptionEntity
> {
  constructor(
    @InjectModel(Subscription.name)
    private readonly subscriptionModel: Model<Subscription>,
  ) {
    super(subscriptionModel);
  }

  toDomainEntity(
    doc: Subscription & { createdAt?: Date; updatedAt?: Date; _id: string },
  ): SubscriptionEntity {
    return new SubscriptionEntity({
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
      id: doc._id,
      props: {
        email: doc.email,
        newsletterId: doc.newsletterId,
        status: doc.status,
      },
    });
  }
}
