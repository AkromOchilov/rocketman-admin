import { IsDefined, IsNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsDefined()
    @IsString()
    @Length(2)
    username: string

    @IsString()
    lastname: string

    @IsDefined()
    @IsNumber()
    phone_number: number
}
