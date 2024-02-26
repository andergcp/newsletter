export interface BaseEntityProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEntityProps<T> {
  id?: string;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity<EntityProps> {
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly props: EntityProps;

  constructor({
    id,
    createdAt,
    updatedAt,
    props,
  }: CreateEntityProps<EntityProps>) {
    this.validateProps(props);
    Object.assign(this, {
      id,
      createdAt,
      updatedAt,
      props,
    });
  }

  protected abstract validateProps(props: EntityProps): void;
}
