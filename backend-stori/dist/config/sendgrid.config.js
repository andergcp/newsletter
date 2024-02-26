"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('sendgrid', () => {
    const values = {
        sendgridApiKey: process.env.SENDGRID_API_KEY,
    };
    const schema = Joi.object({
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
//# sourceMappingURL=sendgrid.config.js.map