import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './modules/category/category.module';
import { StoreModule } from './modules/store/store.module';
import { ProductCategoryModule } from './modules/product_category/product_category.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { UserModule } from './modules/user/user.module';
import { ComplainModule } from './modules/complain/complain.module';
import { DriverModule } from './modules/driver/driver.module';

import { PaymentModule } from './modules/payment/payment.module';
import * as dotenv from 'dotenv'
dotenv.config()
// dsfdsf
// fsdfsdf
// fsdfsd
// fsdfsd/




// fdsfds
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: "postgres",
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      host: process.env.DB_HOST ,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities:[__dirname + "/modules/**/entities/*.entity.{ts,js}"]
    }),
    CategoryModule,
    StoreModule,
    ProductCategoryModule,
    ProductModule,
    OrderModule,
    UserModule,
    ComplainModule,
    DriverModule,
    PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
