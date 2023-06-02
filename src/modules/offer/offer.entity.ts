import { defaultClasses } from '@typegoose/typegoose';
import typegoose, {getModelForClass} from '@typegoose/typegoose';
import { Offer } from '../../types/offer.type.js';
import { Good } from '../../types/good.type.js';
import { Image } from '../../types/image.type.js';
import { Location } from '../../types/location.type.js';
import { User } from '../../types/user.type.js';

const {prop, modelOptions} = typegoose;

//Расширяем интерфейс классом `defaultClasses.Base` для полей _id и id
export interface OfferEntity extends defaultClasses.Base {}

//Декоратор в котором задаем название коллекции
@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

// Сущность Offer
export class OfferEntity extends defaultClasses.TimeStamps implements Offer {

  @prop({required: true,})
  public title!: string;

  @prop({required: true,})
  public description!: string;

  @prop({required: true,})
  public date!: Date;

  @prop({required: true,})
  public city!: string;

  @prop({required: true,})
  public previewImage!: string;

  @prop({required: true,})
  public images!: Image[];

  @prop({required: true,})
  public isPremium!: boolean;

  @prop({required: true,})
  public rating!: number;

  @prop({required: true,})
  public type!: string;

  @prop({required: true,})
  public bedrooms!: number;

  @prop({required: true,})
  public maxAdults!: number;

  @prop({required: true,})
  public price!: number;

  @prop({required: true,})
  public goods!: Good[];

  @prop({required: true,})
  public host!: User;

  @prop({required: true,})
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
