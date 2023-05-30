import mongoose from 'mongoose';
import { User } from '../../types/user.type';

//Документ(тип) наследуем от типа `User` и от типа `mongoose.Document` для модели
export interface UserDocument extends User, mongoose.Document {
  createdAd: Date,
  updateAd: Date,
}

/**
 * Конфигурация (схема) документа типа `User`
 */
const userSchema = new mongoose.Schema({
  nick: String,
  email: {
    type: String,
    unique: true
  },
  avatar: String,
  password: String,
  isPro: Boolean,
}, {
  timestamps: true,
});

//модель типа `UserDocument` на основании схемы `userSchema`
export const UserModel = mongoose.model<UserDocument>('User', userSchema);
