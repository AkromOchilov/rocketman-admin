import { IsBoolean } from "class-validator";

export class UpdateCategoryStatusDto {
  @IsBoolean()
  status: boolean
}