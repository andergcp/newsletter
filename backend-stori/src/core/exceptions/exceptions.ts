import {
  ExceptionBase,
  ARGUMENT_INVALID,
  // ARGUMENT_NOT_PROVIDED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} from '.';

export class InvalidArgumentException extends ExceptionBase {
  readonly code = ARGUMENT_INVALID;
}

// export class ArgumentNotProvidedException extends ExceptionBase {
//   readonly code = ARGUMENT_NOT_PROVIDED;
// }

export class NotFoundException extends ExceptionBase {
  static readonly message = 'Not found';

  constructor(message = NotFoundException.message) {
    super(message);
  }

  readonly code = NOT_FOUND;
}

export class InternalServerErrorException extends ExceptionBase {
  static readonly message = 'Internal server error';

  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly code = INTERNAL_SERVER_ERROR;
}
