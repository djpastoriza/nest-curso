import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto{
    @IsString({message:`The id most be a cool string`})
    @IsUUID()
    @IsOptional()
    readonly id?:string;

    @IsString({message:`The brand most be a cool string`})
    @IsOptional()
    readonly brand?:string;

    @IsString({message:`The model most be a cool string`})
    @IsOptional()
    readonly model?:string;
}