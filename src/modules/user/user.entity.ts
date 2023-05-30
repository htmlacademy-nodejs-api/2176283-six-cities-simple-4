import { User } from '../../types/user.type';
import typegoose, {defaultClasses, getModelForClass } from '@typegoose/typegoose';

const {prop} = typegoose;

// Сущность User
export class UserEntity extends defaultClasses.TimeStamps implements User {

  @prop({required: true})
  public nick = '';

  @prop({unique: true, required: true})
  public email = '';

  @prop({required: false, default: ''})
  public avatar = '';

  @prop({required: true})
  public password = '';

 @prop({required: false})
  public isPro = false;
}

export const UserModel = getModelForClass(UserEntity);
