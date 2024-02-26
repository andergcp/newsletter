import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { MongoDBConfig } from './types/mongo.type';

// TODO: Borrar esta config y usar algo más sencillo
export default registerAs('mongo', (): MongoDBConfig => {
  const values: MongoDBConfig = {
    mongoDBHost: process.env.DB_MONGO_HOST,
    mongoDBUser: process.env.DB_MONGO_USER,
    mongoDBPassword: process.env.DB_MONGO_PASSWORD,
    mongoDBPort: process.env.DB_MONGO_PORT,
    mongoDBName: process.env.DB_MONGO_NAME,
  };

  const schema = Joi.object<MongoDBConfig, true>({
    mongoDBHost: Joi.string().required(),
    mongoDBUser: Joi.string().required(),
    mongoDBPassword: Joi.string().required(),
    mongoDBPort: Joi.string().required(),
    mongoDBName: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    const messageError = `Validation failed - Is there any mongoDB environment variable missing?
    ${error.message}`;

    throw new Error(messageError);
  }

  return values;
});
