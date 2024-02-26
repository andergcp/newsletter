"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter = exports.NewsletterStatus = void 0;
const exceptions_1 = require("../../core/exceptions");
const entity_base_1 = require("../../core/interfaces/entity.base");
var NewsletterStatus;
(function (NewsletterStatus) {
    NewsletterStatus["FAILED"] = "FAILED";
    NewsletterStatus["PENDING"] = "PENDING";
    NewsletterStatus["SENT"] = "SENT";
})(NewsletterStatus || (exports.NewsletterStatus = NewsletterStatus = {}));
class Newsletter extends entity_base_1.Entity {
    set status(status) {
        this.props.status = status;
    }
    validateProps(props) {
        if (props.recipientsEmails) {
            const uniqueEmails = new Set(props.recipientsEmails).size === props.recipientsEmails.length;
            if (!uniqueEmails)
                throw new exceptions_1.InvalidArgumentException('Emails must be unique');
        }
    }
}
exports.Newsletter = Newsletter;
//# sourceMappingURL=newsletter.entity.js.map