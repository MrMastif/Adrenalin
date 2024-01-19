import {IsEmail, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {Type} from "class-transformer";

export class PostDTO {
    @IsString()
    @IsEmail()
    @Length(15, 50)
        // @IsOptional()
    name: string;
    // @IsNumber()
    @Type(() => String)
    age: string;
}

export interface IPost {
    name: string;
    age: string;
}

export  type Post = {
    name: string;
    age: string;
}
