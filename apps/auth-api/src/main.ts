import { NestFactory } from '@nestjs/core';
import { AuthApiModule } from './auth-api.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthApiModule);

  console.log('App Start At http://localhost:3300');
  await app.listen(3300);
}
bootstrap();
