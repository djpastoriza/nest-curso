import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsPositive({message:`The 'no' parameter must be a positive number`})
    @IsInt({message:`The 'no' parameter must be a number`})
    @Min(1,{message:`The 'no' parameter must be greater than 1`})
    no;

    @IsString({message:`The 'name' parameter must be a string`})
    @MinLength(1,{message:`The 'name' parameter length must be greater than 1`})
    name;
}
