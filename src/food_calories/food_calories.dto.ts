import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";


export class Food_caloriesDTO {
    @ApiProperty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    weight: number;

    @ApiProperty()
    @IsNumber()
    protein: number;


    @ApiProperty()
    @IsNumber()
    fats: number;


    @ApiProperty()
    @IsNumber()
    carbohydrates: number;

    @ApiProperty()
    @IsNumber()
    calories: number;

    @ApiProperty()
    @IsString()
    image: string;

}
