import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  category_name: string;
  
  @IsNotEmpty()
  @IsBoolean()
  status: boolean
}
