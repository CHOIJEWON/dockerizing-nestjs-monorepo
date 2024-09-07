import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Cats!';
  }

  getTest(): string {
    return 'change cats-api at the same time auth-api';
  }

  getHealth(): string {
    return 'OK';
  }
}
