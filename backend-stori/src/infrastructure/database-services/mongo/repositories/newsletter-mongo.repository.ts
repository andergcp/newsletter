import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Newsletter } from '../model';
import { MongoRepository } from './mongo.repository';
import { Newsletter as NewsletterEntity } from '@modules/newsletter/newsletter.entity';

export class NewsletterMongoRepository extends MongoRepository<
  Newsletter,
  NewsletterEntity
> {
  constructor(
    @InjectModel(Newsletter.name)
    private readonly newsletterModel: Model<Newsletter>,
  ) {
    super(newsletterModel);
  }

  toDomainEntity(
    doc: Newsletter & { createdAt?: Date; updatedAt?: Date; _id: ObjectId },
  ): NewsletterEntity {
    return new NewsletterEntity({
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
      id: doc._id.toString(),
      props: {
        fileUrl: doc.fileUrl,
        name: doc.name,
        recipientsEmails: doc.recipientsEmails,
        subject: doc.subject,
        sendAt: doc.sendAt,
        status: doc.status,
      },
    });
  }
}
