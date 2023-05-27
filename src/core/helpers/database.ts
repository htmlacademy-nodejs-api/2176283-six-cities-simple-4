/**
 * Функция для формирования пути для подключения к БД
 * @param username
 * @param password
 * @param host
 * @param port
 * @param databaseName
 * @returns URI путь
 */
export const getMongoURI = (
  username: string,
  password: string,
  host: string,
  port: string,
  databaseName: string,
): string => `mongodb://${username}:${password}@${host}:${port}/${databaseName}? authSource=admin`;
