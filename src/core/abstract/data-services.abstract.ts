import { Address, Company, Person, Tenant, User } from '../entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract address: IGenericRepository<Address>;

  abstract company: IGenericRepository<Company>;

  abstract person: IGenericRepository<Person>;

  abstract tenant: IGenericRepository<Tenant>;

  abstract user: IGenericRepository<User>;
}
