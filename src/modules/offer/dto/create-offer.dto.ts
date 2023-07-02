import { MinLength, MaxLength, IsDateString, IsInt, IsBoolean, IsMongoId, IsEnum, IsArray, IsNotEmptyObject, Min, Max } from 'class-validator';
import { Location } from '../../../types/location.type.js';
import { OfferType } from '../../../types/offer-type.enum.js';
import { OfferCity } from '../../../types/offer-city.enum.js';
import { Image } from '../../../types/image.type.js';
import { Good } from '../../../types/good.type.js';

export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum title length must be 20'})
  @MaxLength(1024, {message: 'Maximum title length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public date!: Date;

  @IsEnum(OfferCity, {message: 'City must be Paris, Cologne, Brussels, Amsterdam, Hamburg or Dusseldorf'})
  public city!: OfferCity;

  @MaxLength(256, {message: 'Too short for field «image»'})
  public previewImage!: string;

  @IsArray({message: 'Field images must be an array'})
  @IsMongoId({each: true, message:'Images field must be an array of valid id'})
  public images!: Image[];

  @IsBoolean()
  public isPremium!: boolean;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;

  @IsEnum(OfferType, {message: 'Type must be apartment, house, room or hotel,'})
  public type!: OfferType;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'The minimum number of rooms is 1'})
  @Max(8, {message: 'The maximum number of rooms is 8'})
  public bedrooms!: number;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'The minimum number of guests is 1'})
  @Max(10, {message: 'The maximum number of guests is 10'})
  public maxAdults!: number;

  @IsInt({message: 'Rating must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price!: number;

  @IsArray({message: 'Field goods must be an array'})
  @IsMongoId({each: true, message:'Goods field must be an array of valid id'})
  public goods!: Good[];

  public userId!: string;

  @IsNotEmptyObject()
  public location!: Location;
}
