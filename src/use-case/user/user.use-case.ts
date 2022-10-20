import { Injectable } from '@nestjs/common';
import { ICRMServices, IDataServices } from '../../core/abstract';
import { User } from '../../core/entity';
@Injectable()
export class BookServices {
  constructor(
    private dataServices: IDataServices,
    private crmServices: ICRMServices,
  ) {}

  async createBook(book: User): Promise<User> {
    try {
      // call to our dependencies
      const createdBook = await this.dataServices.user.create(book);
      await this.crmServices.userAdded(createdBook);

      return createdBook;
    } catch (error) {
      throw error;
    }
  }
}
