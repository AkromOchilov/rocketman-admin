import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategy/jwt.strategy';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([User]), JwtModule.register({secret: process.env.SECRET_KEY, signOptions: {expiresIn: '1d'}})],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
