import typegoose, { Ref, defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { OfferEntity } from '../offer/offer.entity.js';

const { prop, modelOptions } = typegoose;

//Расширяем интерфейс классом `defaultClasses.Base` для полей _id и id
export interface CommentEntity extends defaultClasses.Base {}

//Декоратор в котором задаем название коллекции
@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})

// Сущность Comment
export class CommentEntity extends defaultClasses.TimeStamps {

  @prop({
    trim: true,
    required: true,
    minlength: 5,
    maxlength: 1024,
  })
  public text!: string;

  @prop({
    required: true,
    min: 1,
    max: 5
  })
  public rating!: number;

  @prop({
    required: true,
    ref: OfferEntity
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    required: true,
    ref: UserEntity
  })
  public userId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
