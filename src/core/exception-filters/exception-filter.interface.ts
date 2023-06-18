import { NextFunction, Request, Response } from 'express';

/**
 * Интерфейс для функции обработки оштбок
 */
export interface ExceptionFilterInterface {
  catch(error: Error, req: Request, res: Response, next: NextFunction): void;
}
