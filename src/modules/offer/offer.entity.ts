import typegoose, { Ref, defaultClasses, getModelForClass} from '@typegoose/typegoose';
import { Location } from '../../types/location.type.js';
import { UserEntity } from '../user/user.entity.js';

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

  @prop({required: true})
  public title!: string;

  @prop({required: true})
  public description!: string;

  @prop({required: true})
  public date!: Date;

  @prop({required: true})
  public city!: string;

  @prop({required: true})
  public previewImage!: string;

  @prop({required: true})
  public images!: string[];

  @prop({
    required: true,
    default: false
  })
  public isPremium!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
  public type!: string;

  @prop({required: true})
  public bedrooms!: number;

  @prop({required: true})
  public maxAdults!: number;

  @prop({required: true})
  public price!: number;

  @prop({required: true})
  public goods!: string[];

  @prop({
    required: true,
    ref: UserEntity
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
