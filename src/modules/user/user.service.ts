import { UserEntity, UserModel } from './user.entity';
import { DocumentType } from '@typegoose/typegoose';
import CreateUserDto from './dto/create-user.dto';
import { UserServiceInterface } from './user-service.interface';


/**
 * Создание новых документов в БД
 * @method create - создание нового документа в БД
 * @method setPassword - хэширование пароля
 */
export default class UserService implements UserServiceInterface {
  public async create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    user.setPassword(dto.password, salt);

    return UserModel.create(user);
  }
}
