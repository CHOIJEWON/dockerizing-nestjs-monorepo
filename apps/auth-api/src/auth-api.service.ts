import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthApiService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return 'Hello World! Auth';
  }

  getTest(): string {
<<<<<<< Updated upstream
    return 'Hello Test Auth On Docker';
=======
<<<<<<< Updated upstream
    return 'Hello Test!';
=======
    return 'Hello Test Auth On Docker123123';
  }

  getTestApi(): string {
    return this.configService.get('TEST');
  }

  getHealth(): string {
    return 'OK';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  }
}
