import {IsEmail, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

export class PostDTO {
    @ApiProperty()
    @IsString()
    @IsEmail()

    @ApiProperty()
    @Length(15, 50)
    @IsNumber()
    name: string;

    @ApiProperty()
    @Type(() => String)
    age: string;
}

export class CreateTrainingDTO {
    @ApiProperty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsString()
    name: string;


    @ApiProperty()
    @IsNumber()
    quantity: number;


    @ApiProperty()
    exersices: number;

    @ApiProperty()
    @Length(15, 60)
    @IsNumber()
    weight_category: number;
}

export class UpdateTrainings {
    @IsNumber()
    weight: number;
}

// export interface IPost {
//
//     @ApiProperty()
//     name: string;
//
//     @ApiProperty()
//     age: string;
// }
//
// export  type Post = {
//     @ApiProperty()
//     name: string;
//
//     @ApiProperty()
//     age: number;
// }