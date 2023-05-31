//Действие создания нового пользователя
export default class CreateUserDto {
  public nick!: string;
  public email!: string;
  public avatar!: string;
  public isPro!: boolean;
}
