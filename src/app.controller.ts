import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {IPost, PostDTO} from "./app.dto";
import {ApiTags} from "@nestjs/swagger";
let a = 0;

@ApiTags("App")
@Controller("/api")
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get("/main")
    getHello(): object {
        // return this.appService.getHello();
        let a = {a: 0}
        return a
    }

    @Post("/post")
    post(@Body() body: PostDTO): object | string {
        console.log(body.name)
        // body.name.toString()
        return body.name
    }

    @Put("/date")
    testDate() {
        return this.appService.test()
    }
}
