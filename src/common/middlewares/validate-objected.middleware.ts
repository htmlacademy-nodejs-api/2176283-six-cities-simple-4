import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../../core/errors/http-error.js';
import { MiddlewareInterface } from '../../types/middleware.interface.js';

const {Types} = mongoose;

export class ValidateObjectMiddleware implements MiddlewareInterface {
  constructor(private param: string) {}

  public execute({params}: Request, _res: Response, next: NextFunction): void {
    const objectId = params[this.param];

    if (Types.ObjectId.isValid(objectId)) {
      return next();
    }
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `${objectId} is invalid ObjectID`,
      'ValidateObjectIdMiddleware');
  }
}
