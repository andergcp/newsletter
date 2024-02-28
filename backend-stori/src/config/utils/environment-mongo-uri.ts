export const environmentMongoUri = (
  dbUser: string,
  dbPassword: string,
  dbHost: string,
  dbPort: string,
  dbName: string,
): string => {
  return `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
};
