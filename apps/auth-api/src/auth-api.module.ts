import { Module } from '@nestjs/common';
import { AuthApiController } from './auth-api.controller';
import { AuthApiService } from './auth-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [AuthApiController],
  providers: [AuthApiService],
})
export class AuthApiModule {}
