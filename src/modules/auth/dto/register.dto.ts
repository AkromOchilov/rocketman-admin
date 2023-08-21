import { IsEnum, IsString, Length } from "class-validator";

enum AdminRole {
    ADMIN = "admin",
    SUPER_ADMIN = "super-admin"
}

export class RegisterDto {
    @IsString()
    username: string;

    @IsString()
    @Length(8)
    password: string;

    @IsEnum(AdminRole)
    role?: AdminRole;
}
