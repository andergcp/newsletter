export const getBasicHtmlEmailTemplate = (unsubscribeUrl: string): string => {
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
