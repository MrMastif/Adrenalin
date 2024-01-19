import {Body, Controller, Get, Param, Post, Put, Delete, HttpStatus} from '@nestjs/common';
import {ExersicesService} from "./exersices.service";
import {CreateExersicesDTO, ExersicesResponse, UpdateExersiceURL} from "./exersices.dto";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SuccessResponce} from "../common/dto";

//перенос exersices.controller.js//

@ApiTags("Exersices")
@Controller("/api")
export class ExersicesController {
    constructor(private readonly exersicesService: ExersicesService) {
    }

    @ApiOperation({
        summary: "Получение упражнений"
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Получение списка упражнений",
        type: [ExersicesResponse]
    })
    @Get('/exersices')
    async getExersices(): Promise<ExersicesResponse[]> {
        return await this.exersicesService.getExersices()
    }
    @ApiOperation({
        summary: "Получение упражнений"
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Получение списка упражнений",
        type: [ExersicesResponse]
    })
    @Get('/exersices/:id')
    async getExersice(@Param("id") id: string) {
        return await this.exersicesService.getExersice(id)
    }

/////
    @ApiOperation({
        summary: "Create exersice"
    })
    @ApiBody({
        type:CreateExersicesDTO
    })

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Created exersice",
        type: SuccessResponce
    })

    @Post('/exersices')
    async createExersices(@Body() body: CreateExersicesDTO): Promise<SuccessResponce> {
        await this.exersicesService.createExersices(body)
        return {}
    }

    @ApiOperation({
        summary: "Update exersice"
    })
    @ApiBody({
        type:UpdateExersiceURL
    })

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Update exersice",
        type: UpdateExersiceURL
    })
    @Put('/exersices/:id')
    async updateExersice(@Param("id") id: string, @Body() url: UpdateExersiceURL) {
        return await this.exersicesService.updateExersice(id, url)
    }
    @ApiOperation({
        summary: "Delete exersice "
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Delete exersice",
        type: SuccessResponce
    })
    @Delete('/exersices')
    async deleteExersices(@Param("id") id: string) {
        return await this.exersicesService.deleteExersices(id)

    }

}
