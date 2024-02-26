import { Model } from 'mongoose';
import { Repository } from '@core/interfaces';

export abstract class MongoRepository<MongoModel, Entity extends { props: any }>
  implements Repository<Entity>
{
  private _repository: Model<MongoModel>;

  constructor(repository: Model<MongoModel>) {
    this._repository = repository;
  }

  async findAll(
    filters?: Record<string, string | number | boolean>,
  ): Promise<Entity[]> {
    const documents = await this._repository.find(filters).exec();
    return documents.map((doc) => this.toDomainEntity(doc));
  }

  async findById(id: string): Promise<Entity> {
    const doc = await this._repository.findById(id).exec();
    return this.toDomainEntity(doc);
  }

  async findByFilter(
    filter?: Record<string, string | number>,
  ): Promise<Entity[]> {
    const documents = await this._repository.find(filter).exec();
    return documents.map((doc) => this.toDomainEntity(doc));
  }

  async create(entity: Entity): Promise<Entity> {
    const doc = await this._repository.create(entity.props);
    return this.toDomainEntity(doc);
  }

  async update(id: string, entity: Entity) {
    const doc = await this._repository.findByIdAndUpdate(id, entity);
    return this.toDomainEntity(doc);
  }

  abstract toDomainEntity(doc: MongoModel): Entity;
}
