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
import { Repository } from '@core/interfaces';
export declare abstract class MongoRepository<MongoModel, Entity extends {
    props: any;
}> implements Repository<Entity> {
    private _repository;
    constructor(repository: Model<MongoModel>);
    findAll(filters?: Record<string, string | number | boolean>): Promise<Entity[]>;
    findById(id: string): Promise<Entity>;
    findByFilter(filter?: Record<string, string | number>): Promise<Entity[]>;
    create(entity: Entity): Promise<Entity>;
    update(id: string, entity: Entity): Promise<Entity>;
    abstract toDomainEntity(doc: MongoModel): Entity;
}
