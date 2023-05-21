import convict from 'convict';

export type RestSchema = {
  PORT: number;
}

/**
 * Схема конфигурации приложения
 */
export const configRestSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
});
