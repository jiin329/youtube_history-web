import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth/auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';

// @Module({
//   controllers: [AuthController],
//   providers: [AuthService]
// })

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy, // provider 등록
    JwtStrategy,
  ],
})
export class AuthModule {}
