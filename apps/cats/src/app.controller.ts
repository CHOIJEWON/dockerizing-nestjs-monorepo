import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test4')
  getTest(): string {
    return this.appService.getTest();
  }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
