"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor({ id, createdAt, updatedAt, props, }) {
        this.validateProps(props);
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            props,
        });
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.base.js.map