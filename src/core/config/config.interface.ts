/**
 * Интерфейс для получения переменной окружения по её имени
 */
export interface Configinterface {
  get(key: string): string | undefined;
}
