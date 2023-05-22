/**
 * Интерфейс для получения переменной окружения по её имени
 */
export interface ConfigInterface<U> {
  get<T extends keyof U>(key: T): U[T];
}
