export interface LoggerInterface {
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...arg: unknown[]): void;
  debug(message: string, ...arg: unknown[]): void;
}
