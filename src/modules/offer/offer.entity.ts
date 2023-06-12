import typegoose, { Ref, defaultClasses, getModelForClass} from '@typegoose/typegoose';
import { Location } from '../../types/location.type.js';
import { UserEntity } from '../user/user.entity.js';
import { OfferCity } from '../../types/offer-city.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';

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
export class OfferEntity extends defaultClasses.TimeStamps {

  @prop({
    required: true,
    minlength: 10,
    maxlength: 100
  })
  public title!: string;

  @prop({
    required: true,
    minlength: 20,
    maxlength: 1024
  })
  public description!: string;

  @prop({required: true})
  public date!: Date;

  @prop({
    required: true,
    type: () => String,
    enum: OfferCity
  })
  public city!: OfferCity;

  @prop({required: true})
  public previewImage!: string;

  @prop({required: true})
  public images!: string[];

  @prop({
    required: true,
    default: false
  })
  public isPremium!: boolean;

  @prop({
    required: true,
    min: 1,
    max: 5
  })
  public rating!: number;

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop({
    required: true,
    min: 1,
    max: 8
  })
  public bedrooms!: number;

  @prop({
    required: true,
    min: 1,
    max: 10
  })
  public maxAdults!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000
  })
  public price!: number;

  @prop({required: true})
  public goods!: string[];

  @prop({default: 0})
  public commentCount!: number;

  @prop({
    required: true,
    ref: UserEntity
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
