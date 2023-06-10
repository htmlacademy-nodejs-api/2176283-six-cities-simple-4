import 'reflect-metadata';
import RestApplication from './app/rest.js';
import { Container } from 'inversify';
import { AppComponent } from './types/app-component.enum.js';
import { createRestApplicationContainer } from './app/rest.container.js';
import { createUserContainer } from './modules/user/user.container.js';
import { createOfferConteiner } from './modules/offer/offer.container.js';
import { createCommentContainer } from './modules/comment/comment.container.js';

/**
 * Функция объединения контейнеров приложения
 */
async function bootstrap() {

  const mainContainer = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
    createOfferConteiner(),
    createCommentContainer(),
  );

  const application = mainContainer.get<RestApplication>(AppComponent.RestApplication);
  await application.init();
}

bootstrap();
