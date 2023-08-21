import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateStoreDto {
  @IsString()
  store_name: string;

  @IsString()
  phone_number: string

  @IsString()
  address: string

  @IsString()
  longitude: string;

  @IsString()
  latitude: string;

  @IsBoolean()
  status: boolean

  @IsNumber()
  category_id: number

}
