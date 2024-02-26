"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasicHtmlEmailTemplate = void 0;
const getBasicHtmlEmailTemplate = (unsubscribeUrl) => {
    return `
    <html>
      <body>
        <h1>This is your Newsletter</h1>
        <p>
          If you want to unsubscribe from our newsletter, click the button below:
        </p>
        <a href="${unsubscribeUrl}">Unsubscribe</a>
      </body>
    </html>
  `;
};
exports.getBasicHtmlEmailTemplate = getBasicHtmlEmailTemplate;
//# sourceMappingURL=email.template.js.map