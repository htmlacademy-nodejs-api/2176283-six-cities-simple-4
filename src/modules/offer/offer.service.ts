import { inject, injectable } from 'inversify';
import { OfferServiceInterface } from './offer-service.interface';
import { AppComponent } from '../../types/app-component.enum';
import { LoggerInterface } from '../../core/logger/logger.interface';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types.js';
import { OfferEntity } from './offer.entity';
import CreateOfferDto from './dto/create-offer.dto';


@injectable()
export default class OfferService implements OfferServiceInterface {
  constructor(
@inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface,
@inject(AppComponent.OfferModel) private readonly offerModel:
ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);
    return result;
  }

  public async findByOfferId(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findById(offerId).exec();
  }

  public async findByOfferTitle(offerTitle: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findOne({name: offerTitle}).exec();
  }

  public async findByOfferTitleOrCreate(offerTitle: string, dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const existedOffer = await this.findByOfferTitle(offerTitle);

    if (existedOffer) {
      return existedOffer;
    }

    return this.create(dto);
  }
}


