import { ConfigInterface } from '../core/config/config.interface.js';
import { LoggerInterface } from '../core/logger/logger.interface.js';

/**
 * Класс для прослушивания порта и приема подключения
 */
export default class RestApplication {
  constructor(
    private readonly logger: LoggerInterface,
    private readonly config: ConfigInterface
  ) {}

  public async init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }

}
