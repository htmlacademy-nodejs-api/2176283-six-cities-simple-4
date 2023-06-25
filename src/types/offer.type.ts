import { User } from './user.type.js';
import { Location } from './location.type.js';
import { OfferType } from './offer-type.enum.js';
import { OfferCity } from './offer-city.enum.js';
import { Image } from './image.type.js';
import { Good } from './good.type.js';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: OfferCity;
  previewImage: string;
  images: Image[];
  isPremium: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Good[];
  user: User;
  location: Location;
}
