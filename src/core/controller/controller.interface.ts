import { RouteInterface } from '../../types/route.interface.js';
import { Response, Router } from 'express';

/**
 * Интерфейс для регистрации маршрутов
 * @method addRoute добавляет новые маршруты
 * @method send отправляет сообщения клиенту
 * @method ok отправляет ответ с кодом 200
 * @method created отправляет ответ с кодом 201
 * @method noContent отправляет ответ с кодом 204
 */
export interface ControllerInterface {
  readonly router: Router;
  addRoute(route: RouteInterface):void;
  send<T>(res: Response, statusCode: number, data: T): void;
  ok<T>(res: Response, data: T): void;
  created<T>(res: Response, data: T): void;
  noContent<T>(res: Response, data: T): void;
}

