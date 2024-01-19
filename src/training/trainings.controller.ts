import {Body, Controller, Get, Param, Post, Put, Delete, HttpStatus} from '@nestjs/common';
import {TrainingsService} from "./trainings.service";
import {IPost, PostDTO} from "../app.dto";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateExersicesDTO, ExersicesResponse, UpdateExersiceURL} from "../exersices/exersices.dto";
import {SuccessResponce} from "../common/dto";
import {CreateTrainingDTO, UpdateTrainings} from "./trainings.dto";

@ApiTags("Trainings")
@Controller("/api")
export class TrainingsController {

    constructor(private readonly trainingsService: TrainingsService) {
    }
    @ApiOperation({
        summary: "Получение упражнений"
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Получение списка упражнений",
        type: [TrainingsService]
    })
    @Get('/trainings')
    async getTrainings() {
        return await this.trainingsService.getTrainings()
    }

    @Get("/trainings/:id")
    async getTraining(@Param("id") id: string) {
        return await this.trainingsService.getTraining(id)
    }
    @ApiOperation({
        summary: "Create trainings"
    })
    @ApiBody({
        type:CreateTrainingDTO
    })

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Created trainings",
        type: SuccessResponce
    })
    @Post("/trainings")
    async createTraining(@Body() body:CreateTrainingDTO): Promise<SuccessResponce> {
         await this.trainingsService.createTraining({})
        return {}
    }
    @ApiOperation({
        summary: "Update trainings"
    })
    @ApiBody({
        type:UpdateTrainings
    })

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Update trainings",
        type: UpdateTrainings
    })
    @Put("/trainings")
    async updateTraining(@Param("id") id: string, @Body() body: UpdateTrainings) {
        return await this.trainingsService.updateTraining(id, body)
    }

    @ApiOperation({
        summary: "Delete trainings "
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Delete trainings",
        type: "DeleteTrainings"
    })
    @Delete("/trainings/:id")
    async deleteTraining(@Param("id") id: string) {
        return await this.trainingsService.deleteTraining(id)
    }

    // @Get("/trainings")
    // getHello(): object {
    //     // return this.trainingService.getHello();
    //     let a = {a: 0}
    //     return a
    // }
    // @Post("/trainings")
    // post(@Body() body:PostDTO): object | string {
    //     console.log(body.name)
    //     // body.name.toString()
    //     return body.name
    // }

}
