import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { Bedrooms } from '../../types/bedrooms.enum.js';
import { WeekDay } from '../../types/week-day.enum.js';
import { Rating } from '../../types/rating.enum.js';
import { Adults } from '../../types/adults.enum.js';
import { Price } from '../../types/price.enum.js';
import { Latitude } from '../../types/latitude.enum.js';
import { Longitude } from '../../types/longitude.enum.js';

import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
  getRandomPassword,
  getRandomBoolean
} from '../../core/helpers/random.js';

const NUM_AFTER_DIGIT = 6;

/**
 * Класс для генерации объявления
 */
export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = dayjs().subtract(generateRandomValue(WeekDay.First, WeekDay.Last), 'day').toString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomBoolean();
    const rating = generateRandomValue(Rating.Min, Rating.Max).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(Bedrooms.Min, Bedrooms.Max).toString();
    const maxAdults = generateRandomValue(Adults.Min, Adults.Max).toString();
    const price = generateRandomValue(Price.Min, Price.Max).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const nick = getRandomItem<string>(this.mockData.nicks);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomPassword();
    const isPro = getRandomBoolean();
    const latitude = generateRandomValue(Latitude.Min, Latitude.Max, NUM_AFTER_DIGIT);
    const longitude = generateRandomValue(Longitude.Min, Longitude.Max, NUM_AFTER_DIGIT);

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
