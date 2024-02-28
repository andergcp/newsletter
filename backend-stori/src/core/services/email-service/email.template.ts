export const getBasicHtmlEmailTemplate = (unsubscribeUrl: string): string => {
  return `
    <html>
      <body style="background-color: #eef6fb;">
        <h1 style="color: #1976d2;">This is your Newsletter</h1>
        <p>
          If you want to unsubscribe from our newsletter, click the button below:
        </p>
        <a href="${unsubscribeUrl}" style="color: #1976d2;">Unsubscribe</a>
      </body>
    </html>
  `;
};
