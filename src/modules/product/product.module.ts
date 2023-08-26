import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductCategory } from '../product_category/entities/product_category.entity';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/exceptions/http-exception';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory])],
  controllers: [ProductController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },ProductService, JwtStrategy],
})
export class ProductModule {}
