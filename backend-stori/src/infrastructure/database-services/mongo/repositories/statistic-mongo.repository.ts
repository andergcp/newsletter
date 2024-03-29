import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from './mongo.repository';
import { Statistic } from '../model';
import { Statistic as StatisticEntity } from '@modules/statistic/statistic.entity';

export class StatisticMongoRepository extends MongoRepository<
  Statistic,
  StatisticEntity
> {
  constructor(
    @InjectModel(Statistic.name)
    private readonly statisticModel: Model<Statistic>,
  ) {
    super(statisticModel);
  }

  toDomainEntity(
    doc: Statistic & { createdAt?: Date; updatedAt?: Date; _id: ObjectId },
  ): StatisticEntity {
    return new StatisticEntity({
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
      id: doc._id.toString(),
      props: {
        recipientsQuantity: doc.recipientsQuantity,
        deliveredAt: doc.deliveredAt,
      },
    });
  }
}
