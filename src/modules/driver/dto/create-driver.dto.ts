import { IsBoolean, IsDateString, IsNumber, IsString, Length } from "class-validator";

export class CreateDriverDto {
    @IsString()
    @Length(2)
    driver_name: string;
  
    @IsDateString()
    birth_date: Date;
  
    @IsNumber()
    phone_number: number
  
    @IsString()
    car_number: string
  
    @IsString()
    car_type: string
  
    @IsBoolean()
    status: boolean
}
