import { ClassConstructor, plainToInstance } from 'class-transformer';
import * as crypto from 'node:crypto';
import * as jose from 'jose';

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

export function createErrorObject(message: string) {
  return {
    error: message,
  };
}

/**
 * Функция для создания токена
 * @param algorithm алгоритм шифрования
 * @param jwtSecret секрет
 * @param payload данные, помещаемые в токен
 * @returns токен
 * @method setProtectedHeader подготовка заголовка в соответствии с алгоритмом шифрования
 * @method setIssuedAt заполнение поля 'iat'(дата выпуска токена)
 * @method setExpirationTime срок действия токена
 * @method sign формирует токен
 */
export async function createJWT(
  algorithm: string,
  jwtSecret: string,
  payload: object
): Promise<string> {
  return new jose.SignJWT({...payload})
    .setProtectedHeader({alg: algorithm})
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));
}
