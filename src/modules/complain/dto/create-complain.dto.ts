import { IsDefined, IsNumber, IsString, Length } from "class-validator";

export class CreateComplainDto {
    @IsDefined()
    @IsString()
    @Length(2)
    complain_text: string

    @IsNumber()
    user: number
}
