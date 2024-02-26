"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const Joi = require("joi");
exports.default = (0, config_1.registerAs)('mongo', () => {
    const values = {
        mongoDBHost: process.env.DB_MONGO_HOST,
        mongoDBUser: process.env.DB_MONGO_USER,
        mongoDBPassword: process.env.DB_MONGO_PASSWORD,
        mongoDBPort: process.env.DB_MONGO_PORT,
        mongoDBName: process.env.DB_MONGO_NAME,
    };
    const schema = Joi.object({
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
//# sourceMappingURL=mongo.config.js.map