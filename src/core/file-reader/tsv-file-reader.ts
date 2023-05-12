import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';

/**
 * Класс для чтения tsv-файлов
 */
export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms, maxAdults, price, goods, nick, email, avatar, password, isPro, latitude, longitude]) => ({
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
        host: {nick, email, avatar, password, isPro: Boolean(isPro)},
        location: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
      }));
  }
}
