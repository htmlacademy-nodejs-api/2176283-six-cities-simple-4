import { inject, injectable } from 'inversify';
import { DatabaseClientInterface } from './database-client.interface.js';
import mongoose, { Mongoose } from 'mongoose';
import { AppComponent } from '../../types/app-component.enum';
import { LoggerInterface } from '../logger/logger.interface.js';

/**
 * Класс для установки и закрытия соединения с БД MongoDB
 * @constructor обеспечивает доступ к логеру
 * @method connect - проверяет состояние подключения, если нет, то
 * уведомляет о подключении и вызывает приватный метод _connect
 * @method disconnect - проверяет состояние подключения, если подкючен,
 * то вызывает приватный метод _disconnect и уведомляет о закрытии
 * @method _connect - выполняет подключение
 * @method _disconnect - выполняет закрытие
 */
@injectable()
export default class MongoClientService implements DatabaseClientInterface {
  private isConnected = false;
  private mohgooseInstance: Mongoose | null = null;

  constructor(
    @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface
  ) {}

  private async _connect(uri: string): Promise<void> {
    this.mohgooseInstance = await mongoose.connect(uri);
    this.isConnected = true;
  }

  private async _disconnect(): Promise<void> {
    await this.mohgooseInstance?.disconnect();
    this.isConnected = false;
    this.mohgooseInstance = null;
  }

  public async connect(uri: string): Promise<void> {
    if(this.isConnected) {
      throw new Error('MongoDB client already connected');
    }

    this.logger.info('Trying to connect to MongoDB…');
    await this._connect(uri);
    this.logger.info('Database connection established.');
  }

  public async disconnect(): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Not connected to the database');
    }

    await this._disconnect();
    this.logger.info('Database connection closed.');
  }
}
