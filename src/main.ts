import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express'
import {resolve} from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/uploads', express.static(resolve('uploads')))
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  await app.listen(4000);
}
bootstrap();
