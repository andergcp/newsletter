"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = exports.NotFoundException = exports.InvalidArgumentException = void 0;
const _1 = require(".");
class InvalidArgumentException extends _1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.code = _1.ARGUMENT_INVALID;
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
class NotFoundException extends _1.ExceptionBase {
    constructor(message = NotFoundException.message) {
        super(message);
        this.code = _1.NOT_FOUND;
    }
}
exports.NotFoundException = NotFoundException;
NotFoundException.message = 'Not found';
class InternalServerErrorException extends _1.ExceptionBase {
    constructor(message = InternalServerErrorException.message) {
        super(message);
        this.code = _1.INTERNAL_SERVER_ERROR;
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
InternalServerErrorException.message = 'Internal server error';
//# sourceMappingURL=exceptions.js.map