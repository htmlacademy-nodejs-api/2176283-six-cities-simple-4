import { User } from './user.type.js';
import { Location } from './location.type.js';
import { Good } from './good.type.js';
import { Image } from './image.type.js';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: string;
  previewImage: string;
  images: Image[];
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Good[];
  host: User;
  location: Location;
}
