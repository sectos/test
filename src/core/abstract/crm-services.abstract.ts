import { User } from '../entity';

export abstract class ICRMServices {
  abstract userAdded(user: User): Promise<boolean>;
}
