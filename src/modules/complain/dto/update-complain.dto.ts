import { IsString } from "class-validator";

export class UpdateComplainDto {
    @IsString()
    complain_text: string
}
