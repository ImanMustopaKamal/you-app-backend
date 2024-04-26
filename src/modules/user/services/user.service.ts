import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      email: 'john@mail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria@mail.com',
      password: 'guess',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
