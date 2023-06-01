import 'reflect-metadata';
import RestApplication from './app/rest.js';
import { Container } from 'inversify';
import { AppComponent } from './types/app-component.enum.js';
import { createRestApplicationContainer } from './app/rest.container.js';

/**
 * Функция объединения контейнеров приложения
 */
async function bootstrap() {

  const minContainer = Container.merge(createRestApplicationContainer());

  const application = minContainer.get<RestApplication>(AppComponent.RestApplication);
  await application.init();
}

bootstrap();
