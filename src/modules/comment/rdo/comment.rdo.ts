import { Expose, Type } from 'class-transformer';
import UserRdo from '../../user/rdo/user.rdo.js';

export default class CommentRdo {
  @Expose()
  public id!: string;

  @Expose()
  public text!: string;

  @Expose()
  public rating!: number;

  @Expose()
  public offerId!: string;

  @Expose({name: 'createdAt'})
  public postDate!: string;

  @Expose({name: 'userId'})
  @Type(() => UserRdo)
  public userId!: string;
}
