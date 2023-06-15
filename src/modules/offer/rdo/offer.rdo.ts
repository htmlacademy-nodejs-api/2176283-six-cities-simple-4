import { Expose } from 'class-transformer';
import { Location } from '../../../types/location.type.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { User } from '../../../types/user.type.js';

export default class OfferRdo {
@Expose()
  title!: string;

@Expose()
public description!: string;

@Expose()
public date!: Date;

@Expose()
public city!: string;

@Expose()
public previewImage!: string;

@Expose()
public images!: string[];

@Expose()
public isPremium!: boolean;

@Expose()
public rating!: number;

@Expose()
public type!: OfferType;

@Expose()
  bedrooms!: number;

@Expose()
public maxAdults!: number;

@Expose()
public price!: number;

@Expose()
public goods!: string[];

@Expose()
public user!: User;

@Expose()
public location!: Location;
}
