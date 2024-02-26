"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const Joi = require("joi");
exports.default = (0, config_1.registerAs)('aws', () => {
    const values = {
        awsS3Bucket: process.env.AWS_S3_BUCKET,
        awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        awsRegion: process.env.AWS_REGION,
    };
    const schema = Joi.object({
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
//# sourceMappingURL=aws.config.js.map