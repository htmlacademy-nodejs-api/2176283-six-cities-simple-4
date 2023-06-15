import { Expose } from 'class-transformer';

export default class UserRdo {
  @Expose()
  public id!: string;

  @Expose()
  public nick!: string;

  @Expose()
  public isPro!: boolean;
}
