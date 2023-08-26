import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Category } from '../category/entities/category.entity';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/exceptions/http-exception';

@Module({
  imports: [TypeOrmModule.forFeature([Store, Category])],
  controllers: [StoreController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },StoreService, JwtStrategy],
})
export class StoreModule {}
