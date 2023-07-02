import { inject, injectable } from 'inversify';
import { Controller } from '../../core/controller/controller.abstract.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';
import { CommentServiceInterface } from './comment-service.interface.js';
import { OfferServiceInterface } from '../offer/offer-service.interface.js';
import { HttpMethod } from '../../types/http-method.enum.js';
import { Request, Response } from 'express';
import CreateCommentDto from './dto/create-comment.dto.js';
import HttpError from '../../core/errors/http-error.js';
import { StatusCodes } from 'http-status-codes';
import { fillDTO } from '../../core/helpers/index.js';
import CommentRdo from './rdo/comment.rdo.js';
import { ValidateDtoMiddleware } from '../../common/middlewares/validate-dto.middleware.js';
import { PrivateRouteMiddleware } from '../../common/middlewares/private-route.middleware.js';

@injectable()
export default class CommentController extends Controller {

  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.CommentServiceInterface) protected readonly commentService: CommentServiceInterface,
    @inject(AppComponent.OfferServiceInterface) protected readonly offerService: OfferServiceInterface,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController...');
    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middleware: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateCommentDto)
      ]
    });
  }

  public async create (
    { body, user }: Request<object, object, CreateCommentDto>, res: Response): Promise<void> {
    if(!await this.offerService.exists(body.offerId)) {
      throw new HttpError(StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found`,
        'CommentController');
    }
    const comment = await this.commentService.create({...body, userId: user.id});
    await this.offerService.incCommentCount(body.offerId, body.rating);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
