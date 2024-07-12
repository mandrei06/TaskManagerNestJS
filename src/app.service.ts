import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: string[] = ['John Doe', 'Jane Doe', 'Alice', 'Bob'];

  getUsers(): string[] {
    return this.users;
  }
}
