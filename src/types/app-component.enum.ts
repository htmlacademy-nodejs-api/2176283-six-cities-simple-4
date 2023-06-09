/**
 * Объект с интерфейсами приложения
 * Интерфейсы участвуют при внедрении зависимостей
 */
export const AppComponent = {
  RestApplication: Symbol.for('RestApplication'),
  LoggerInterface: Symbol.for('LoggerInterface'),
  ConfigInterface: Symbol.for('ConfigInterface'),
  DatabaseClientInterface: Symbol.for('DatabaseClientInterface'),
  UserServiceInterface: Symbol.for('UserServiceInterface'),
  UserModel: Symbol.for('UserModel'),
  OfferServiceInterface: Symbol.for('OfferServiceInterface'),
  OfferModel: Symbol.for('OfferModel'),
  CommentServiceInterface: Symbol.for('CommentServiceInterface'),
  CommentModel: Symbol.for('CommentModel'),
  UserController: Symbol.for('UserController'),
  OfferController: Symbol.for('OfferController'),
  ExceptionFilterInterface: Symbol.for('ExceptionFilterInterface'),
  CommentController: Symbol.for('CommentController'),
} as const;
