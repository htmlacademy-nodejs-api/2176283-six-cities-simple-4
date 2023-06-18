import { Expose } from 'class-transformer';

export default class UserRdo {
  @Expose()
  public nick!: string;

  @Expose()
  public email!: string;

  @Expose()
  public avatar!: string;

  @Expose()
  public isPro!: boolean;
}
