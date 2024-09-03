import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Cats!';
  }

  getTest(): string {
    return 'github action success float source on docker';
  }
}
