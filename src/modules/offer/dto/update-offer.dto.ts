import { OfferType } from '../../../types/offer-type.enum.js';
import { Location } from '../../../types/location.type.js';

export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public date?: Date;
  public city?: string;
  public previewImage?: string;
  public images?: string[];
  public isPremium?: boolean;
  public rating?: number;
  public type?: OfferType;
  public bedrooms?: number;
  public maxAdults?: number;
  public price?: number;
  public goods?: string[];
  public location?: Location;
}
