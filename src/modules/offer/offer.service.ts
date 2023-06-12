import { inject, injectable } from 'inversify';
import { OfferServiceInterface } from './offer-service.interface.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { SortType } from '../../types/sort-type.enum.js';
import { DEFAULT_OFFER_COUNT } from './offer.constant.js';


@injectable()
export default class OfferService implements OfferServiceInterface {
  constructor(
@inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface,
@inject(AppComponent.OfferModel) private readonly offerModel:
types.ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);
    return result;
  }

  public async findOfferById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findById(offerId).exec();
  }

  public async find(count?: number): Promise<DocumentType<OfferEntity>[]> {
    const limit = count ?? DEFAULT_OFFER_COUNT;
    return this.offerModel.find().sort({createdAt: SortType.Down}).limit(limit).populate(['userId']).exec();
  }

  public async deleteOfferById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findByIdAndDelete(offerId).exec();
  }

  public async updateOfferById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findByIdAndUpdate(offerId, dto, {new: true}).populate(['userId']).exec();
  }

  public async incCommentCount(offerId: string, newEstimation: number): Promise<DocumentType<OfferEntity> | null> {
    const currentOffer = await this.offerModel.findById(offerId);
    if(!currentOffer) {
      return null;
    }
    return this.offerModel.findByIdAndUpdate(offerId, {
      '$inc': {commentCount: 1},
      '$set': { rating: ((currentOffer.rating + newEstimation) / (currentOffer.commentCount + 1)).toFixed(1)}
    }).exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return(await this.offerModel.exists({_id:documentId})) !== null;
  }

}
