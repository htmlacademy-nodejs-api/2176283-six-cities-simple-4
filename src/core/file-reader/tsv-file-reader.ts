import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';

/**
 * Класс для чтения tsv-файлов
 */
export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }
}
