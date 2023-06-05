import { User } from '../../types/user.type.js';
import typegoose, {defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { createSHA256 } from '../../core/helpers/common.js';

const {prop, modelOptions} = typegoose;

//Расширяем интерфейс классом `defaultClasses.Base` для полей _id и id
export interface UserEntity extends defaultClasses.Base {}

//Декоратор в котором задаем название коллекции
@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

// Сущность User
export class UserEntity extends defaultClasses.TimeStamps implements User {

  @prop({required: true, default: ''})
  public nick = '';

  @prop({unique: true, required: true})
  public email = '';

  @prop({required: false, default: ''})
  public avatar = '';

  @prop({required: true, default: ''})
  private password?: string;


 @prop({required: false})
  public isPro = false;

 constructor(userData: User) {
   super();

   this.email = userData.email;
   this.avatar = userData.avatar;
   this.nick = userData.nick;
   this.isPro = userData.isPro;
 }

 public setPassword(password: string, salt: string) {
   this.password = createSHA256(password, salt);
 }

 public getPassword() {
   return this.password;
 }
}

export const UserModel = getModelForClass(UserEntity);
