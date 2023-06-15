import { Container } from 'inversify';
import { OfferServiceInterface } from './offer-service.interface.js';
import { AppComponent } from '../../types/app-component.enum.js';
import OfferService from './offer.service.js';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';
import OfferController from './offer.controller.js';
import { ControllerInterface } from '../../core/controller/controller.interface.js';

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

  offerConteiner.bind<ControllerInterface>(AppComponent.OfferController)
    .to(OfferController).inSingletonScope();

  return offerConteiner;
}
