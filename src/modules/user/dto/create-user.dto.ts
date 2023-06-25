import { IsBoolean, IsEmail, IsString, Length } from 'class-validator';

//Действие создания нового пользователя
export default class CreateUserDto {
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public nick!: string;

  @IsEmail({}, {message: 'email must be valid address'})
  public email!: string;

  @IsString({message: 'avatarPath is required'})
  public avatar!: string;

  @IsString({message: 'password is required'})
  @Length(6, 12, {message: 'Min length for password is 6, max is 12'})
  public password!: string;

  @IsBoolean()
  public isPro!: boolean;
}
