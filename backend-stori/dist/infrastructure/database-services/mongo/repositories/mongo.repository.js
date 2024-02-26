"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
class MongoRepository {
    constructor(repository) {
        this._repository = repository;
    }
    async findAll(filters) {
        const documents = await this._repository.find(filters).exec();
        return documents.map((doc) => this.toDomainEntity(doc));
    }
    async findById(id) {
        const doc = await this._repository.findById(id).exec();
        return this.toDomainEntity(doc);
    }
    async findByFilter(filter) {
        const documents = await this._repository.find(filter).exec();
        return documents.map((doc) => this.toDomainEntity(doc));
    }
    async create(entity) {
        const doc = await this._repository.create(entity.props);
        return this.toDomainEntity(doc);
    }
    async update(id, entity) {
        const doc = await this._repository.findByIdAndUpdate(id, entity);
        return this.toDomainEntity(doc);
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=mongo.repository.js.map