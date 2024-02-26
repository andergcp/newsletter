export interface Repository<T> {
  findAll(filters?: Record<string, string | number | boolean>): Promise<T[]>;
  findById(id: string): Promise<T>;
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
}
