import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class  CreateBusinessDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @MinLength(10)
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    logo: string

}