import { ExceptionBase, SerializedException } from './exception.base';

class TestException extends ExceptionBase {
  code = 'TestException';
}

describe('ExceptionBase', () => {
  it('should correctly initialize propertiess', () => {
    const error = new Error('Cause');
    const exception = new TestException('Message', error, { key: 'value' });

    expect(exception.message).toBe('Message');
    expect(exception.cause).toBe(error);
    expect(exception.metadata).toEqual({ key: 'value' });
  });

  it('should correctly serialize to JSON', () => {
    const error = new Error('Cause');
    const exception = new TestException('Message', error, { key: 'value' });

    const json: SerializedException = exception.toJSON();

    expect(json.message).toBe('Message');
    expect(json.code).toBe('TestException');
    expect(json.cause).toBe(JSON.stringify(error));
    expect(json.metadata).toEqual({ key: 'value' });
  });
});
