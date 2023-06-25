import { OfferType } from '../../../types/offer-type.enum.js';
import { Location } from '../../../types/location.type.js';
import { IsBoolean, IsDateString, IsEnum, IsInt, IsMongoId, IsNotEmptyObject, IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';
import { OfferCity } from '../../../types/offer-city.enum.js';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: 'Minimum title length must be 20'})
  @MaxLength(1024, {message: 'Maximum title length must be 1024'})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public date?: Date;

  @IsOptional()
  @IsEnum(OfferCity, {message: 'City must be Paris, Cologne, Brussels, Amsterdam, Hamburg or Dusseldorf'})
  public city?: OfferCity;

  @IsOptional()
  @MaxLength(256, {message: 'Too short for field «image»'})
  public previewImage?: string;

  @IsOptional()
  @IsMongoId({each: true, message:'Images field must be an array of valid id'})
  public images?: string[];

  @IsOptional()
  @IsBoolean()
  public isPremium?: boolean;

  @IsOptional()
  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating?: number;

  @IsOptional()
  @IsEnum(OfferType, {message: 'Type must be apartment, house, room or hotel,'})
  public type?: OfferType;

  @IsOptional()
  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'The minimum number of rooms is 1'})
  @Max(8, {message: 'The maximum number of rooms is 8'})
  public bedrooms?: number;

  @IsOptional()
  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'The minimum number of guests is 1'})
  @Max(10, {message: 'The maximum number of guests is 10'})
  public maxAdults?: number;

  @IsOptional()
  @IsInt({message: 'Rating must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price?: number;

  @IsOptional()
  @IsMongoId({each: true, message:'Goods field must be an array of valid id'})
  public goods?: string[];

  @IsOptional()
  @IsNotEmptyObject()
  public location?: Location;
}
