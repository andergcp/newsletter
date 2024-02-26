import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

import { SendgridConfig } from './types/sendgrid.type';

export default registerAs('sendgrid', (): SendgridConfig => {
  const values: SendgridConfig = {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
  };

  const schema = Joi.object<SendgridConfig, true>({
    sendgridApiKey: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    const messageError = `Validation failed - Is there any Sendgrid environment variable missing?
    ${error.message}`;

    throw new Error(messageError);
  }

  return values;
});
