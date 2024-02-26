import { ExceptionBase } from '.';
export declare class InvalidArgumentException extends ExceptionBase {
    readonly code = "GENERIC.ARGUMENT_INVALID";
}
export declare class NotFoundException extends ExceptionBase {
    static readonly message = "Not found";
    constructor(message?: string);
    readonly code = "GENERIC.NOT_FOUND";
}
export declare class InternalServerErrorException extends ExceptionBase {
    static readonly message = "Internal server error";
    constructor(message?: string);
    readonly code = "GENERIC.INTERNAL_SERVER_ERROR";
}
