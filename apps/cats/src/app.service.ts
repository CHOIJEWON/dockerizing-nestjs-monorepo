import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Cats!';
  }

  getTest(): string {
    return 'Docker image has been changed! by local building';
  }
}
