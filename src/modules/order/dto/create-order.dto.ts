import { IsEnum, IsNotEmpty, IsString, IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';

enum order_status {
  BUYURTMA = "buyurtma",
  QABUL = "qabul",
  YETKAZISH = "yetkazish",
  YAKUN = "yakun",
  BEKOR = "bekor"
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsEnum(order_status)
  status: order_status;

  @IsNotEmpty()
  @IsString()
  payment_type: string;

  @IsNotEmpty()
  @IsString()
  longitude: string;

  @IsNotEmpty()
  @IsString()
  latitude: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  productIds: number[];

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
