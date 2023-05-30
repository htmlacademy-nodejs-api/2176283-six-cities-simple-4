import { User } from '../../types/user.type';

// Сущность User
export class UserEntity implements User {
  public nick = '';
  public email = '';
  public avatar = '';
  public password = '';
  public isPro = false;
}
