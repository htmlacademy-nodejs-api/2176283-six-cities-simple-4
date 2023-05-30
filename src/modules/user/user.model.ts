import mongoose from 'mongoose';
import { User } from '../../types/user.type';

//Документ(тип) наследуем от типа `User` и от типа `mongoose.Document` для модели
export interface UserDocument extends User, mongoose.Document {}

/**
 * Конфигурация (схема) документа типа `User`
 */
const userSchema = new mongoose.Schema({
  nick: String,
  email: String,
  avatar: String,
  password: String,
  isPro: Boolean,
});

//модель типа `UserDocument` на основании схемы `userSchema`
export const UserModel = mongoose.model<UserDocument>('User', userSchema);
