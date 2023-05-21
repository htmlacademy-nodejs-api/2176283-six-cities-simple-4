/**
 * Интерфейс для получения переменной окружения по её имени
 */
export interface ConfigInterface {
  get(key: string): string | undefined;
}
