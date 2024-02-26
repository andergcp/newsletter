import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { AwsConfig } from './types/aws.type';

export default registerAs('aws', (): AwsConfig => {
  const values: AwsConfig = {
    awsS3Bucket: process.env.AWS_S3_BUCKET,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
  };

  const schema = Joi.object<AwsConfig, true>({
    awsS3Bucket: Joi.string().required(),
    awsAccessKeyId: Joi.string().required(),
    awsSecretAccessKey: Joi.string().required(),
    awsRegion: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    const messageError = `Validation failed - Is there any AWS environment variable missing?
    ${error.message}`;

    throw new Error(messageError);
  }

  return values;
});
