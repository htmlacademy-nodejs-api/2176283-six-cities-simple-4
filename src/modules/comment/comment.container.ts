import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import CommentService from './comment.service.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { CommentServiceInterface } from './comment-service.interface.js';

/**
 *
 * Функция для создания экземпляра класса 'CommentService'
 */
export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentServiceInterface>(AppComponent.CommentServiceInterface)
    .to(CommentService).inSingletonScope();

  commentContainer.bind<types.ModelType<CommentEntity>>(AppComponent.CommentModel)
    .toConstantValue(CommentModel);

  return commentContainer;
}
