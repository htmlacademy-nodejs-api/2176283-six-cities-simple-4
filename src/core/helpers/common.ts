import { ClassConstructor, plainToInstance } from 'class-transformer';
import *as crypto from 'node:crypto';

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}

/**
 * Функция для хэширования пароля
 * @param {string} line - пароль пользователя
 * @param {string} salt - случайный набор символов для хэширования пароля
 * @return {string} хэшированный пароль
 */
export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export function fillDTO<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});
}
