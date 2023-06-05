import { DocumentType } from '@typegoose/typegoose';
import CreateUserDto from './dto/create-user.dto';
import { UserEntity } from './user.entity';

/**
 * Интерфейс действия управления пользователями
 * @method create - создание пользователя
 * @method findByEmail - поиск по Email
 * @method findOrCreate - найти либо создать документ
 */
export interface UserServiceInterface {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
  findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
