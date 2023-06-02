import { Good } from '../../../types/good.type.js';
import { Image } from '../../../types/image.type.js';
import { Location } from '../../../types/location.type.js';
import { User } from '../../../types/user.type.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: string;
  public previewImage!: string;
  public images!: Image[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: string;
  public bedrooms!: number;
  public maxAdults!: number;
  public price!: number;
  public goods!: Good[];
  public host!: User;
  public location!: Location;
}
