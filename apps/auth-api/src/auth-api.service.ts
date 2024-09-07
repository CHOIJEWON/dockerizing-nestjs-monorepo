import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthApiService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return 'Hello World! Auth';
  }

  getTest(): string {
    return 'Hello Test Auth On Docker';
  }

  getTestApi(): string {
    return this.configService.get('TEST');
  }

  getHealth(): string {
    return 'OK';
  }
}
