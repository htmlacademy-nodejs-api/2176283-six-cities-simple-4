import { Container } from 'inversify';
import { OfferServiceInterface } from './offer-service.interface.js';
import { AppComponent } from '../../types/app-component.enum.js';
import OfferService from './offer.service.js';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';

/**
 *
 * Функция для создания экземпляра класса 'OfferService'
 */
export function createOfferConteiner() {
  const offerConteiner = new Container();

  offerConteiner.bind<OfferServiceInterface>(AppComponent.OfferServiceInterface)
    .to(OfferService);

  offerConteiner.bind<types.ModelType<OfferEntity>>(AppComponent.OfferModel)
    .toConstantValue(OfferModel);

  return offerConteiner;
}
