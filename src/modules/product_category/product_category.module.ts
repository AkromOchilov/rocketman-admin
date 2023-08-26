import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { ProductCategoryController } from './product_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/product_category.entity';
import { Store } from '../store/entities/store.entity';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/exceptions/http-exception';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory, Store])],
  controllers: [ProductCategoryController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },ProductCategoryService, JwtStrategy],
})
export class ProductCategoryModule {}
