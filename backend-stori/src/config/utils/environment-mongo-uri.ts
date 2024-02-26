export const environmentMongoUri = (
  dbUser: string,
  dbPassword: string,
  dbHost: string,
  dbPort: string,
  dbName: string,
): string => {
  console.log(
    `Ander --- mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
  );
  return `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
};
