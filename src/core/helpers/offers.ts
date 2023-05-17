import { Offer } from '../../types/offer.type.js';

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

  const host = {
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
    bedrooms: Number.parseInt(bedrooms, 10),
    maxAdults: Number.parseInt(maxAdults, 10),
    price: Number.parseInt(price, 10),
    goods: goods.split(';')
      .map((name) => ({name})),
    host,
    location,
  } as unknown as Offer;
}
