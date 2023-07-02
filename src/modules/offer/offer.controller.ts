import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { Controller } from '../../core/controller/controller.abstract.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';
import { HttpMethod } from '../../types/http-method.enum.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import { fillDTO } from '../../core/helpers/index.js';
import OfferRdo from './rdo/offer.rdo.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { RequestQuery } from '../../types/request-query.type.js';
import { CommentServiceInterface } from '../comment/comment-service.interface.js';
import CommentRdo from '../comment/rdo/comment.rdo.js';
import { ValidateObjectMiddleware } from '../../common/middlewares/validate-objected.middleware.js';
import { ValidateDtoMiddleware } from '../../common/middlewares/validate-dto.middleware.js';
import { DocumentExistsMiddleware } from '../../common/middlewares/document-exists.middleware.js';
import { PrivateRouteMiddleware } from '../../common/middlewares/private-route.middleware.js';

type ParamsGetOffer = {
  offerId: string;
};

@injectable()
export default class OfferController extends Controller {
  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.OfferServiceInterface) private readonly offerService: OfferServiceInterface,
    @inject(AppComponent.CommentServiceInterface) private readonly commentService: CommentServiceInterface,
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController...');

    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.list});

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Get,
      handler: this.infoOfferId,
      middleware: [
        new ValidateObjectMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ]
    });

    this.addRoute({
      path: '/:offerId/comments',
      method: HttpMethod.Get,
      handler: this.commentsOffer,
      middleware: [
        new ValidateObjectMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ]
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middleware: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateOfferDto)
      ]
    });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Patch,
      handler: this.update,
      middleware: [
        new PrivateRouteMiddleware(),
        new ValidateObjectMiddleware('offerId'),
        new ValidateDtoMiddleware(CreateOfferDto),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ]
    });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Delete,
      handler: this.delete,
      middleware: [
        new PrivateRouteMiddleware(),
        new ValidateObjectMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ]
    });
  }

  public async list({query}: Request<RequestQuery, unknown>, res: Response): Promise<void> {
    const offers = await this.offerService.find(Number(query.limit));
    const offersToResponce = fillDTO(OfferRdo, offers);
    this.ok(res, offersToResponce);
  }

  public async infoOfferId({params}: Request<core.ParamsDictionary | ParamsGetOffer>,
    res: Response): Promise<void> {
    const {offerId} = params;
    const offer = await this.offerService.findOfferById(offerId);

    this.ok(res, offer);
  }

  public async commentsOffer({params}: Request<core.ParamsDictionary | ParamsGetOffer, object, object>,
    res: Response): Promise<void> {
    const {offerId} = params;
    const comments = await this.commentService.findByOfferId(offerId);
    const commentsToResponce = fillDTO(CommentRdo, comments);
    this.ok(res, commentsToResponce);
  }

  public async create(
    {body, user}: Request<Record<string, unknown>, Record<string, unknown>, CreateOfferDto>,
    res: Response): Promise<void> {
    const result = await this.offerService.create({...body, userId: user.id});
    this.created(res, fillDTO(OfferRdo, result));
  }

  public async update(
    {body, params}: Request<core.ParamsDictionary | ParamsGetOffer, Record<string, unknown>, UpdateOfferDto>,
    res: Response): Promise<void> {
    const updateOffer = await this.offerService.updateOfferById(params.offerId, body);

    this.ok(res, fillDTO(OfferRdo, updateOffer));
  }

  public async delete(
    {params}: Request<core.ParamsDictionary | ParamsGetOffer>,
    res: Response): Promise<void> {
    const {offerId} = params;
    const offer = await this.offerService.deleteOfferById(offerId);

    await this.commentService.deleteByOfferId(offerId);
    this.noContent(res, offer);
  }
}
