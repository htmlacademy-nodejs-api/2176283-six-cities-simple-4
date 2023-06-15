import { inject, injectable } from 'inversify';
import { Controller } from '../../core/controller/controller.abstract.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';
import { HttpMethod } from '../../types/http-method.enum.js';
import { Request, Response } from 'express';
import { UserServiceInterface } from './user-service.interface.js';

@injectable()
export default class UserController extends Controller {
  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.UserServiceInterface) private readonly userService: UserServiceInterface,
  ){
    super(logger);
    this.logger.info('Register routes for UserController...');

    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const user = await this.userService.findByEmail('JohnVal@mail.ru');
    this.ok(res, user);
  }
}
