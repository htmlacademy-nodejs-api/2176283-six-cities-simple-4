/**
 * Функция для получения случайного числа в диапазоне.
 * @param min - начальное число диапахона
 * @param max - конечное число диапазона
 * @param numAfterDigit - количество знаков после запятой
 * @returns случайное число в диапазоне от 'min' до 'max'
 */
export function generateRandomValue(min:number, max: number, numAfterDigit = 0) {
  return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

/**
 * Функция для получения случайных элементов массива
 * @param items - массив элементов
 * @returns - случайные элементы массива
 */
export function getRandomItems<T>(items: T[]):T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
}

/**
 * Функция для получения случайного элемента массива
 * @param items - массив элементов
 * @returns - случайный элемент массива
 */
export function getRandomItem<T>(items: T[]):T {
  return items[generateRandomValue(0, items.length - 1)];
}

/**
 * Функия для получения случайного логического значения
 * @returns - случайное булево значение
 */
export function getRandomBoolean() {
  return Math.random() > 0.5;
}

/**
 * Функция для генерации случайного пароля
 * @returns - набор случайных символов
 */
export function getRandomPassword() {
  return Math.random().toString(36).slice(4, 15);
}
