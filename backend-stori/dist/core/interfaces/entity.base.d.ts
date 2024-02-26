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
export declare abstract class Entity<EntityProps> {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly props: EntityProps;
    constructor({ id, createdAt, updatedAt, props, }: CreateEntityProps<EntityProps>);
    protected abstract validateProps(props: EntityProps): void;
}
