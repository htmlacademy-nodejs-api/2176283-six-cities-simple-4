import { Offer } from '../../types/offer.type.js';

const DEFAULT_NUMBER_SYSTEM = 10;

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    date,
    city,
    previewImage,
    images,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    nick,
    email,
    avatar,
    password,
    isPro,
    latitude,
    longitude
  ] = offerData.replace('\n', '').split('\t');

  const user = {
    nick,
    email,
    avatar,
    password,
    isPro
  };

  const location = {
    latitude,
    longitude
  };

  return {
    title,
    description,
    date: new Date(date),
    city,
    previewImage,
    images: images.split(';')
      .map((name) => ({name})),
    isPremium: Boolean(isPremium),
    rating: Number.parseFloat(rating),
    type,
    bedrooms: Number.parseInt(bedrooms, DEFAULT_NUMBER_SYSTEM),
    maxAdults: Number.parseInt(maxAdults, DEFAULT_NUMBER_SYSTEM),
    price: Number.parseInt(price, DEFAULT_NUMBER_SYSTEM),
    goods: goods.split(';')
      .map((name) => ({name})),
    user,
    location,
  } as unknown as Offer;
}
