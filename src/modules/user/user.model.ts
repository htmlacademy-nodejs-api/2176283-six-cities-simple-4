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
  nick: {
    type: String,
    required: true,
    minlength: [3, 'Min length for firstname is 3'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  },
  avatar: {
    type:String,
    required: true,
    minlength: [5, 'Min length for avatar path is 5'],
  },
  password: String,
  isPro: Boolean,
}, {
  timestamps: true,
});

//модель типа `UserDocument` на основании схемы `userSchema`
export const UserModel = mongoose.model<UserDocument>('User', userSchema);
