import { Location } from '../../../types/location.type.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: string;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: string;
  public bedrooms!: number;
  public maxAdults!: number;
  public price!: number;
  public goods!: string[];
  public userId!: string;
  public location!: Location;
}
