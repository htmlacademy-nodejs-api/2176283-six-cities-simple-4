import CreateOfferDto from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import UpdateOfferDto from './dto/update-offer.dto.js';

/**
 * интерфейс управления офферами
 * @method create - создание предложения
 * @method findOfferById - возвращает предложение по идентификатору
 * @method find - возвращает список предложений
 * @method deleteOfferById - удаление предложения по идентификатору
 * @method updateOfferById - обновление предложения по идентификатору
 * @method incCommentCount - увеличение счета комментариев и расчет среднего рейтинга при добавлении комментария
 * @method exists - проверка на наличие предложения
 */
export interface OfferServiceInterface {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findOfferById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  find(count?: number): Promise<DocumentType<OfferEntity>[]>;
  deleteOfferById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateOfferById(offerId:string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string, newEstimation: number): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
}
