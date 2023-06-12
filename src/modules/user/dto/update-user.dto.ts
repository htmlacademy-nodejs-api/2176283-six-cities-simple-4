import { User } from '../../../types/user.type.js';

type UpdateUserDto = Pick<User, 'nick' | 'avatar'>;

export default UpdateUserDto;
