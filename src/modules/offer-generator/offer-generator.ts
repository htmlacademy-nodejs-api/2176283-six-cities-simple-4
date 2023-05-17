import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';

import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
  getRandomPassword,
  getRandomBoolean
} from '../../core/helpers/random.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 8;

const MIN_ADULTS = 1;
const MAX_ADULTS = 10;

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MAX_LATITUDE = 54;
const MIN_LATITUDE = 48;

const MAX_LONGITUDE = 11;
const MIN_LONGITUDE = 2;

const NUM_AFTER_DIGIT = 6;

/**
 * Класс для генерации объявления
 */
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomBoolean();
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(MIN_BEDROOMS, MAX_BEDROOMS).toString();
    const maxAdults = generateRandomValue(MIN_ADULTS, MAX_ADULTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const nick = getRandomItem<string>(this.mockData.nicks);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomPassword();
    const isPro = getRandomBoolean();
    const latitude = generateRandomValue(MIN_LATITUDE, MAX_LATITUDE, NUM_AFTER_DIGIT);
    const longitude = generateRandomValue(MIN_LONGITUDE, MAX_LONGITUDE, NUM_AFTER_DIGIT);

    return [
      title, description, date,
      city, previewImage, images,
      isPremium, rating, type,
      bedrooms, maxAdults, price,
      goods, nick, email,
      avatar, password, isPro,
      latitude, longitude
    ].join('\t');
  }
}
