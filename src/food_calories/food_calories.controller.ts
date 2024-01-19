import { Controller } from '@nestjs/common';
import {FoodCaloriesService} from "./food_calories.service";
import{Food_caloriesDTO} from "./food_calories.dto";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SuccessResponce} from "../common/dto";
// import {FootCaloriesService} from "../foot_calories.service.ts";
import {FoodCalories} from "./food_calories.schema";


@ApiTags("FootCalories")
@Controller('/api')
export class FoodCaloriesController {

    constructor(private readonly FootCaloriesService: FoodCaloriesService) {
    }
}
