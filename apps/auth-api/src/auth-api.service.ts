import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthApiService {
  getHello(): string {
    return 'Hello World! Auth';
  }

  getTest(): string {
    return 'Hello Test Auth On Docker';
  }
}
