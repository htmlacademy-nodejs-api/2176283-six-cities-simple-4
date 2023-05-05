/**
 * Интерфейс команды
 * name - название команды
 * execute - метод выполнения команды
 */
export interface CliCommandInterface {
  readonly name: string;
  execute(...parameters: string[]): void;
}
