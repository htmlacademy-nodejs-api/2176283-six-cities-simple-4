/**
 * Интерфейс для установки и закрытия соединения с БД MongoDB
 * @method connect - метод для установки подкючения
 * @param {string} uri - (universal resourse identifier) содердит необходимые данные для подключения
 * @method disconnect - метод для закрытия подключения
 */
export interface DatabaseClientInterface {
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
}
