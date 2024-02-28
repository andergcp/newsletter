import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';
import { AppConfig } from './types/app.type';

export default registerAs('app', (): AppConfig => {
  const values: AppConfig = {
    frontendUrl: process.env.FRONTEND_URL,
  };

  const schema = Joi.object<AppConfig, true>({
    frontendUrl: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    const messageError = `Validation failed - Is there any App environment variable missing?
    ${error.message}`;

    throw new Error(messageError);
  }

  return values;
});
