import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/exceptions/http-exception';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },CategoryService, JwtStrategy],
})
export class CategoryModule {}
