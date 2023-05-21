import { LoggerInterface } from '../core/logger/logger.interface.js';

/**
 * Класс для прослушивания порта и приема подключения
 */
export default class RestApplication {
  constructor(
    private readonly logger: LoggerInterface
  ) {}

  public async init() {
    this.logger.info('Application initialization...');
  }

}
