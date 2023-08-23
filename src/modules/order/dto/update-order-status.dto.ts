import { IsEnum, IsNotEmpty } from "class-validator";

enum order_status {
  BUYURTMA = "buyurtma",
  QABUL = "qabul",
  YETKAZISH = "yetkazish",
  YAKUN = "yakun",
  BEKOR = "bekor"
}

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsEnum(order_status)
  status: order_status;
}