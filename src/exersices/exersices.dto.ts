import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

export class ExersicesResponse {
    @ApiProperty()
    _id: string;

    @ApiProperty({example:"Nica"})
    name: string;

    @ApiProperty()
    weight: number;



    approaches: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    pulse: number;

    @ApiProperty()
    categories: string[];

    @ApiProperty()
    image: string;
}

// @ts-ignore
export class CreateExersicesDTO {
    @ApiProperty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    weight: number;

    @ApiProperty()
    @IsNumber()
    approaches: number;

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsNumber()
    pulse: number;

    @ApiProperty()
    @IsString()
    categories: string[]
}

export class UpdateExersiceURL {
    @IsNumber()
    weight: number;
}
