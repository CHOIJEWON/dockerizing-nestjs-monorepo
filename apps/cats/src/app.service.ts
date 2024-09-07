import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Cats!';
  }

  getTest(): string {
    return 'cats-api successfully deploy!!';
  }

  getHealth(): string {
    return 'OK';
  }
}
